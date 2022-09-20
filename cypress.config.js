const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "baseUrl": "https://google.com",
      "specPattern": ["*.*"],
      "viewportWidth": 1200,
      "viewportHeight": 800,
      "video": true,
      "screenshotOnRunFailure": true,
      "watchForFileChange": false,
      "pageLoadTimeout": 60000,
      "chromeWebSecurity": false,
      "specPattern": 'cypress/e2e/**',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  
});

