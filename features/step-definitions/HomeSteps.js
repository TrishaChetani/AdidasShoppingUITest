const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');


const HomePage = require('../pageobjects/home.page');


const fs = require("fs");
var path = require("path");
const testFolder = "./testdata";
const file = fs.readFileSync(path.resolve(testFolder, "testdata.json"));
let data = JSON.parse(file);
console.log(data)

const pages = {
    home: HomePage,
    SearchProduct: SearchProductPage,
    Detail: DetailPage,
    CheckoutPage: CheckoutPage,
    DeliveryPage: DeliveryPage

}

Given(/^Navigate to adidas homepage and Search the word running$/, async () => {
    await HomePage.open();
    await HomePage.clickCloseLocationPopUp();
    await HomePage.clickTrackingPopUp();
    await HomePage.clickSearchButton(data.SearchText);
});