

# Test-Szenarien & Abdeckung

Dieses Dokument listet alle automatisierten BDD-Szenarien auf, die im Ordner `cypress/e2e/features` definiert sind.

## 1. Startseite (UI)
*Datei: 01_HomePage.feature*

| ID | Szenario | Status |
| :--- | :--- | :--- |
| **HP-01** | Seite lädt mit korrektem Titel und URL | ✅ Pass |
| **HP-02** | Header-Elemente (Logo, Menü) sind sichtbar | ✅ Pass |
| **HP-03** | Footer-Informationen (Adresse, Email) sind korrekt | ✅ Pass |
| **HP-04** | Social-Media Links sind vorhanden | ✅ Pass |

## 2. Login & Sicherheit
*Datei: 02_Login.feature*

| ID | Szenario | Status |
| :--- | :--- | :--- |
| **LG-01** | Erfolgreicher Login mit gültigen Daten | ✅ Pass |
| **LG-02** | Login fehlgeschlagen (Falsches Passwort) | ✅ Pass |
| **LG-03** | Login fehlgeschlagen (Falscher Benutzername) | ✅ Pass |
| **LG-04** | Erfolgreicher Logout | ✅ Pass |

## 3. Terminbuchung (End-to-End)
*Datei: 03_Appointment.feature*

| ID | Szenario | Status |
| :--- | :--- | :--- |
| **AP-01** | Termin erfolgreich buchen (Validierung Einrichtungsname) | ✅ Pass |
| **AP-02** | Checkbox "Hospital Readmission" funktioniert | ✅ Pass |
| **AP-03** | Datumsauswahl via Kalender (Datepicker) | ✅ Pass |
| **AP-04** | Buchungsbestätigung wird angezeigt | ✅ Pass |

## 4. Historie (Datenbank-Check)
*Datei: 04_History.feature*

| ID | Szenario | Status |
| :--- | :--- | :--- |
| **HS-01** | Gebuchter Termin erscheint in der Historie | ✅ Pass |
| **HS-02** | Kommentar und Datum stimmen überein | ✅ Pass |