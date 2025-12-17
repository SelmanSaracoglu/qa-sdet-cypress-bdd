
# Risikobewertung 

Wir analysieren Risiken, um unsere Tests zu priorisieren.
Wir nutzen die Formel: **Risiko = Auswirkung x Wahrscheinlichkeit**.

## Risiko-Matrix

| ID  | Risiko-Beschreibung | Auswirkung | Wahrscheinlichkeit | Priorität | Test-Fokus |
|:---:|:---|:---:|:---:|:---:|:---|
| **R01** | Login ist nicht möglich | Hoch | Mittel | **Kritisch** | Smoke Test (Muss funktionieren) |
| **R02** | Termin wird nicht gespeichert | Hoch | Gering | **Hoch** | Regression Test |
| **R03** | API antwortet langsam (>2s) | Mittel | Mittel | **Mittel** | API Test |
| **R04** | Tippfehler im Footer | Gering | Hoch | **Niedrig** | Explorativer Test |

## Strategie
* **Kritisch / Hoch:** Diese Funktionen werden bei jedem Pull-Request getestet (Automatisierung).
* **Mittel:** Diese Funktionen testen wir im normalen Regressionszyklus.
* **Niedrig:** Wird manuell oder bei Zeitüberschuss getestet.