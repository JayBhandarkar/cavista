import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from supabase import create_client, Client
from google.cloud import speech
import asyncio
import json
import queue
import threading

load_dotenv()

# Set Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = r"C:\Users\Nikhi\OneDrive\Desktop\Cavista\cavista-488110-6647f4339dce.json"

# ---------- Supabase client ----------
SUPABASE_URL: str = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY: str = os.getenv("SUPABASE_SERVICE_KEY", "")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# ---------- Google Speech client ----------
speech_client = speech.SpeechClient()

# ---------- FastAPI app ----------
app = FastAPI(title="Mediq API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- Schemas ----------
class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: str
    email: str


# ---------- Routes ----------
@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.post("/auth/login", response_model=LoginResponse)
def login(payload: LoginRequest):
    """Authenticate a user via Supabase Auth."""
    try:
        response = supabase.auth.sign_in_with_password(
            {"email": payload.email, "password": payload.password}
        )

        session = response.session
        user = response.user

        if not session or not user:
            raise HTTPException(status_code=401, detail="Invalid email or password.")

        return LoginResponse(
            access_token=session.access_token,
            user_id=user.id,
            email=user.email or payload.email,
        )

    except Exception as e:
        error_message = str(e)
        if "Invalid" in error_message or "credentials" in error_message.lower():
            raise HTTPException(status_code=401, detail="Invalid email or password.")
        raise HTTPException(status_code=500, detail="Authentication service error.")


@app.websocket("/ws/transcribe")
async def transcribe_audio(websocket: WebSocket):
    await websocket.accept()
    print("WebSocket connected")

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code="en-US",
        enable_automatic_punctuation=True,
    )

    streaming_config = speech.StreamingRecognitionConfig(
        config=config,
        interim_results=True,
    )

    audio_queue = queue.Queue()
    loop = asyncio.get_event_loop()

    def request_generator():
        while True:
            chunk = audio_queue.get()
            if chunk is None:
                break
            yield speech.StreamingRecognizeRequest(audio_content=chunk)

    def recognize():
        complete_transcript = ""
        try:
            responses = speech_client.streaming_recognize(
                streaming_config,
                request_generator(),
            )

            for response in responses:
                print("GOT RESPONSE FROM GOOGLE")
                for result in response.results:
                    transcript = result.alternatives[0].transcript
                    is_final = result.is_final
                    
                    if is_final:
                        print(f"SPEECH: {transcript}")
                        complete_transcript += " " + transcript
                    else:
                        print(f"LISTENING: {transcript}")
        except Exception as e:
            print(f"Speech processing error: {e}")
        finally:
            # Send complete transcript when stream ends
            if complete_transcript.strip():
                asyncio.run_coroutine_threadsafe(
                    websocket.send_json({
                        "transcript": complete_transcript.strip(),
                        "is_final": True,
                        "complete": True
                    }),
                    loop
                )

    threading.Thread(target=recognize, daemon=True).start()

    try:
        while True:
            data = await websocket.receive_bytes()
            print(f"Received audio chunk: {len(data)} bytes")
            audio_queue.put(data)

    except WebSocketDisconnect:
        print("WebSocket disconnected")
        audio_queue.put(None)
