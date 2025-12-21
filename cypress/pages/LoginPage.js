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
  login(username, password) {
    // Cypress "type" Befehl wartet automatisch, bis das Feld bereit ist.
    this.inputUsername.clear().type(username); // Erst leeren, dann tippen
    this.inputPassword.clear().type(password);
    this.btnLogin.click();
  }

  // -------------------------------------------------------------
  // ASSERTIONS (Überprüfungen)
  // -------------------------------------------------------------

  verifyErrorMessage(expectedMessage) {
    // Überprüft, ob die Fehlermeldung den erwarteten Text enthält
    this.errorMessage.should("be.visible").and("contain", expectedMessage);
  }
}

export default new LoginPage();