const {until, By, promise} = require('selenium-webdriver');
var selenium = require('selenium-webdriver');

describe("Amortization Schedule Calculator", function(){

    beforeEach(async function(){
        this.driver = new selenium.Builder()
        .forBrowser('chrome')
        .build();

        await this.driver.get('http://www.amortization-calc.com/');
    });  

    it("should calculate a happy path monthly payment", async function(){
        await this.driver.findElement(By.id('input01')).clear();
        await this.driver.findElement(By.id('input01')).sendKeys('500000');
        await this.driver.findElement(By.id('input02')).clear();
        await this.driver.findElement(By.id('input02')).sendKeys('30');
        await this.driver.findElement(By.id('input03')).clear();
        await this.driver.findElement(By.id('input03')).sendKeys('4.70');
        await this.driver.findElement(By.className('btn btn-large btn-warning')).click();
        const actualValues = await this.driver.findElements(By.xpath('//tr/td/h3'));
        expect(await actualValues[0].getText()).toBe('$2,595');
    });

    it("should display a message for an invalid zip code", async function(){
        expect(false).toBe(true);
    });

    afterEach(async function(){
        await this.driver.quit();
    });
});