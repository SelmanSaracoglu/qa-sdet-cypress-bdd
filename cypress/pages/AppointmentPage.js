class AppointmentPage {
  // -------------------------------------------------------------
  // LOCATORS (Selektoren)
  // -------------------------------------------------------------

  get selectFacility() {
    return cy.get("#combo_facility");
  }

  get checkReadmission() {
    // ACHTUNG: Die ID auf der Webseite hat einen Tippfehler ("hospotal")
    return cy.get("#chk_hospotal_readmission");
  }

  get radioMedicaid() {
    return cy.get("#radio_program_medicaid");
  }

  get radioMedicare() {
    return cy.get("#radio_program_medicare");
  }

  get radioNone() {
    return cy.get("#radio_program_none");
  }

  get inputVisitDate() {
    return cy.get("#txt_visit_date");
  }

  get inputComment() {
    return cy.get("#txt_comment");
  }

  get btnBookAppointment() {
    return cy.get("#btn-book-appointment");
  }

  // Locators für die Bestätigungsseite (Confirmation)
  get confirmationHeader() {
    return cy.get("h2");
  }

  get confirmationFacility() {
    return cy.get("#facility");
  }

  // -------------------------------------------------------------
  // ACTIONS (Methoden)
  // -------------------------------------------------------------

  /**
   * Wählt eine Einrichtung aus dem Dropdown-Menü.
   * @param {string} facilityName - Der Name der Einrichtung (z.B. "Tokyo CURA Healthcare Center")
   */
  selectFacilityByName(facilityName) {
    this.selectFacility.select(facilityName);
  }

  /**
   * Setzt den Haken bei "Apply for hospital readmission".
   */
  checkHospitalReadmission() {
    this.checkReadmission.check();
  }

  /**
   * Wählt das Gesundheitsprogramm aus.
   * @param {string} program - "Medicaid", "Medicare" oder "None"
   */
  selectHealthcareProgram(program) {
    switch (program) {
      case "Medicaid":
        this.radioMedicaid.check();
        break;
      case "Medicare":
        this.radioMedicare.check();
        break;
      case "None":
        this.radioNone.check();
        break;
      default:
        throw new Error(`Programm ${program} ist nicht verfügbar!`);
    }
  }

  /**
   * Gibt das Besuchsdatum ein.
   * @param {string} date - Datum im Format dd/mm/yyyy (z.B. "21/09/2025")
   */
  enterVisitDate(date) {
    // Wir klicken zuerst, um den Kalender zu öffnen (optional), und tippen dann.
    // {enter} schließt den Kalender nach der Eingabe.
    this.inputVisitDate.type(`${date}{enter}`);

    cy.get("h2").click();
  }

  enterComment(comment) {
    this.inputComment.type(comment);
  }

  clickBookAppointment() {
    this.btnBookAppointment.click();
  }

  // -------------------------------------------------------------
  // ASSERTIONS (Überprüfungen)
  // -------------------------------------------------------------

  verifyBookingSuccess() {
    this.confirmationHeader.should("have.text", "Appointment Confirmation");
  }

  verifyFacility(expectedFacility) {
    this.confirmationFacility.should("have.text", expectedFacility);
  }
}

export default new AppointmentPage();