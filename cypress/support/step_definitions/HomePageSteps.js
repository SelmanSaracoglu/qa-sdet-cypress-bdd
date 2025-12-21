import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";


// ----------------------------------------------------------------
// Step Definitions (Schrittdefinitionen)
// Hier verbinden wir die Gherkin-Sätze mit dem Page Object Model.
// ----------------------------------------------------------------

// Scenario: Die Startseite wird erfolgreich geladen
Given("der Benutzer öffnet die Startseite", () => {
    HomePage.visit();
});

Then("sollte der Seitentitel {string} lauten", (title) => {
    cy.title().should("eq", title)
})

Then("die URL sollte die korrekte Domain enthalten", () => {
  HomePage.verifyUrl();
});

// Scenario: Wichtige UI-Elemente sind sichtbar
Then("sollten der Header und der {string} Button sichtbar sein", (_btnText) => {
  // Hinweis: _btnText wird hier nicht direkt verwendet, da wir im POM prüfen,
  // aber es macht den Gherkin-Step lesbarer.
  HomePage.verifyElementsVisible();
});