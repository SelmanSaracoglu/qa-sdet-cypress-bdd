# Teststrategie

## 1. Einführung

Dieses Dokument beschreibt die Teststrategie für das Projekt **"qa-sdet-cypress-bdd"**.
Unser Ziel ist es, die Qualität der Software durch automatisierte Tests sicherzustellen.
Wir testen sowohl die Benutzeroberfläche (UI) als auch die API-Schnittstellen.

## 2. Testumfang

### 2.1 UI-Tests (Cura Healthcare Service)

Wir testen die Webanwendung: `https://katalon-demo-cura.herokuapp.com/`

Der Fokus liegt auf diesen Bereichen:

- **Startseite (Home Page):**
  - Überprüfung der Ladezeit und Erreichbarkeit.
  - Kontrolle des Seitentitels (Page Title).
  - Prüfung aller Elemente (Header, Footer, Icons).
  - Validierung der Links und Weiterleitungen.
- **Login-Prozess:** Gültige und ungültige Anmeldeversuche.
- **Terminbuchung (Appointment):** Der gesamte Prozess einer Terminvereinbarung.

### 2.2 API-Tests (Reqres)

Wir testen die REST-API: `https://reqres.in/`

Der Fokus liegt auf diesen Funktionen:

- **Authentifizierung:** Login und Register via API.
- **Benutzerverwaltung (User CRUD):**
  - Benutzer erstellen (POST)
  - Benutzerdaten abrufen (GET)
  - Benutzer aktualisieren (PUT)
  - Benutzer löschen (DELETE)

## 3. Testarten

Wir verwenden verschiedene Testarten für maximale Stabilität:

1.  **Smoke Tests (@Smoke):**
    - Diese Tests laufen bei jedem "Push" in GitHub.
    - Sie prüfen die wichtigsten Grundfunktionen (z. B. Ist die Seite erreichbar? Funktioniert der Login?).
2.  **Regression Tests (@Regression):**
    - Diese Tests prüfen das gesamte System detailliert.
    - Sie stellen sicher, dass neue Änderungen keine alten Funktionen beschädigen.
3.  **E2E (End-to-End) Tests:**
    - Wir simulieren das Verhalten eines echten Benutzers von A bis Z.

## 4. Werkzeuge & Technologie

- **Test-Framework:** Cypress (JavaScript)
- **Methodik:** BDD (Behavior Driven Development) mit Cucumber
- **Architektur:** Page Object Model (POM) für Wartbarkeit
- **CI/CD:** GitHub Actions (Automatische Ausführung)
- **Reporting:** Screenshots und Videos bei Fehlern

## 5. Umgebung

- **Browser:** Google Chrome / Electron
- **Betriebssystem:** Windows / Linux (via CI)
