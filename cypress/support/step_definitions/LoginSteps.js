import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

// ----------------------------------------------------------------
// Step Definitions: Login
// Verbindung zwischen Gherkin (Feature) und Page Object (Code)
// ----------------------------------------------------------------

// Vorbedingungen (Preconditions)
Given("der Benutzer ist auf der Login-Seite", () => {
  LoginPage.visit();
});

// Aktionen (Actions)
When("er den Benutzernamen {string} und das Passwort {string} eingibt", (user, pass) => {
  LoginPage.login(user, pass);
});

When("er auf den Login-Button klickt", () => {
  // Hinweis: Der Klick wird bereits in der 'login'-Methode im Page Object ausgeführt.
  // Wir loggen dies hier nur zur Nachverfolgung.
  cy.log("Login-Button wurde als Teil der Login-Methode geklickt.");
});

// Überprüfungen (Assertions)
Then("sollte er auf die Startseite weitergeleitet werden", () => {
  // Erfolgreicher Login führt zur Appointment-Seite (Anker #appointment)
  cy.url().should("contain", "#appointment");
});

Then("die URL sollte {string} enthalten", (urlPart) => {
  cy.url().should("contain", urlPart);
});

Then("sollte eine Fehlermeldung angezeigt werden, die {string} enthält", (msg) => {
  LoginPage.verifyErrorMessage(msg);
});



// ------------------------------------------
// ------------------------------------------
Given("er loggt sich mit {string} und {string} ein", (user, pass) => {
  LoginPage.login(user, pass);
});