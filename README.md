# CURA Healthcare - UI Test Automation

![Cypress](https://img.shields.io/badge/Cypress-E2E-green)
![Status](https://img.shields.io/badge/Status-Stable-success)

## 📌 Projektübersicht

Dieses Projekt automatisiert die Tests für die **CURA Healthcare Service** Webseite.
Es nutzt **Cypress** und **Cucumber (BDD)**, um sicherzustellen, dass die Hauptfunktionen der Anwendung fehlerfrei arbeiten.

Das Projekt basiert auf dem **Page Object Model (POM)** Design Pattern.

## 📂 Testumfang (Scope)

Wir testen ausschließlich die Benutzeroberfläche (UI). API-Tests sind nicht Teil dieses Projekts.

* **Startseite:** Validierung von Header, Footer und Links.
* **Login:** Testen von gültigen und ungültigen Anmeldeversuchen.
* **Termin:** Kompletter Buchungsprozess (End-to-End).
* **Historie:** Überprüfung, ob Buchungen gespeichert werden.

👉 *Detaillierte Szenarien finden Sie hier: [Test-Szenarien](./docs/Test_Szenarien.md)*

## 💻 Installation & Start

1. **Repository klonen:**

   git clone [https://github.com/SelmanSaracoglu/qa-sdet-cypress-bdd.git]

2. **Installation:**

npm install

3. **Tests ausführen:**

Im Browser (Sichtbar): npx cypress open
Im Terminal (Hintergrund): npx cypress run

4. **Technologien**

JavaScript (ES6)
Cypress v13+
Cypress-Cucumber-Preprocessor
Page Object Model (Architektur)