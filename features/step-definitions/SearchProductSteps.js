const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');

const SearchProductPage = require('../pageobjects/searchProduct.page');


const fs = require("fs");
var path = require("path");
const testFolder = "./testdata";
const file = fs.readFileSync(path.resolve(testFolder, "testdata.json"));
let data = JSON.parse(file);


const pages = {
    SearchProduct: SearchProductPage
}

When(/^Click on the first product$/, async () => {
    await SearchProductPage.clickFirstProduct();
});