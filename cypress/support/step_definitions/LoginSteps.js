import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";

// ----------------------------------------------------------------
// VORBEDINGUNGEN & LOGIN
// ----------------------------------------------------------------

Given("der Benutzer ist auf der Login-Seite", () => {
  LoginPage.visit();
});

// Schritt für das Tippen (nutzt die neue Methode typeCredentials)
When("er den Benutzernamen {string} und das Passwort {string} eingibt", (username, password) => {
  LoginPage.typeCredentials(username, password);
});

// Schritt für das Klicken (nutzt die neue Methode clickLoginButton)
When("er auf den Login-Button klickt", () => {
  LoginPage.clickLoginButton();
});

Then("sollte eine Fehlermeldung angezeigt werden, die {string} enthält", (message) => {
  LoginPage.verifyErrorMessage(message);
});

Then("sollte er auf die Startseite weitergeleitet werden", () => {
  cy.url().should("include", "#appointment");
});

Then("die URL sollte {string} enthalten", (urlPart) => {
  cy.url().should("include", urlPart);
});

// ----------------------------------------------------------------
// LOGOUT STEPS
// ----------------------------------------------------------------

// Dieser Schritt loggt den User im Hintergrund schnell ein
Given("der Benutzer ist eingeloggt als {string}", (username) => {
  LoginPage.visit();
  LoginPage.login(username, "ThisIsNotAPassword");
});

When("er das Seitenmenü öffnet", () => {
  HomePage.btnMenuToggle.click();
});

When("er auf den Logout-Button klickt", () => {
  HomePage.linkLogout.click();
});

Then("sollte er wieder auf der Startseite sein", () => {
  // Wir prüfen, ob wir auf der Landingpage sind (kein #appointment in der URL)
  cy.url().should("eq", "https://katalon-demo-cura.herokuapp.com/");
  HomePage.btnMenuToggle.should("be.visible");
});