
const {until, By, promise} = require('selenium-webdriver')
const {Then} = require('cucumber')
var chai = require('chai');  
var expect = chai.expect; 

promise.USE_PROMISE_MANAGER = false;
      
Then('I see the title Google', async function () {
  expect(await this.driver.getTitle()).to.equal('Google');
});

Then('I see a monthly payment of {string}', async function (string) {
  const actualValues = await this.driver.findElements(By.xpath('//tr/td/h3'));
  expect(await actualValues[0].getText()).to.equal(string);
});