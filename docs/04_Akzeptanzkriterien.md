# Akzeptanzkriterien (Acceptance Criteria)

## 1. Übersicht

Dieses Dokument definiert die Akzeptanzkriterien im BDD-Format (Behavior Driven Development).
Diese Szenarien dienen als Basis für die `.feature` Dateien in Cypress.

## 2. UI - Cura Healthcare Service

### Feature: Login Funktionalität (AC-002, AC-003)

**Scenario: Erfolgreicher Login**

- **Given** der Benutzer ist auf der Login-Seite
- **When** er den Benutzernamen "John Doe" und das Passwort "ThisIsNotAPassword" eingibt
- **And** er auf den Login-Button klickt
- **Then** sollte er auf die Startseite weitergeleitet werden
- **And** die Überschrift "Make Appointment" sollte sichtbar sein

**Scenario: Fehlgeschlagener Login**

- **Given** der Benutzer ist auf der Login-Seite
- **When** er einen falschen Benutzernamen oder ein falsches Passwort eingibt
- **And** er auf den Login-Button klickt
- **Then** sollte eine Fehlermeldung "Login failed" angezeigt werden
- **And** er sollte auf der Login-Seite bleiben

### Feature: Terminbuchung (AC-004)

**Scenario: Termin erfolgreich buchen**

- **Given** der Benutzer ist eingeloggt
- **And** er befindet sich auf dem Appointment-Formular
- **When** er das Formular mit gültigen Daten ausfüllt (Datum, Kommentar)
- **And** er die Buchung bestätigt
- **Then** sollte die Bestätigungsseite "Appointment Confirmation" angezeigt werden
- **And** die Buchungsdetails sollten korrekt sein

## 3. API - Reqres (Backend)

### Feature: Benutzerverwaltung (AC-API-01, AC-API-02)

**Scenario: Neuen Benutzer erstellen (POST)**

- **Given** die API-Schnittstelle "/api/users" ist verfügbar
- **When** ich einen POST-Request mit validen Benutzerdaten (Name, Job) sende
- **Then** sollte der Statuscode 201 (Created) zurückgegeben werden
- **And** die Antwort sollte die erstellte ID enthalten

**Scenario: Benutzerdaten abrufen (GET)**

- **Given** ein Benutzer mit der ID 2 existiert
- **When** ich einen GET-Request an "/api/users/2" sende
- **Then** sollte der Statuscode 200 (OK) zurückgegeben werden
- **And** die Antwort sollte die Benutzerdaten (Email, Name) enthalten
