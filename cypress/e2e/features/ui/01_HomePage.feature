Feature: Startseite Validierung (Homepage Check)

  Als Benutzer möchte ich sicherstellen, dass die Startseite korrekt geladen wird,
  damit ich die Anwendung nutzen kann.

  # Referenz: REQ-001 aus Traceability Matrix
  @Smoke @REQ-001
  Scenario: Die Startseite wird erfolgreich geladen
    Given der Benutzer öffnet die Startseite
    Then sollte der Seitentitel "CURA Healthcare Service" lauten
    And die URL sollte die korrekte Domain enthalten

  @Regression @REQ-001
  Scenario: Wichtige UI-Elemente sind sichtbar
    Given der Benutzer öffnet die Startseite
    Then sollten der Header und der "Make Appointment" Button sichtbar sein