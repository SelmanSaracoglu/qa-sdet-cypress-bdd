
class HistoryPage {
  // -------------------------------------------------------------
  // LOCATORS (Selektoren)
  // -------------------------------------------------------------

  get historyTitle() {
    return cy.get("h2");
  }

  // Das Panel, das den Termin enthält
  get appointmentPanel() {
    return cy.get(".panel-info");
  }

  get facilityValue() {
    return cy.get("#facility");
  }

  get dateValue() {
    return cy.get(".panel-heading");
  }

  get commentValue() {
    return cy.get("#comment");
  }

  get noAppointmentMessage() {
    return cy.get("p").contains("No appointment");
  }

  // -------------------------------------------------------------
  // ACTIONS (Methoden)
  // -------------------------------------------------------------

  visit() {
    cy.visit("/history.php#history");
  }

  // -------------------------------------------------------------
  // ASSERTIONS (Überprüfungen)
  // -------------------------------------------------------------

  verifyPageLoaded() {
    this.historyTitle.should("contain.text", "History");
  }

  /**
   * Prüft, ob der Termin mit den korrekten Daten angezeigt wird.
   */
  verifyAppointmentDetails(facility, date, comment) {
    this.appointmentPanel.should("be.visible");
    this.facilityValue.should("contain.text", facility);
    this.dateValue.should("contain.text", date);
    this.commentValue.should("contain.text", comment);
  }

  verifyEmptyHistory() {
    this.noAppointmentMessage.should("be.visible");
  }
}

export default new HistoryPage();