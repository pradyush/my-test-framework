require('dotenv').config();

const { setHeadlessWhen } = require('@codeceptjs/configure');

// Run headless in CI environment
//setHeadlessWhen(process.env.CI);

/** @type {CodeceptJS.MainConfig} */
exports.config = {

  // ✅ Where your test files are
  tests: './tests/**/*_test.js',

  // ✅ Where screenshots and reports go
  output: './output',

  // ✅ Browser configuration
  helpers: {
    Playwright: {
      browser: process.env.BROWSER || 'chromium',
      url: process.env.BASE_URL || 'https://www.google.com',
      show: 'true',
      windowSize: '1920x1080',
      waitForNavigation: 'networkidle',
      timeout: 60000,
      waitForTimeout: 10000,
    }
  },

  // ✅ Page Objects — we'll add these in Step 4
  include: {
    I: './steps_file.js',
  },

  // ✅ Plugins
  plugins: {

    // Pauses test on failure so you can debug
    pauseOnFail: {},

    // Retries a failed step before marking test as failed
    retryFailedStep: {
      enabled: true,
      retries: 2,
    },

    // Takes screenshot automatically when test fails
    screenshotOnFail: {
      enabled: true,
    },

    // Allure reporting
    // allure: {
    //   enabled: true,
    //   outputDir: 'output/allure-results',
    // },

    // Adds small delay between steps (helps with flaky tests)
    autoDelay: {
      enabled: true,
    },
  },

  // ✅ Project name
  name: 'my-test-framework',
}