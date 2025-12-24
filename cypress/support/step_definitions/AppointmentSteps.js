import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AppointmentPage from "../../pages/AppointmentPage";

// ----------------------------------------------------------------
// VORBEDINGUNGEN
// ----------------------------------------------------------------

Given("der Benutzer ist auf der {string} Seite", (_pageName) => {
  // Wir prüfen nur, ob das Element für die Auswahl da ist
  AppointmentPage.selectFacility.should("be.visible");
});

// ----------------------------------------------------------------
// AKTIONEN
// ----------------------------------------------------------------

When("er die Einrichtung {string} auswählt", (facility) => {
  AppointmentPage.selectFacilityByName(facility);
});

When("er die Option {string} aktiviert", (_option) => {
  // _option ist hier nur Text, wir rufen die Methode direkt auf
  AppointmentPage.checkHospitalReadmission();
});

When("er das Gesundheitsprogramm {string} wählt", (program) => {
  AppointmentPage.selectHealthcareProgram(program);
});

When("er das Datum {string} eingibt", (date) => {
  AppointmentPage.enterVisitDate(date);
});

When("er den Kommentar {string} schreibt", (comment) => {
  AppointmentPage.enterComment(comment);
});

When("er auf den {string} Button klickt", (_btnName) => {
  AppointmentPage.clickBookAppointment();
});

// ----------------------------------------------------------------
// ÜBERPRÜFUNGEN
// ----------------------------------------------------------------

Then("sollte die Buchungsbestätigung {string} angezeigt werden", (_text) => {
  AppointmentPage.verifyBookingSuccess();
});

Then("die gebuchte Einrichtung sollte {string} sein", (facility) => {
  AppointmentPage.verifyFacility(facility);
});