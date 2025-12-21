

class HomePage {
  // -------------------------------------------------------------
  // LOCATORS (Selektoren) - Wir verwenden Scoped-Selektoren für bessere Stabilität.


  //(#) ID ist die schnellste und stabilste Methode in Cypress.
  get btnMakeAppointment() { 
    return cy.get("#btn-make-appointment");
  }

  get btnMenuToggle() { 
    return cy.get("#menu-toggle"); 
  }

  // Scoped Selector: Suche h1 nur innerhalb des Headers (#top)
  get headerH1() { 
    return cy.get("header#top h1"); 
  }

  get subHeading() {
    return cy.get("header#top h3");
  }

  // --- FOOTER LOCATORS ---

  get footerSection() {
    return cy.get("footer");
  }

  get footerAddress() {
    // Die Adresse befindet sich im ersten <p>-Tag im Footer 
    return cy.get("footer p").first();
  }

  get footerPhone() {
    // Die Telefonnummer ist im ersten Listenelement der ungeordneten Liste
    return cy.get("footer ul.list-unstyled li").eq(0);
  }

  get footerEmail() {
    // Die E-Mail ist im zweiten Listenelement
    return cy.get("footer ul.list-unstyled li").eq(1);
  }

  get linkFacebook() {
    return cy.get(".fa-facebook").parent();
  }

  get linkTwitter() {
    return cy.get(".fa-twitter").parent();
  }

  get linkDribbble() {
    return cy.get(".fa-dribbble").parent();
  }

  // ACTIONS (Methoden)
  // -------------------------------------------------------------

  visit() {
    // Öffnet die Basis-URL (definiert in cypress.config.js)
    cy.visit("/");
  }

  clickMakeAppointment() {
    this.btnMakeAppointment.click();
  }

  // ASSERTIONS (Überprüfungen)
  // -------------------------------------------------------------

  verifyPageTitle() {
    // Überprüfung des Seitentitels
    cy.title().should("eq", "CURA Healthcare Service");
  }

  verifyUrl() {
    // Überprüfung, ob die URL korrekt ist
    cy.url().should("include", "katalon-demo-cura.herokuapp.com");
  }

  verifyElementsVisible() {
    this.headerH1.should("be.visible").and("have.text", "CURA Healthcare Service"); 
    this.btnMakeAppointment.should("be.visible");
    this.btnMenuToggle.should("be.visible");
  }

  /**
   * Überprüft nur die Adresse im Footer.
   * @param {string} address - Die erwartete Adresse
   */
  verifyFooterAddress(address) {
    this.footerAddress.should("contain.text", address);
  }

  /**
   * Überprüft nur die Telefonnummer.
   * @param {string} phone - Die erwartete Telefonnummer
   */
  verifyFooterPhone(phone) {
    this.footerPhone.should("contain.text", phone);
  }

  /**
   * Überprüft nur die E-Mail-Adresse.
   * @param {string} email - Die erwartete E-Mail
   */
  verifyFooterEmail(email) {
    this.footerEmail.should("contain.text", email);
    this.footerEmail.find("a").should("have.attr", "href", `mailto:${email}`);
  }

  verifySocialLink(platform, expectedUrl) {
    let element;

    switch (platform) {
      case "Facebook":
        element=this.linkFacebook;
        break;
      case "Twitter":
        element = this.linkTwitter;
        break;
      case "Dribbble":
        element = this.linkDribbble;
        break;
      default:
        throw new Error(`Plattform ${platform} ist nicht definiert!`);  
    }

    // Überprüft das href-Attribut des Links
    element.should("have.attr", "href", expectedUrl);
  }

}
export default new HomePage();