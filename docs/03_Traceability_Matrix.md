# Traceability Matrix (Rückverfolgbarkeit)

## 1. Einführung

Diese Matrix verbindet die Anforderungen (Requirements) mit den Testfällen.
Unser Ziel ist es, sicherzustellen, dass jede Anforderung getestet wird (100% Testabdeckung).

## 2. Legende

- **REQ:** Requirement (Anforderung)
- **AC:** Acceptance Criteria (Akzeptanzkriterium)
- **TC:** Test Case (Testfall)
- **Prio:** Priorität (1 = Hoch, 3 = Niedrig)

## 3. Matrix

| REQ-ID      | Beschreibung der Anforderung                                  | AC-Referenz | Test-Szenario (TC-ID)  | Prio |
| :---------- | :------------------------------------------------------------ | :---------- | :--------------------- | :--- |
| **REQ-001** | Die Startseite muss korrekt laden und alle Elemente anzeigen. | AC-001      | `E01_Homepage_Check`   | 1    |
| **REQ-002** | Benutzer können sich mit gültigen Daten einloggen.            | AC-002      | `E02_Login_Success`    | 1    |
| **REQ-003** | Login mit falschen Daten muss abgelehnt werden.               | AC-003      | `E02_Login_Failure`    | 2    |
| **REQ-004** | Benutzer können einen Arzttermin buchen.                      | AC-004      | `E03_Appointment_Flow` | 1    |
| **REQ-005** | API: Neuer Benutzer kann erstellt werden (POST).              | AC-API-01   | `API_01_CreateUser`    | 1    |
| **REQ-006** | API: Benutzerdaten können abgerufen werden (GET).             | AC-API-02   | `API_02_GetUser`       | 2    |
| **REQ-007** | Das System muss auf mobilen Geräten nutzbar sein.             | AC-005      | `E04_Responsive_Check` | 3    |

## 4. Status (Aktuell: Projektstart)
* **Projektphase:** Initialisierung & Setup
* **Offen (Backlog):** REQ-001 bis REQ-007
* **Abgeschlossen:** -
* **Aktuelle Testabdeckung:** 0%
