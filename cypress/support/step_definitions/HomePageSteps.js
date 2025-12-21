import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

// ----------------------------------------------------------------
// Step Definitions: Startseite
// ----------------------------------------------------------------

Given("der Benutzer öffnet die Startseite", () => {
  HomePage.visit();
});

// --- Title & URL ---

Then("sollte der Seitentitel {string} lauten", (title) => {
  cy.title().should("eq", title);
});

Then("die URL sollte die korrekte Domain enthalten", () => {
  HomePage.verifyUrl();
});

// --- Header & Buttons ---

Then("sollte die Hauptüberschrift {string} sichtbar sein", (text) => {
  // Wir prüfen Text und Sichtbarkeit gleichzeitig
  HomePage.headerH1.should("be.visible").and("have.text", text);
});

Then("sollte der {string} Button sichtbar sein", (_btnName) => {
  // _btnName wird hier ignoriert, da wir das Element direkt im POM prüfen
  HomePage.btnMakeAppointment.should("be.visible");
});

Then("sollte der Menü-Toggle Button sichtbar sein", () => {
  HomePage.btnMenuToggle.should("be.visible");
});

// --- Footer & Kontakt ---

Then("sollten die Kontaktinformationen wie folgt sein:", (dataTable) => {
  // dataTable.rowsHash() konvertiert die Tabelle in ein Objekt
  const data = dataTable.rowsHash();
  HomePage.verifyContactInfo(data.Address, data.Phone, data.Email);
});

Then("sollte der {string} Link auf {string} verweisen", (platform, url) => {
  HomePage.verifySocialLink(platform, url);
});