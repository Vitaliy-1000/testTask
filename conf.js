

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
      browserName: 'chrome'
    },
  

    SELENIUM_PROMISE_MANAGER: false,
    allScriptsTimeout: 120000,
    getMultiCapabilities: 60000,

    onPrepare() {
      browser.waitForAngularEnabled(false);
    },

    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 300000
    }

  };




