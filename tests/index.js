module.exports = {
  //andressagurgel55@hotmail.com mail
  //andressinhagugu89 password
  'Crawler step one' : function (browser) {
    browser
      .url("https://fb.me")
      .pause(2000)
      .setValue('input[id="email"]', 'andressagurgel55@hotmail.com')
      .pause(2000)
      .setValue('input[id="pass"]', 'andressinhagugu89')
      .pause(2000)
      .click('label[id="loginbutton"]')
      .pause(10000)
      .setValue('input[name="q"]', 'Fernando Reiz')
      .pause(2000)
      .keys(browser.Keys.ENTER)
      .pause(200000)
      .end();
  /*browser
      .url(browser.options.desiredCapabilities.launchUrl)
      .pause(2000)
      .waitForElementVisible('input[id="search"]', 5000, false)
      .setValue('input[id="search"]', 'Grindcore')
      .pause(1000)
      .click('button[id="search-icon-legacy"]')
      .pause(4000)
      .end(); */
  }
};
