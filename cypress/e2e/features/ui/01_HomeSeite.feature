
Funktionalität: Home Seite (Startseite) Prüfungen

  Als Benutzer möchte ich sicherstellen, dass die Startseite korrekt lädt
  und alle wichtigen Elemente sichtbar sind.

  @Smoke
  Szenario: URL und Seitentitel Prüfung
    Angenommen der Benutzer öffnet die Home-Seite
    Dann sollte die URL "katalon-demo-cura" enthalten
    Und der Titel der Seite sollte "CURA Healthcare Service" sein

  @Sanity
  Szenario: Wichtige Elemente sind sichtbar
    Angenommen der Benutzer ist auf der Home-Seite
    Dann sollte die Hauptüberschrift "CURA Healthcare Service" sichtbar sein
    Und der Button "Make Appointment" sollte sichtbar sein

  @Regression
  Szenario: Footer und Social Media Icons Prüfung
    Angenommen der Benutzer scrollt zum Footer
    Dann sollten die Copyright-Texte sichtbar sein
    Und die Social-Media-Icons sollten vorhanden sein