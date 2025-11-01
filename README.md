# 🩺 La Tortuga EMR & Dashboard

### Overview
**La Tortuga EMR** is a **tablet-first medical and dental intake system** built for volunteer missions in rural Chiapas, Mexico.  
It captures patient data offline, stores it locally, and syncs securely to Firebase when connectivity returns.  
A connected dashboard summarizes community trends for clinicians, coordinators, and foundation leaders.

---

### 🌍 Mission Alignment
This project supports **La Tortuga Foundation’s** goal of bringing healthcare, dental care, and education to underserved rural communities through technology that is:
- **Offline-first** (works with no Wi-Fi)
- **Bilingual** (English / Spanish)
- **Lightweight & privacy-aware**
- **Built for tablets** — no physical keyboards required

---

### 🎯 Goals
1. **Medical Intake EMR** – structured form for vital signs, symptoms, and observations  
2. **Dental Intake EMR** – oral-health-specific fields and procedures  
3. **Data Dashboard** – live analytics for population trends and resource planning  

---

### ⚙️ Core Features (MVP)
- Offline-first data capture and local caching  
- Sync to **Firebase Firestore** when internet is available  
- **Role-based access** (Clinician / Admin / Viewer)  
- **De-identified data export** to BigQuery for Looker Studio dashboard  
- **Bilingual toggle** (English ⇄ Español)  
- **Touch-optimized inputs** – large checkboxes, numeric keypads, pain-scale buttons  
- **Minimal typing** – pre-filled dropdowns, medication lists, and “Other” fields for free text  
- **Stylus & glove-friendly** UI (no hardware keyboards)  

---

### 🧠 Data Model Highlights
- **Patient → IntakeForm** (Medical / Dental)  
- **Vitals**: numeric keypad input (BP, HR, Temp, O₂, Weight)  
- **Pain Scale**: 0–10 slider or buttons  
- **Systems Review**: Neuro → ENT → Cardiac → Respiratory → GI → Musculoskeletal → Skin/Wound  
- **Medications**: selectable common list + free-text “Other”  
- **Notes**: optional stylus or soft keyboard input  
- **Offline Storage**: local SQLite; auto-sync to Firebase once online  

---

### 🧩 Architecture
| Layer | Technology |
|-------|-------------|
| **Frontend** | React Native (Expo) |
| **Backend / Sync** | Firebase Firestore + Cloud Functions + Storage |
| **Analytics** | BigQuery → Looker Studio dashboard |
| **Auth / Identity** | Firebase Auth (Role-based) |
| **Offline Cache** | SQLite (Expo SQLite / MMKV) |
| **Project Management** | Asana • Slack • GitHub (Cline AI Integration) |

---

### 🗂️ Repository Structure
/docs
/rollout ← Governance, PRD, CIP, SDS, VVP documents
/PROJECT_OVERVIEW_LA_TORTUGA.md ← Unified workflow + UX guide
/AI_ONBOARDING.md ← AI context & collaboration rules
/configs ← JSON forms for medical & dental intakes
/i18n ← Translations (en.json / es.json)
/src
/components
/screens
/services
/firebase ← Firebase + BigQuery configuration
/scripts ← Setup & deployment scripts

---

### 🚀 Getting Started
1. **Clone the repo**
   ```bash
   git clone git@github.com:La-Tortuga-Foundation/emr-app.git
   cd emr-app

2. **Install dependencies**
   yarn install

3. **Configure environment**
   cp .env.example .env

4. **Run the app**
   expo start

---

### 🧭 Development Guidelines

- All changes go through **pull requests** to `main`.  
- Use **feature branches** (e.g., `feature/offline-sync`).  
- Keep forms and translations in `/configs` and `/i18n` — **never hard-code text**.  
- Reference rollout docs (`/docs/rollout/`) for data-field names and workflow logic.  
- Follow AI assistant conventions in `/docs/AI_ONBOARDING.md`.  

---

### 🧑‍💻 AI Collaboration (Cline)

Cline and other AI agents are configured to:

- Read `/docs/PROJECT_OVERVIEW_LA_TORTUGA.md` for context  
- Align code suggestions with rollout docs (PRD, CIP, SDS)  
- Prioritize **offline functionality** and **touch-first UX**  
- Enforce data-privacy principles (anonymization + local encryption)  

---

### 📊 Dashboard Integration

- Syncs anonymized data to **BigQuery**  
- Looker Studio dashboard visualizes:
  - Patient volume per community  
  - Common conditions & treatments  
  - Medication distribution  
  - Dental procedure summary  

---

### 📅 Roadmap (2025)

- [ ] Complete medical + dental form JSON configs  
- [ ] Build offline SQLite data cache  
- [ ] Add Firebase Auth roles and sync logic  
- [ ] Deploy pilot tablets for 2026 mission  
- [ ] Launch Looker Studio dashboard for field analytics  

---

### 🤝 Contributing

- PR reviews are required for main branch merges.  
- Follow commit conventions: `feat:`, `fix:`, `docs:`, `refactor:`.  
- Document new features in `/docs`.  
- Ensure new UI components are tablet tested.  

---

### 📜 License

MIT License (unless updated by La Tortuga Foundation).

---

### 📘 Related Docs

- [`/docs/PROJECT_OVERVIEW_LA_TORTUGA.md`](./docs/PROJECT_OVERVIEW_LA_TORTUGA.md) – Full workflow & UX guide  
- [`/docs/AI_ONBOARDING.md`](./docs/AI_ONBOARDING.md) – AI collaboration rules  
- [`/docs/rollout/`](./docs/rollout/) – Governance & technical rollout set  

---
