
const {until, By, promise} = require('selenium-webdriver')
const {Given} = require('cucumber')

promise.USE_PROMISE_MANAGER = false;

    //    Given('I go to google', function (callback) {
    //     // Write code here that turns the phrase above into concrete actions
    //     callback(null, 'pending');
    //   });

      Given(/^I go to google$/, async function () {
          await this.driver.get('http://www.google.com');
      });

    Given('I visit the amortization schedule calculator', async function () {
        await this.driver.get('http://www.amortization-calc.com/');
    });

    Given('I enter a loan amount of {string}', async function (string) {
        await this.driver.findElement(By.id('input01')).clear();
        await this.driver.findElement(By.id('input01')).sendKeys(string);
    });

    Given('I enter a loan term of {string} years', async function (string) {
        await this.driver.findElement(By.id('input02')).clear();
        await this.driver.findElement(By.id('input02')).sendKeys(string);
    });

    Given('I enter an interest rate of {string}', async function (string) {
        await this.driver.findElement(By.id('input03')).clear();
        await this.driver.findElement(By.id('input03')).sendKeys(string);
    });