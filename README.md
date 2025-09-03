# La Tortuga EMR & Dashboard

## Overview
A tablet-first app to capture medical and dental intakes in rural Chiapas, Mexico.  
Built for offline use, with sync to Firebase/GCP and a live dashboard for community leaders.

## Goals
1. Medical intake form (EMR)  
2. Dental intake form (EMR)  
3. Dashboard for live community trends

## Features (MVP)
- Offline-first data capture (tablets)
- Role-based login (clinician, admin, viewer)
- Sync to Firebase Firestore + Storage
- De-identified data to BigQuery for dashboard
- Bilingual (English/Spanish) interface

## Tech Stack
- **Frontend:** React Native (Expo)  
- **Backend:** Firebase / GCP (Identity Platform, Firestore, Cloud Functions, Storage, BigQuery)  
- **Dashboard:** Looker Studio  
- **Project Management:** Asana, Slack, GitHub  

## Repo Structure
/docs → notes, meeting recaps, architecture
/configs → JSON for forms (medical, dental)
/i18n → translations (en.json, es.json)
/src
/components
/screens
/services

## Getting Started
1. Clone the repo:  
   ```bash
   git clone git@github.com:LaTortuga-EMR/emr-app.git
   cd emr-app

2. Install dependencies:
yarn install

3. Start the app:
expo start

4. Copy .env.example → .env and add your Firebase config keys.

Contributing

All changes go through pull requests to main.

Use feature branches (feature/xyz).

Keep forms and translations in /configs and /i18n (not hard-coded).

Add documentation for new components and services in /docs.

License

MIT License (or update if the foundation prefers a different license).
