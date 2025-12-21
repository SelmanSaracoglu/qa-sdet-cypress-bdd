class AppointmentPage {
  // -------------------------------------------------------------
  // LOCATORS (Selektoren)
  // -------------------------------------------------------------

  get selectFacility() {
    // Dropdown-Menü für die Einrichtung
    return cy.get("#combo_facility");
  }

  get chkReadmission() {
    // Checkbox für "Apply for hospital readmission"
    return cy.get("#chk_hospotal_readmission");
  }

  get radioProgramGroup() {
    // Alle Radio-Buttons für das Gesundheitsprogramm
    // Selenium: By.name("programs")
    return cy.get('[name="programs"]');
  }

  get inputDate() {
    // Datumsfeld (Calendar)
    return cy.get("#txt_visit_date");
  }

  get txtComment() {
    // Kommentarfeld (TextArea)
    return cy.get("#txt_comment");
  }

  get btnBookAppointment() {
    return cy.get("#btn-book-appointment");
  }

  // Bestätigungsseite Selektoren (Confirmation Page)
  get confirmationHeader() {
    return cy.get("h2"); // "Appointment Confirmation"
  }

  get confirmationFacility() {
    return cy.get("#facility");
  }

  // -------------------------------------------------------------
  // ACTIONS (Methoden)
  // -------------------------------------------------------------

  /**
   * Füllt das Terminbuchungsformular aus.
   * @param {string} facility - Name der Einrichtung (z.B. "Tokyo CURA Healthcare Center")
   * @param {boolean} readmission - true für Checkbox aktiv, sonst false
   * @param {string} program - Wert des Radio-Buttons (z.B. "Medicaid")
   * @param {string} date - Datum im Format dd/mm/yyyy
   * @param {string} comment - Freitext
   */
  fillAppointmentForm(facility, readmission, program, date, comment) {
    // Dropdown auswählen
    // Selenium: new Select(el).selectByVisibleText(facility)
    this.selectFacility.select(facility);

    // Checkbox behandeln
    if (readmission) {
      // Cypress "check" ist besser als "click" für Formularelemente
      this.chkReadmission.check();
    } else {
      this.chkReadmission.uncheck();
    }

    // Radio Button auswählen (nach Value)
    // Selenium: loop through elements -> if value match -> click
    this.radioProgramGroup.check(program);

    // Datum eingeben (Klick öffnet Kalender, aber wir tippen direkt)
    // {enter} schließt den Kalender sicher
    this.inputDate.type(date + "{enter}");

    // Kommentar eingeben
    this.txtComment.type(comment, { force: true }); // force: true falls verdeckt
  }

  submitAppointment() {
    this.btnBookAppointment.click();
  }

  // -------------------------------------------------------------
  // ASSERTIONS (Überprüfungen)
  // -------------------------------------------------------------

  verifyConfirmationVisible() {
    this.confirmationHeader.should("have.text", "Appointment Confirmation");
  }

  verifyBookedData(expectedFacility, expectedReadmission) {
    this.confirmationFacility.should("have.text", expectedFacility);
    
    // Validierung der Readmission (Textvergleich auf der Bestätigungsseite)
    const readmissionText = expectedReadmission ? "Yes" : "No";
    cy.get("#hospital_readmission").should("have.text", readmissionText);
  }
}

export default new AppointmentPage();