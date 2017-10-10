var selenium = require('selenium-webdriver');

describe("Google", function(){

    beforeEach(async function(){
        this.driver = new selenium.Builder()
        .forBrowser('chrome')
        .build();

        await this.driver.get('https://www.google.com/');
    });  

    it("should display Google in the title.", async function(){
        expect(await this.driver.getTitle()).toBe("Google");

    });
    
    afterEach(async function(){
        await this.driver.quit();
    });
});