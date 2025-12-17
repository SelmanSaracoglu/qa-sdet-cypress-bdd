# Release Checkliste (Go-Live)

Bevor wir die Software freigeben (Release), müssen alle Punkte "OK" sein.

## 1. Testausführung
- [ ] Alle Smoke-Tests sind erfolgreich (Grün).
- [ ] Keine offenen Bugs mit Priorität "Kritisch" oder "Hoch".
- [ ] API-Tests laufen fehlerfrei.

## 2. Dokumentation & Prozess
- [ ] Die Traceability Matrix ist aktualisiert.
- [ ] Neue Features haben entsprechende Testfälle.
- [ ] Der Product Owner hat die User Stories akzeptiert.

## 3. CI/CD Pipeline
- [ ] GitHub Actions Pipeline ist "Success".
- [ ] Screenshots/Videos für fehlgeschlagene Tests geprüft.

---
**Entscheidung:**
[ ] GO (Freigabe erteilt)
[ ] NO-GO (Probleme beheben)

**QA Engineer:** Selman  
**Datum:** 17.12.2025