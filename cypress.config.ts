import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    chromeWebSecurity: false,
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
});
