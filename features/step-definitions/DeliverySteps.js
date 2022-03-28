const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');


const SecurePage = require('../pageobjects/secure.page');
const DeliveryPage = require('../pageobjects/delivery.page.js');

const fs = require("fs");
var path = require("path");
const testFolder = "./testdata";
const file = fs.readFileSync(path.resolve(testFolder, "testdata.json"));
let data = JSON.parse(file);


const pages = {

    DeliveryPage: DeliveryPage

}

Then(/^Verify that youre on the delivery page$/, async () => {
    await expect(browser).toHaveUrl(data.Delivery);
});

Then(/^Navigate to from the Get Your Order module and click From A Collection Point$/, async () => {
    await DeliveryPage.clickOnCollectButton();
});



Then(/^Type London in the location text box$/, async () => {
    await DeliveryPage.keyInPickUpPoint(data.Location);
});

Then(/^click Search for Collection Points button$/, async () => {
    await DeliveryPage.clickOnCollectButton();
});

Then(/^from the list, pick any collection point$/, async () => {
    await DeliveryPage.clickPickUpStores();
});

Then(/^Verify that correct collection point is selected$/, async () => {
    await DeliveryPage.clickPickUpStores(Data.CollectionPoint);
});

Then(/^Proceed to the payment step by Review and Pay Button$/, async () => {

});

Then(/^Verify that major payment methods PayPal and Credit Card are present$/, async () => {

});