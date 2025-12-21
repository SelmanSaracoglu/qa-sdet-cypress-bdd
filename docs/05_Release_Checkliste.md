# Release-Checkliste (Quality Gate)

## 1. Einführung
Diese Checkliste muss vor jedem Release ("Go-Live") vollständig ausgefüllt werden.
Ein Release wird nur freigegeben, wenn alle kritischen Punkte erfüllt sind.

## 2. Automatisierte Tests (CI/CD)

- [ ] Alle **Smoke-Tests** (@Smoke) sind in der Pipeline erfolgreich durchgelaufen.
- [ ] Alle **Regression-Tests** (@Regression) sind erfolgreich (Pass Rate > 95%).
- [ ] Es gibt keine "Flaky Tests" (instabile Tests), die das Ergebnis verfälschen.
- [ ] Performance-Tests (Ladezeiten) liegen im akzeptablen Bereich.

## 3. Defect Management (Bugs)

- [ ] Es gibt keine offenen Fehler der Priorität **Blocker** oder **Critical**.
- [ ] Alle bekannten Bugs (Low Priority) sind dokumentiert und im Backlog.
- [ ] Fix-Versionen für behobene Bugs sind korrekt verlinkt.

## 4. Code & Dokumentation

- [ ] Code-Review wurde durchgeführt und genehmigt (mindestens 1 Reviewer).
- [ ] Keine unnötigen Kommentare (`console.log`, auskommentierter Code) im Master-Branch.
- [ ] `README.md` und `/docs` Ordner sind aktuell.
- [ ] Neue Features sind in der `Traceability-Matrix.md` eingetragen.

## 5. Umgebung & Sicherheit

- [ ] Testdaten wurden bereinigt oder zurückgesetzt.
- [ ] Keine sensiblen Daten (Passwörter, Tokens) sind im Code hardcodiert.
- [ ] API-Endpunkte sind erreichbar und stabil.

---

**Entscheidung:**
[ ] GO (Freigabe erteilt)
[ ] NO-GO (Freigabe verweigert)

**Datum:** __________________
**Unterschrift QA Lead:** __________________