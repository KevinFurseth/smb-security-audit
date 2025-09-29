# SMB Security Audit — Starter Pack (MVP)

Free self‑assessment tool that gives small businesses a quick security score and top recommendations.

## Structure
```
smb-security-audit/
├─ server/        # Express API (JS)
├─ client/        # React + Vite + Tailwind (JS)
├─ docker/        # Dockerfiles + nginx
├─ .github/workflows/ci.yml
└─ docker-compose.yml
```

## Quick start (local dev)

### Backend
```bash
cd server
npm install
npm run dev
```

### Frontend
```bash
cd client
npm install
npm run dev
```
Open http://localhost:5173 — the client proxies `/api` to `http://localhost:3001` in dev.

## Build with Docker (optional)
```bash
docker compose up --build
```

## Deploy (CapRover sketch)
- App 1: `smb-audit-api` (Node, PORT=3001)
- App 2: `smb-audit-web` (Nginx static)
- In `smb-audit-web` service, proxy `/api` -> `http://srv-captain--smb-audit-api:3001/`
