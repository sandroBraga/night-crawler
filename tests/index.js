const homepagePO   = require('../page_objects/home_page_po');

module.exports = {
  'Crawler step one': function (browser) {
    browser
      .url(homepagePO.URL)
      .pause(2000)
      .setValue(homepagePO.INPUT, 'Hello world')
      .pause(2000)
      .assert.containsText('[data-nw=welcome-message]', 'Welcome Hello world !')
      .pause(1000)
      .end();
  }
};
