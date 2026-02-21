# Cavista — Smart EMR & Diagnostic Assistant

A full-stack Electronic Medical Records platform with AI-powered voice documentation, built with **Next.js 16** (frontend) and **FastAPI** (backend), authenticated via **Supabase**.

---

## Project Structure

```
cavista/
├── frontend/       # Next.js 16 + React 19 app
└── backend/        # FastAPI Python server
```

---

## Setup

### Prerequisites
- **Node.js** 18+ and **npm**
- **Python** 3.10+

---

### 1. Clone the repo

```bash
git clone <repo-url>
cd cavista
```

---

### 2. Frontend setup

```bash
cd frontend
npm install
```

Create a `.env.local` file (copy from the example):

```bash
cp .env.local.example .env.local
```

Fill in your Supabase credentials in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Start the dev server:

```bash
npm run dev
# → http://localhost:3000
```

---

### 3. Backend setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate # macOS/Linux
pip install -r requirements.txt
```

Create a `.env` file (copy from the example):

```bash
cp .env.example .env
```

Fill in `.env`:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_KEY=your-supabase-service-role-key
```

Start the backend:

```bash
python -m uvicorn main:app --reload --port 8000
# → http://localhost:8000
```

---

## Environment Variables

| File | Variable | Where to get it |
|------|----------|----------------|
| `frontend/.env.local` | `NEXT_PUBLIC_SUPABASE_URL` | Supabase Dashboard → Settings → API |
| `frontend/.env.local` | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Settings → API |
| `backend/.env` | `SUPABASE_URL` | Supabase Dashboard → Settings → API |
| `backend/.env` | `SUPABASE_SERVICE_KEY` | Supabase Dashboard → Settings → API → service_role key |

> ⚠️ Never commit `.env` or `.env.local` — they are gitignored.

---

## Google OAuth (optional)

To enable Google sign-in:

1. Go to **Supabase Dashboard → Authentication → Providers → Google** and enable it
2. Create OAuth credentials at [console.cloud.google.com](https://console.cloud.google.com)
3. Add redirect URI: `https://<your-project>.supabase.co/auth/v1/callback`
4. Add site URL `http://localhost:3000` and redirect URL `http://localhost:3000/auth/callback` in Supabase → Authentication → URL Configuration
