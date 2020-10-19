// Dependencies
const pages = require('./pages');
// const selectors = require('./selectors');
const scope = require('./scope');
const selectors = require('./selectors');
// Defines whether puppeteer runs Chrome in headless mode.
const headless = true;
const slowMo = 50;

const args = ['--no-sandbox', '--start-fullscreen'];

const visitPage = async (selectorPage, pageName) => {
  if (!scope.browser)
    scope.browser = await scope.driver.launch({ headless, slowMo, args });
  scope.context.currentPage = await scope.browser.newPage();
  await scope.context.currentPage.setViewport({ width: 1920, height: 1080 });
  let url = scope.host;
  url += pages[pageName];

  const visit = await scope.context.currentPage.goto(url, {
    waitUntil: 'networkidle2',
  });

  await scope.context.currentPage.waitForSelector(selectors.page[selectorPage]);
  return visit;
};

module.exports = {
  headless,
  visitPage,
};
