

Feature: Login Funktionalität

  Als registrierter Benutzer möchte ich mich anmelden können,
  um Zugriff auf mein Profil und Termine zu haben.

  # Happy Path (Pozitif Senaryo)
  @Smoke @REQ-002
  Scenario: Erfolgreicher Login mit gültigen Daten
    Given der Benutzer ist auf der Login-Seite
    When er den Benutzernamen "John Doe" und das Passwort "ThisIsNotAPassword" eingibt
    And er auf den Login-Button klickt
    Then sollte er auf die Startseite weitergeleitet werden
    And die URL sollte "#appointment" enthalten

  # Negative Path (Negatif Senaryo - Veri Tablosu ile)
  @Regression @REQ-003
  Scenario Outline: Fehlgeschlagener Login mit ungültigen Daten
    Given der Benutzer ist auf der Login-Seite
    When er den Benutzernamen "<username>" und das Passwort "<password>" eingibt
    And er auf den Login-Button klickt
    Then sollte eine Fehlermeldung angezeigt werden, die "<error_msg>" enthält

    Examples:
      | username | password | error_msg    |
      | John Doe | Falsch12 | Login failed |
      | Hack     | NoPass   | Login failed |


  # Logout
  @Regression @REQ-004
  Scenario: Erfolgreicher Logout
    Given der Benutzer ist eingeloggt als "John Doe"
    When er das Seitenmenü öffnet
    And er auf den Logout-Button klickt
    Then sollte er wieder auf der Startseite sein

    