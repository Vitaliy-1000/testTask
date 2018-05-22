const { element, by, browser, ExpectedConditions } = require('protractor');
//const { expect } = require('jasmine');

const PageMap = require('./objectPage')

const pageMap = new PageMap();

let EC = protractor.ExpectedConditions;

describe('test task', function() {
    it('1234', async function() {
     
      await browser.get('https://print-bi.com/filter/');

      expect(await browser.wait(EC.visibilityOf(pageMap.mapWithFilters), 100000)).toEqual(true)
      expect(await pageMap.areDisplayed(pageMap.selectors)).toEqual(true)

      await pageMap.choosOptions(pageMap.selectors)
    });
  });