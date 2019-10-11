const facebookUser = require('../userPO/FacebookUser');
const facebookPO   = require('../page_objects/facebookHome');

module.exports = {
  'Crawler step one' : function (browser) {
    browser
      .url(facebookPO.URL)
      .pause(2000)
      .setValue(facebookPO.EMAIL_INPUT, facebookUser.EMAIL)
      .pause(2000)
      .setValue(facebookPO.PASS_INPUT, facebookUser.PASSWORD)
      .pause(2000)
      .click(facebookPO.LOGIN_BUTTON)
      .pause(10000)
      .setValue(facebookPO.SEARCH_INPUT, 'Fernando Reiz')
      .pause(2000)
      .keys(browser.Keys.ENTER)
      .pause(200000)
      .end();
  }
};
