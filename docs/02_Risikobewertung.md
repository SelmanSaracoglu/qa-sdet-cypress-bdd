# Risikobewertung (Risk Assessment)

## 1. Zielsetzung

Dieses Dokument analysiert potenzielle Risiken für die Anwendung "Cura Healthcare Service".
Unser Ziel ist es, kritische Fehler frühzeitig zu finden.
Wir priorisieren die Testfälle basierend auf dieser Bewertung.

## 2. Risikomatrix

Wir bewerten die Risiken nach **Auswirkung** (Impact) und **Wahrscheinlichkeit** (Probability).

| Risikostufe | Beschreibung | Priorität für Tests |
| **HOCH** | Kritische Funktion funktioniert nicht. Datenverlust möglich. | **Sofort / Blocker** |
| **MITTEL** | Hauptfunktion eingeschränkt, aber Workaround möglich. | **Hoch** |
| **NIEDRIG** | Kosmetische Fehler (UI), keine Funktionsstörung. | **Niedrig** |

## 3. Risiko-Analyse Tabelle

| ID | Risiko-Beschreibung | Auswirkung | Wahrscheinlichkeit | Risikostufe | Maßnahme (Test) |
| **R-001** | Benutzer kann sich nicht einloggen. | Hoch | Niedrig | **HOCH** | Smoke Test (Login) |
| **R-002** | Termin wird nicht in der Datenbank gespeichert. | Hoch | Mittel | **HOCH** | E2E Test (Appointment) |
| **R-003** | API antwortet mit Fehler 500 (Server Error). | Hoch | Niedrig | **HOCH** | API Tests (Status Code) |
| **R-004** | Startseite lädt langsam (> 3 Sekunden). | Mittel | Mittel | **MITTEL** | Performance Check |
| **R-005** | Icons oder Bilder werden nicht geladen. | Niedrig | Mittel | **NIEDRIG** | UI Element Check |
| **R-006** | Falsche Fehlermeldung bei ungültigem Login. | Mittel | Niedrig | **MITTEL** | Negativ-Tests |

## 4. Fazit

Wir fokussieren unsere Automatisierung zuerst auf die Risiken **R-001** bis **R-003**.
Diese Bereiche werden durch `@Smoke` und `@Regression` Tests abgedeckt.
