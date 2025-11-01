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

## Data Model Overview
The EMR uses a **Firebase Realtime Database** structure focused on clinics, patients, and intakes:

Users/
{userId}/
name:
email:
role: "admin" | "clinician" | "volunteer"
assignedClinics:

Clinics/
{clinicId}/
name:
community:
date:
latitude:
longitude:

Patients/
{patientId}/
name:
dob:
gender:
community:
lastVisit:
medicalIntakeId:
dentalIntakeId:

Intakes/
{intakeId}/
patientId:
type: "medical" | "dental"
clinicianId:
date:
vitals:
bp: "120/80"
pulse: 78
respiratoryRate: 16
temperature: 37.1
weight: 65
height: 170
spo2: 98
painScore: 3
findings:
diagnosis:
treatment:
followUp:
notes:

Reports/
{reportId}/
community:
dateRange:
metrics:
totalPatients:
commonIllnesses:
avgAge:


---

## Vitals Reference (FHIR-aligned)
| Field | Unit | Example | FHIR Mapping |
|--------|------|----------|---------------|
| `bp` | mmHg | 120/80 | 85354-9 |
| `pulse` | bpm | 78 | 8867-4 |
| `respiratoryRate` | breaths/min | 16 | 9279-1 |
| `temperature` | °C | 37.1 | 8310-5 |
| `weight` | kg | 65 | 29463-7 |
| `height` | cm | 170 | 8302-2 |
| `spo2` | % | 98 | 59408-5 |
| `painScore` | 0–10 | 3 | 72514-3 |

This ensures interoperability with public-health data and consistency across medical and dental intakes.

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
