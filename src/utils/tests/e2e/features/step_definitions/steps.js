const { After, Before, Given, Then, When } = require('cucumber');
const { visitPage } = require('../support/PageActions');
const {
  fillIn,
  pressButtonOrElement,
  shouldBeOnPage,
  pageShouldBeDisplayed,
  doesListContainValue,
  selectOption,
} = require('../support/commonAction');

Given('I am on the {string} {string}', async function (page, pageUrl) {
  return await visitPage(page, pageUrl);
});

When('I fill {string} {string} with {string}', async function (inputType, name, value) {
  return await fillIn(inputType, name, value);
});

When('I press {string} {string}', async function (inputType, name) {
  return await pressButtonOrElement(inputType, name)
});

Then('I should be on the {string} page', async function (page) {
  return await shouldBeOnPage(page)
});

Then('I should see {string} displayed', async function (page) {
  return await pageShouldBeDisplayed(page)
});

Then('I expect the {string} to contain {string}', async function (selector, value) {
  return await doesListContainValue(selector, value);
});

Then('I select from {string} option {string}', async function (dropDown, option) {
  return await selectOption(dropDown, option);
});