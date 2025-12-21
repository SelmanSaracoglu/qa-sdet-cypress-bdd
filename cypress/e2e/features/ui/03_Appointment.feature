

Feature: Terminvereinbarung (Appointment Booking)

  Als authentifizierter Benutzer möchte ich einen Arzttermin buchen,
  um medizinische Versorgung zu erhalten.

  Background:
    Given der Benutzer ist auf der Login-Seite
    And er loggt sich mit "John Doe" und "ThisIsNotAPassword" ein

  # Referenz: REQ-004
  @Smoke @REQ-004
  Scenario: Erfolgreiche Terminbuchung
    When er das Terminformular mit folgenden Daten ausfüllt:
      | Facility                      | Readmission | Program  | Date       | Comment           |
      | Tokyo CURA Healthcare Center  | true        | Medicaid | 21/12/2025 | Routine Check-up  |
    And er die Buchung bestätigt
    Then sollte die Bestätigungsseite "Appointment Confirmation" angezeigt werden
    And die gebuchte Einrichtung sollte "Tokyo CURA Healthcare Center" sein