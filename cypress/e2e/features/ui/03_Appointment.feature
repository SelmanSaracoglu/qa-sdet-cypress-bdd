Feature: Terminbuchung (Make Appointment)

  Als angemeldeter Patient möchte ich einen Arzttermin buchen,
  um eine medizinische Behandlung zu erhalten.

  Background:
    Given der Benutzer ist eingeloggt als "John Doe"

  @Smoke @REQ-010
  Scenario: Termin erfolgreich buchen (End-to-End)
    Given der Benutzer ist auf der "Make Appointment" Seite
    When er die Einrichtung "Tokyo CURA Healthcare Center" auswählt
    And er die Option "Apply for hospital readmission" aktiviert
    And er das Gesundheitsprogramm "Medicaid" wählt
    And er das Datum "21/09/2025" eingibt
    And er den Kommentar "Routine Checkup" schreibt
    And er auf den "Book Appointment" Button klickt
    Then sollte die Buchungsbestätigung "Appointment Confirmation" angezeigt werden
    And die gebuchte Einrichtung sollte "Tokyo CURA Healthcare Center" sein