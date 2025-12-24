import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HistoryPage from "../../pages/HistoryPage";
import HomePage from "../../pages/HomePage";

// ----------------------------------------------------------------
// NAVIGATION
// ----------------------------------------------------------------

When("er zur History-Seite navigiert", () => {
  // Wir nutzen das Menü von der HomePage
  HomePage.btnMenuToggle.click();
  // Klick auf den Link "History" im Menü
  cy.contains("a", "History").click();
});

// ----------------------------------------------------------------
// ASSERTIONS
// ----------------------------------------------------------------

Then("sollte der Termin vom {string} im {string} angezeigt werden", (date, facility) => {
  HistoryPage.verifyPageLoaded();
  // Wir prüfen Datum und Einrichtung im Panel
  HistoryPage.dateValue.should("contain.text", date);
  HistoryPage.facilityValue.should("contain.text", facility);
});

Then("der Kommentar sollte {string} sein", (comment) => {
  HistoryPage.commentValue.should("contain.text", comment);
});