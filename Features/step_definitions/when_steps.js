const {until, By, promise} = require('selenium-webdriver')
const {When} = require('cucumber')

promise.USE_PROMISE_MANAGER = false;

When('I value', async function () {
    await this.driver.findElement(By.className('btn btn-large btn-warning')).click();
});