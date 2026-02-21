import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from supabase import create_client, Client

load_dotenv()

# ---------- Supabase client ----------
SUPABASE_URL: str = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY: str = os.getenv("SUPABASE_SERVICE_KEY", "")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# ---------- FastAPI app ----------
app = FastAPI(title="Cavista API", version="0.1.0")

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
