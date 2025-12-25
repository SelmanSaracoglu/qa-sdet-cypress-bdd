# Teststrategie (Test Strategy)

## 1. Einleitung
Dieses Dokument definiert die Strategie für die Qualitätssicherung (QA) des "Cura Healthcare" Web-Portals.
Unser Fokus liegt auf der **Validierung der Geschäftslogik** und der **Datenintegrität** im Frontend.

## 2. Testumfang (Scope Management)

Um eine hohe Stabilität für das Release v1.0 zu gewährleisten, wurde der Umfang wie folgt definiert:

### ✅ In Scope (Priorität 1)
* **End-to-End User Journeys:** Kompletter Prozess von Login bis zur Buchungsbestätigung.
* **Funktionale Validierung:** Prüfung von Pflichtfeldern, Datumslogik und Dropdowns.
* **UI-Feedback:** Überprüfung von Erfolgs- und Fehlermeldungen.

## 3. Methodik & Werkzeuge
Wir setzen auf **Behavior Driven Development (BDD)**, um eine Brücke zwischen Fachbereich und Entwicklung zu schlagen.
* **Framework:** Cypress (für schnelle, zuverlässige E2E Tests).
* **Architektur:** Page Object Model (für Wartbarkeit und Wiederverwendbarkeit).
* **Reporting:** Automatische Generierung von Testnachweisen (Evidence).