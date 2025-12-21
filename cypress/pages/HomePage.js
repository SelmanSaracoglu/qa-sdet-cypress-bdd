

class HomePage {
  // -------------------------------------------------------------
  // LOCATORS (Selektoren) - Wir verwenden Scoped-Selektoren für bessere Stabilität.

  get btnMakeAppointment() { return cy.get("#btn-make-appointment");
    //(#) ID ist die schnellste und stabilste Methode in Cypress.
  }

  get btnMenuToggle() { return cy.get("#menu-toggle"); 
  }

  get headerH1() { return cy.get("header#top h1"); 
    // Best Practice: Scoped Selector
    // Wir suchen das h1-Element nur innerhalb des Headers (#top).
    // Das verhindert Konflikte mit anderen h1-Elementen auf der Seite.  
  }

  get subHeading() {
    // Child Combinator: Direkte Kind-Elemente
    return cy.get("header#top h3");
  }

  get socialIcons() {
    // Liste der Social-Media-Icons im Footer
    return cy.get("footer .list-inline");
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
    // Überprüfung der Sichtbarkeit wichtiger Elemente
    // Chaining (Verkettung) für lesbaren Code
    this.headerH1
        .should("be.visible")
        .and("have.text", "CURA Healthcare Service"); 
        
    this.btnMakeAppointment.should("be.visible");
    this.btnMenuToggle.should("be.visible");
  }
}

export default new HomePage();