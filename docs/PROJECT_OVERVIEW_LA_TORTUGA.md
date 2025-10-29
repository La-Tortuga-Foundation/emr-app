
- **Offline Mode:** Stores data in local SQLite or MMKV.  
- **Sync Trigger:** Runs automatically on network reconnect or manual “Sync Now.”  
- **Encryption:** Local storage encrypted using device keystore.

---

## 5. Dashboard Insights (BigQuery + Looker Studio)

| Metric | Description |
|---------|-------------|
| Total patients seen | Per day, week, or mission |
| Common conditions | Based on system checkboxes |
| Pain-level averages | Aggregated per community |
| Medication usage | Count of distributed medications |
| Dental procedures | Fillings, cleanings, extractions |
| Referral patterns | Track when patients are referred |

---

## 6. Roles and Permissions

| Role | Capabilities |
|------|---------------|
| **Clinician** | Complete intakes, view patient history, sync records |
| **Volunteer** | Assist with vitals, demographics, and translation |
| **Admin** | Manage users, view dashboard, export data |
| **Viewer** | Read-only access to dashboard and summaries |

---

## 7. Form Field Logic (Meeting-derived)

| Field Type | Input Mode | Notes |
|-------------|-------------|-------|
| Numeric (Vitals) | Number pad | e.g. Temp, Weight, BP |
| Yes/No | Large toggle buttons | Faster than dropdown |
| Multiple choice | Checkboxes | All visible (no scroll) |
| Text (optional) | On-screen keyboard or stylus | For notes only |
| Dropdown | Short, prefilled lists | For medications, diagnosis |
| Slider | 0–10 Pain scale | Glove-friendly touch bar |

---

## 8. UI / UX Guidelines

- Each form section = full screen  
- “Next Section” button at bottom (no vertical scroll)  
- Top tab bar to jump between sections  
- Font size: 18–22 px  
- Minimum touch area: 48 px  
- Auto-save progress every section  
- Visual confirmation after each save (green toast or checkmark)

---

## 9. Technical Stack Summary

| Layer | Technology |
|-------|-------------|
| **App** | React Native (Expo) |
| **Database** | Firebase Firestore (primary), SQLite (offline cache) |
| **Storage** | Firebase Storage for media |
| **Auth** | Firebase Authentication (email/password + cached tokens) |
| **Backend Logic** | Cloud Functions |
| **Analytics** | BigQuery → Looker Studio |
| **Infrastructure** | GCP |
| **AI Support** | Cline AI + ChatGPT context via this file |

---

## 10. AI Integration Notes (Cline & GPT)

Cline (or any connected AI workspace) uses this file as **grounding context**.  
All generated code or UI should:
- Respect offline-first requirements  
- Use correct data field names from rollout docs (CIP, PRD, SDS)  
- Avoid cloud-only dependencies  
- Follow the section order and UX conventions defined here  
- Provide bilingual label keys in `/i18n/en.json` and `/i18n/es.json`  

---

## 11. Deployment Plan

| Phase | Description | Output |
|--------|--------------|---------|
| **Phase 1 – Prototype** | Implement medical & dental form JSON configs, local save | Functional offline intake app |
| **Phase 2 – Sync Layer** | Add Firebase sync & auth | Synced patient records |
| **Phase 3 – Dashboard** | Connect BigQuery + Looker Studio | Field analytics dashboard |
| **Phase 4 – Pilot Deployment** | Test with 2–3 tablets in Chiapas | Feedback & refinements |
| **Phase 5 – Production Rollout** | Deploy full mission toolkit | Training + governance updates |

---

## 12. Related Documentation

- [`/docs/rollout/`](./rollout/) – Governance, PRD, CIP, SDS, and VVP docs  
- [`/docs/AI_ONBOARDING.md`](./AI_ONBOARDING.md) – AI usage, privacy, and naming conventions  
- Root [`README.md`](../README.md) – Setup, structure, and repo instructions  

---

### 📍 Maintainer Notes

Primary contact: **Jose Rodriguez (@jmr988)**  
Affiliation: La Tortuga Foundation  
Latest update: October 2025  
Next planned milestone: January 2026 (pilot-ready build)
