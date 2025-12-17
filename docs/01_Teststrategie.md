# Teststrategie für CURA Healthcare

## 1. Einleitung (Giriş)

Dieses Dokument beschreibt die Teststrategie für das Projekt "CURA Healthcare".
Unser Ziel ist eine hohe Softwarequalität.
Wir wollen kritische Fehler vor dem Release finden.

## 2. Testumfang (Scope)

Wir testen die wichtigsten Funktionen der Anwendung:

- **UI-Tests:** Login, Terminbuchung, Logout.
- **API-Tests:** Benutzerverwaltung (Erstellen, Löschen).
- **Nicht im Scope:** Performance-Tests, Sicherheitstests.

## 3. Testpyramide & Stufen

Wir folgen dem Prinzip der Testpyramide:

1. **Unit Tests:** (Entwickler-Verantwortung)
2. **API Tests:** Fokus auf Geschäftslogik und Daten.
3. **E2E Tests:** Fokus auf Nutzererfahrung (UI).

## 4. Werkzeuge (Araçlar)

- **Framework:** Cypress
- **Methodik:** BDD mit Cucumber (Gherkin)
- **CI/CD:** GitHub Actions
- **Berichte:** Cucumber HTML Report

## 5. Umgebung (Ortam)

- **Testumgebung:** https://katalon-demo-cura.herokuapp.com/
- **Browser:** Chrome (Latest), Electron (Headless)
