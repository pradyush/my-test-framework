# Test Automation Framework

A modern end-to-end test automation framework built with **JavaScript**, **CodeceptJS**, and **Playwright**.

## 🚀 Tech Stack

- **Language:** JavaScript
- **Framework:** CodeceptJS
- **Browser Automation:** Playwright
- **Reporting:** Allure Reports

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- Node.js v18 or later
- npm v8 or later

## 📦 Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## ▶️ Running Tests

Run all test suites:

```bash
npm test
```

Run only smoke tests:

```bash
npm run test:smoke
```

Run only regression tests:

```bash
npm run test:regression
```

## 📊 Test Reports

Generate and view Allure reports after test execution (if configured):

```bash
allure generate
allure open
```

## 📁 Project Structure

```
.
├── tests/              # Test specifications
├── pages/              # Page Object Models
├── helpers/            # Custom helpers
├── output/             # Test artifacts
├── codecept.conf.js    # CodeceptJS configuration
└── package.json
```

## ✨ Features

- Cross-browser automation with Playwright
- Page Object Model (POM) architecture
- Smoke and regression test suites
- Allure reporting
- Easy setup and execution
- Scalable and maintainable project structure