# Requirements Traceability Matrix (RTM)

Diese Matrix stellt sicher, dass jede geschäftskritische Anforderung durch mindestens einen Testfall abgedeckt ist (Bidirektionale Rückverfolgbarkeit).

| REQ-ID | Anforderung (Requirement) | Test-Szenario (Feature File) | Status |
| :--- | :--- | :--- | :--- |
| **REQ-001** | Startseite muss für Patienten erreichbar sein. | `01_HomePage.feature` -> Scenario: Homepage Load | ✅ Pass |
| **REQ-002** | Datenschutz: Login nur mit validen Daten. | `02_Login.feature` -> Scenario: Valid/Invalid Login | ✅ Pass |
| **REQ-003** | Terminbuchung muss Einrichtung & Datum speichern. | `03_Appointment.feature` -> Scenario: Booking Flow | ✅ Pass |
| **REQ-004** | System muss Bestätigung anzeigen (Feedback). | `03_Appointment.feature` -> Scenario: Confirmation | ✅ Pass |
| **REQ-005** | Patienten-Historie muss Buchungen auflisten. | `04_History.feature` -> Scenario: Verify History | ✅ Pass |

**Abdeckungsgrad (Coverage):** 100% der definierten UI-Anforderungen.