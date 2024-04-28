const Page = require('../page');
const Locators = require('../../resources/locators/locators.js')
const reporter = require('@wdio/allure-reporter');
const locators = require('../../resources/locators/locators.js');

class Login extends Page {

    
    async doLogin(user, pwd) {

        console.log(`Logging in...`)
        await webClient.$(Locators.loginPage.txt_uname).setValue(user);
        await webClient.$(Locators.loginPage.txt_pwd).setValue(pwd);
        await webClient.$(Locators.loginPage.btn_login).click();
        await expect(webClient.$(Locators.homePage.list_sort)).toBeExisting();
        console.log(`Taking screenshot...`)
        await webClient.takeScreenshot();
        reporter.addStep('STEP: Login successful');
    }

    async titaniumLogin(user,pwd)
    {
        console.log("Logging in....");
        await webClient.$(Locators.loginPagetitanium.loginheader).click();
        await webClient.$(Locators.loginPagetitanium.username).setValue(user);
        await webClient.$(Locators.loginPagetitanium.password).setValue(pwd);
        await webClient.$(Locators.loginPagetitanium.loginBtnClick).click();
        reporter.addStep('STEP: Login Successful');
        //await webClient.$(Locators.loginPage)
    }
};
module.exports = new Login();