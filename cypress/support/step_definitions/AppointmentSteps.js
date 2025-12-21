import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AppointmentPage from "../../pages/AppointmentPage";

// ----------------------------------------------------------------
// Step Definitions: Appointment
// Nutzung von Data Tables für komplexe Formulareingaben
// ----------------------------------------------------------------

// When er das Terminformular mit folgenden Daten ausfüllt:
When("er das Terminformular mit folgenden Daten ausfüllt:", (dataTable) => {
  // dataTable.hashes() konvertiert die Gherkin-Tabelle in ein Array von Objekten.
  // Beispiel: [{ Facility: 'Tokyo...', Readmission: 'true', ... }]
  const data = dataTable.hashes()[0];

  const isReadmission = data.Readmission === "true";

  AppointmentPage.fillAppointmentForm(
    data.Facility,
    isReadmission,
    data.Program,
    data.Date,
    data.Comment
  );
});

When("er die Buchung bestätigt", () => {
  AppointmentPage.submitAppointment();
});

// Assertions
Then("sollte die Bestätigungsseite {string} angezeigt werden", (headerText) => {
  AppointmentPage.verifyConfirmationVisible();
  // Optional: Header-Text prüfen, falls dynamisch
  cy.get("h2").should("have.text", headerText);
});

Then("die gebuchte Einrichtung sollte {string} sein", (facilityName) => {
  // Wir prüfen, ob die Auswahl korrekt gespeichert wurde (true für Readmission hardcodiert im Testfall oben)
  // Im echten Szenario könnte man Readmission auch dynamisch übergeben.
  AppointmentPage.verifyBookedData(facilityName, true);
});