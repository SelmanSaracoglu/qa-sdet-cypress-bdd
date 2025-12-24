Feature: Behandlungshistorie (History)

  Als Patient möchte ich meine vergangenen Termine einsehen,
  um meinen Behandlungsverlauf zu überprüfen.

  Background:
    Given der Benutzer ist eingeloggt als "John Doe"

  @Regression @REQ-011
  Scenario: Gebuchter Termin erscheint in der Historie
    # Vorbedingung: Wir buchen erst einen Termin (Wiederverwendung existierender Schritte!)
    Given der Benutzer ist auf der "Make Appointment" Seite
    When er die Einrichtung "Seoul CURA Healthcare Center" auswählt
    And er das Datum "15/10/2025" eingibt
    And er den Kommentar "History Test Check" schreibt
    And er auf den "Book Appointment" Button klickt
    
    # Jetzt beginnt der eigentliche History-Test
    When er zur History-Seite navigiert
    Then sollte der Termin vom "15/10/2025" im "Seoul CURA Healthcare Center" angezeigt werden
    And der Kommentar sollte "History Test Check" sein