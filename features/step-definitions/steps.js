const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/emailSubscription.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
	login: LoginPage
}

Given(/^I visit Hoeffner login page$/, async() => {
	await LoginPage.open()
});

When(/^I accept the cookie setting pop-up$/, async() => {
	await LoginPage.clickAcceptCookiesButton()
});

When(/^I enter my "([^\"]*)" in the input field$/, async(email) => {
	await LoginPage.enterEmailSubscription(email);
});

Then(/^I can see the newsletter subscription input field$/, async() => {
	await LoginPage.visibilitySubscriptionField();
});

Then(/^I can see a confirmation message that my subscription is in progress$/, async() => {
	await LoginPage.visibilityConfirmationMessage();
});


When(/^I press the Absenden button$/, async() => {
	await LoginPage.clickSubmitButton();
});

