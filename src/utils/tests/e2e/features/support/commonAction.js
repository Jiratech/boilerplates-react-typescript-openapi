const scope = require('./scope');
const selectors = require('./selectors');
const pages = require('./pages');
const faker = require('faker');

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

const getVisible = async selector => {
    const { currentPage } = scope.context;
    const data = await currentPage.$$(selector);
    let visibleElement = null;
    for (let i = 0; i < data.length; i += 1) {
      const rect = await currentPage.evaluate(elem => {
        const isVisible = !!(
          elem.offsetWidth ||
          elem.offsetHeight ||
          elem.getClientRects().length
        );
        const validator = window.getComputedStyle(elem).visibility !== 'hidden';
        return validator && isVisible;
      }, data[i]);
      if (rect) {
        visibleElement = data[i];
        break;
      }
    }
    return visibleElement;
};

const fillIn = async (fieldType, field, value) => {
    const { currentPage } = scope.context;
    let fakerValue = '';
    const fieldPresent = await currentPage.waitForSelector(
      `${fieldType}[name="${field}"]`,
    );
    await fieldPresent;
    await currentPage.focus(`${fieldType}[name="${field}"]`);
    if (value.includes('faker')) {
      const fakerData = value.split('.');
      if (fakerData.length === 2) {
        fakerValue = faker[fakerData[1]]();
      } else {
        fakerValue = faker[fakerData[1]][fakerData[2]]();
      }
    }
  
    await currentPage.type(`${fieldType}[name="${field}"]`, fakerValue || value, {
      delay: 1,
    });
  
    return fakerValue || value;
};

const selectOption = async (dropdown, dropdownElement) => {
  const { currentPage } = scope.context;
  const dropDown = await currentPage.$(selectors.dropDown[dropdown]);
  await dropDown.click();

  await currentPage.evaluate(async (dropdown, dropdownElement, selectors) => {
    const example = document.querySelector(selectors.dropDown[dropdown]);
    const example_options = example.querySelectorAll('option');
    const selected_option = [...example_options].find(option => option.text === dropdownElement);
    selected_option.selected = true;
    element = document.querySelector(selectors.dropDown[dropdown]);
    var event = new Event('change', { bubbles: true });
    event.simulated=true;
    element.dispatchEvent(event);
  }, dropdown, dropdownElement, selectors);

  await delay(1500);
};

const shouldBeOnPage = async pageName => {
  url = scope.host + pages[pageName];
  const urlMatched = scope.context.currentPage.waitForFunction(
    `window.location.href === '${url}'`,
    { mutation: true },
  );
  await urlMatched;
};

const pressButtonOrElement = async (selectorType, selector) => {
    const element = await getVisible(selectors[selectorType][selector]);
    await element.click();
};

const pageShouldBeDisplayed = async page => {
  await delay(200);
  await scope.context.currentPage.waitForSelector(selectors.page[page]);
  await delay(200);
};

const doesListContainValue = async (
  selector,
  value,
) => {
  const { currentPage } = scope.context;
  const nodes = await currentPage.$$(selectors.element[selector]);
  let exist = null;
  for (let i = 0; i < nodes.length; i += 1) {
    exist = await currentPage.evaluate(
      dataSetNode =>
        dataSetNode.innerText ? dataSetNode.innerText.replace(/\s+/g, ' ') : '',
      nodes[i],
    );
    if (exist.includes(value)) {
      exist = nodes[i];
      return true;
    } else {
      exist = null;
      throw new Error('Element does not exist in UsersList')
    }
  }
  return true;
}

module.exports = {
    fillIn,
    pressButtonOrElement,
    shouldBeOnPage,
    pageShouldBeDisplayed,
    doesListContainValue,
    selectOption,
}