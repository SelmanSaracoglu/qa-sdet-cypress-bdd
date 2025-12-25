const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
    e2e: {
        specPattern: "cypress/e2e/features/**/*.feature",
        baseUrl: "https://katalon-demo-cura.herokuapp.com",
        env: {
            apiUrl: "https://reqres.in/api"
        },
        chromeWebSecurity: false,
        video: false,
        screenshotOnRunFailure: true,
        async setupNodeEvents(on, config) {
            await preprocessor.addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin.default(config)],
                })
            );
            return config;
        },
    },
});