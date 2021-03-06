const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');


const CheckoutPage = require('../pageobjects/addToCart.page')


const fs = require("fs");
var path = require("path");
const testFolder = "./testdata";
const file = fs.readFileSync(path.resolve(testFolder, "testdata.json"));
let data = JSON.parse(file);


const pages = {
    CheckoutPage: CheckoutPage
}

When(/^Verify that you are on the cart page by the title Your Bag$/, async () => {
    await expect(browser).toHaveUrl(data.AddToCart);
});

Then(/^Click on the Checkout button$/, async () => {
    await CheckoutPage.clickCheckOutButton();
});