const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');


const DetailPage = require('../pageobjects/productDetail.page')


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

When(/^Verify that you have navigated to the correct product page by checking the URL$/, async () => {
    await expect(browser).toHaveUrl(data.URL);

});

When(/^Pick any size and click on Add to Bag button$/, async () => {
    await DetailPage.clickToClosePopup();
    await DetailPage.selectSize();
    await DetailPage.clickAddToBagButton();

});

When(/^Verify that you have successfully added one item to the bag$/, async () => {
    await DetailPage.verifySuccessfulMessagePopUp();

});

When(/^Click on View Bag button and navigate to the cart page$/, async () => {
    await DetailPage.clickAddToBagButton();

});
