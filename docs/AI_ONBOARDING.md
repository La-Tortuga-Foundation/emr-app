# 🧠 AI Onboarding — La Tortuga EMR App

## Project Overview
This project is an **offline-first medical & dental intake and records app** for La Tortuga Foundation, a nonprofit that delivers mobile healthcare to rural Chiapas, Mexico.

It uses **React Native** + **Firebase Realtime Database** + **Firestore/BigQuery export**, with **bilingual UI (English/Spanish)** and **role-based access control (Admin / Volunteer / Clinician)**.

---

## Repository Structure
/docs/rollout/ → Governance, DTP, PRD, CIP, SDS, VVP documents
/docs/AI_ONBOARDING.md → (this file)
/src/ → React Native app source
/firebase/ → Realtime Database & Firestore configuration
/scripts/ → setup and deployment scripts


---

## Key Goals
1. Support offline patient intake (medical & dental)
2. Sync securely to Firebase when online
3. Generate structured intake analytics via BigQuery
4. Enable bilingual UI (toggle or auto-detect locale)
5. Support eventual integration with the La Tortuga Dashboard

---

## AI Assistant Guidelines
- Before suggesting code, verify alignment with rollout docs (CIP, PRD, SDS).
- Use consistent terminology (Patient, IntakeForm, ClinicVisit).
- Prioritize offline functionality; avoid server-dependent solutions.
- Keep HIPAA-inspired data handling principles (local encryption, anonymization).

---

## Next Steps
- [ ] Import design mockups
- [ ] Connect Cline or local AI workspace
- [ ] Add Firebase configuration template
- [ ] Implement onboarding checklist in README
