Feature: Startseite Validierung (Homepage Check)

  Als Benutzer möchte ich sicherstellen, dass alle Bereiche der Startseite korrekt funktionieren.

  Background:
    Given der Benutzer öffnet die Startseite

  # -------------------------------------------------------------
  # SMOKE TEST
  # -------------------------------------------------------------
  @Smoke @REQ-001
  Scenario: Die Seite lädt mit korrektem Titel und URL
    Then sollte der Seitentitel "CURA Healthcare Service" lauten
    And die URL sollte die korrekte Domain enthalten

  # -------------------------------------------------------------
  # UI TEST: HEADER & HERO AREA
  # -------------------------------------------------------------
  @Regression @REQ-002
  Scenario: Der Header-Text ist korrekt sichtbar
    Then sollte die Hauptüberschrift "CURA Healthcare Service" sichtbar sein

  @Regression @REQ-003
  Scenario: Die Navigationselemente sind sichtbar
    Then sollte der "Make Appointment" Button sichtbar sein
    And sollte der Menü-Toggle Button sichtbar sein

  # -------------------------------------------------------------
  # UI TEST: FOOTER & KONTAKT
  # -------------------------------------------------------------
  @Regression @REQ-008
  Scenario: Kontaktinformationen im Footer sind korrekt
    Then sollte die Adresse "Atlanta 550 Pharr Road NE Suite 525" lauten
    And die Telefonnummer sollte "(678) 817-5123" lauten
    And die Email-Adresse sollte "info@katalon.com" lauten

  # -------------------------------------------------------------
  # UI TEST: SOCIAL MEDIA
  # -------------------------------------------------------------
  @Regression @REQ-009
  Scenario Outline: Social Media Links verweisen auf die korrekten Profile
    Then sollte der "<Platform>" Link auf "<URL>" verweisen

    Examples:
      | Platform | URL                               |
      | Facebook | https://www.facebook.com/katalon/ |
      | Twitter  | https://twitter.com/katalon_inc   |
      | Dribbble | https://dribbble.com/katalon      |