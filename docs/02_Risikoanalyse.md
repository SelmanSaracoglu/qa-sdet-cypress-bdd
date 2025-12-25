# Risikoanalyse & Priorisierung

Da vollständiges Testen unmöglich ist, priorisieren wir unsere Testfälle basierend auf dem Risiko (RBT - Risk Based Testing).

## Risikomatrix

| ID | Risiko-Szenario | Auswirkung | Wahrsch. | Prio | Abdeckung durch Test |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | **Datenverlust:** Termin wird nicht gespeichert. | Hoch (Kritisch) | Mittel | **P1** | `03_Appointment.feature` (E2E) |
| **R-02** | **Sicherheitslücke:** Login ohne Passwort möglich. | Hoch (Kritisch) | Niedrig | **P1** | `02_Login.feature` (Negative) |
| **R-03** | **User Experience:** Kalender blockiert Eingabe. | Mittel | Hoch | **P2** | `03_Appointment.feature` (UI) |
| **R-04** | **Kosmetik:** Falsche Telefonnummer im Footer. | Niedrig | Hoch | **P3** | `01_HomePage.feature` (Bug Report) |

**Strategische Entscheidung:**
Wir automatisieren 100% der P1 und P2 Risiken. P3 Risiken werden dokumentiert, blockieren aber das Release nicht.