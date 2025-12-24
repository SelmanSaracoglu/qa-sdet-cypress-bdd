class LoginPage {
  // -------------------------------------------------------------
  // LOCATORS (Selektoren)

  get inputUsername() {
    // ID Selector: Am sichersten und schnellsten
    return cy.get("#txt-username");
  }

  get inputPassword() {
    return cy.get("#txt-password");
  }

  get btnLogin() {
    return cy.get("#btn-login");
  }

  get errorMessage() {
    //(.) -> ClassName. Fehlermeldung: "Login failed! Please ensure..."
    return cy.get(".text-danger");
  }

  // -------------------------------------------------------------
  // ACTIONS (Methoden)

  visit() {
    cy.visit("/profile.php#login");
  }

  /**
   * Führt den Login-Prozess durch.
   * @param {string} username - Der Benutzername
   * @param {string} password - Das Passwort
   */
  typeCredentials(username, password) {
    // Cypress "type" Befehl wartet automatisch, bis das Feld bereit ist.
    this.inputUsername.clear().type(username); // Erst leeren, dann tippen
    this.inputPassword.clear().type(password);
  }

  clickLoginButton(){
    this.btnLogin.click();
  }

  /**
   * Führt den kompletten Login in einem Schritt durch.
   * (Nützlich für "Background"-Steps oder schnelle Logins)
   */
  login(username, password) {
    this.typeCredentials(username, password);
    this.clickLoginButton();
  }

  // -------------------------------------------------------------
  // ASSERTIONS (Überprüfungen)
  // -------------------------------------------------------------

  verifyErrorMessage(expectedMessage) {
    // Überprüft, ob die Fehlermeldung den erwarteten Text enthält
    this.errorMessage.should("be.visible").and("contain.text", expectedMessage);
  }
}

export default new LoginPage();