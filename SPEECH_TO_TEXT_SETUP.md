# Speech-to-Text Integration Setup

## Backend Setup

1. Install dependencies:
```bash
cd backend
pip install -r requirements.txt
```

2. The Google Cloud credentials file is already configured at:
   `C:\Users\Nikhi\OneDrive\Desktop\Cavista\cavista-488110-6647f4339dce.json`

3. Start the backend server:
```bash
python -m uvicorn main:app --reload --port 8000
```

## How It Works

### Real-time Transcription
- When you click the recording button, it:
  1. Requests microphone permission
  2. Connects to backend via WebSocket (`ws://localhost:8000/ws/transcribe`)
  3. Streams audio chunks every 250ms
  4. Receives real-time transcription back
  5. Displays interim results (gray text) and final results (black text)

### Speaker Diarization
- Google Cloud Speech API automatically detects different speakers
- Configured for 2 speakers (Doctor/Patient)
- Speaker tags are included in the response

### Features
✅ Real-time transcription as you speak
✅ Interim results (live preview)
✅ Final results (confirmed text)
✅ Speaker detection (Doctor/Patient)
✅ Timer display
✅ Waveform visualization
✅ Automatic punctuation

## Testing

1. Start backend: `cd backend && python -m uvicorn main:app --reload --port 8000`
2. Start frontend: `cd frontend && npm run dev`
3. Navigate to consultation page
4. Click the Live Interaction recording button
5. Allow microphone access
6. Start speaking - you'll see text appear in real-time!

## Next Steps (Future)
- Store transcriptions in Supabase database
- Add conversation history
- Implement role-based filtering
- Add export functionality
