Feature('Sauce Demo Login');

Scenario('Login with valid credentials', async ({ I }) => {

  // Go to Sauce Demo website
  I.amOnPage('https://www.saucedemo.com');

  // Wait for page to load
  I.waitForElement('#user-name', 10);

  // Fill username
  I.fillField('#user-name', 'standard_user');

  // Fill password
  I.fillField('#password', 'secret_sauce');

  // Click Login button
  I.click('#login-button');

  // Wait for products page
  I.waitForElement('.inventory_list', 10);

  // Verify login was successful
  I.see('Products');
  I.seeInCurrentUrl('inventory');

}).tag('@smoke');