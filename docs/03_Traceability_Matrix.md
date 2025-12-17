# Traceability Matrix (İzlenebilirlik)

Diese Tabelle zeigt die Verbindung zwischen Anforderungen (Requirements) und Testfällen.

| Req-ID | Beschreibung | Test-Szenario (BDD) | Test-Typ | Status |
|:---:|:---|:---|:---:|:---:|
| **REQ-001** | Benutzer muss sich einloggen können | `Login.feature`: Erfolgreicher Login | UI / Smoke | ✅ Pass |
| **REQ-002** | Login mit falschen Daten blockieren | `Login.feature`: Login fehlgeschlagen | UI / Negative | ✅ Pass |
| **REQ-003** | Termin muss buchbar sein | `Appointment.feature`: Termin buchen | UI / E2E | ✅ Pass |
| **REQ-004** | API User erstellen | `User_API.feature`: Create User (POST) | API | ✅ Pass |
| **REQ-005** | API User löschen | `User_API.feature`: Delete User (DELETE) | API | ⏳ Pending |