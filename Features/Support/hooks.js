// const { Before, After, Status } = require('cucumber');

// Before(async function (scenarioResult){
//   var world = this;
// });

//   After(async function () {
//     return await this.driver.quit();
//   });








let {defineSupportCode} = require('cucumber');
let tmp = require('tmp');

defineSupportCode(function({After, Before}) {
  // Synchronous
  Before(function () {
    this.count = 0;
  });

  // Asynchronous Callback
  Before(function (testCase, callback) {
    var world = this;
    tmp.dir({unsafeCleanup: true}, function(error, dir) {
      if (error) {
        callback(error);
      } else {
        world.tmpDir = dir;
        callback();
      }
    });
  });

  // Asynchronous Promise
  After(function () {
    // Assuming this.driver is a selenium webdriver
    return this.driver.quit();
  });
});

// const { Before, After, Status } = require('cucumber');

// Before(async function (scenarioResult){
//   await this.driver.get('www.google.com');
// });

// After(async function (scenarioResult){
//   await this.driver.quit();
// });