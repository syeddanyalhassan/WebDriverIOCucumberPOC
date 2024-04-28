const Page = require('../page');
const Locators = require('../../resources/locators/locators.js')
const reporter = require('@wdio/allure-reporter');

class Terminal extends Page {

    async terminalCustomerInfo(amt,eml)
    {
        console.log("Select Terminal..");
        await webClient.$(Locators.terminaltitanium.terminal).click();
        await webClient.$(Locators.terminaltitanium.customerdropdown).click();
        //await webClient.$(Locators.terminaltitanium.customerdropdown).setValue("Danyal Kils 001");

        
        await webClient.$(Locators.terminaltitanium.selectcustomerfromdropdown).click();
        reporter.addStep('STEP: Selecting customer');
        await webClient.$(Locators.terminaltitanium.amount).setValue(amt);
        await webClient.$(Locators.terminaltitanium.email).setValue(eml);
        reporter.addStep('STEP: Customer Added along with amount and email');
        //await webClient.$(Locators.loginPage)
    }
    async terminalACH(acctName,acctNum,acctRouting)
    {
        console.log("Adding ACH details and clicking on ACH button")
        await webClient.$(Locators.terminaltitanium.ACHlink).click();
        await webClient.$(Locators.terminaltitanium.accountName).setValue(acctName);
        await webClient.$(Locators.terminaltitanium.accountNumber).setValue(acctNum);
        await webClient.$(Locators.terminaltitanium.routingNumber).setValue(acctRouting);
        await webClient.$(Locators.terminaltitanium.chargeACH).click();
        reporter.addStep('STEP: Clicked on ACH charge button');
        
        
        

    }

    
};
module.exports = new Terminal();