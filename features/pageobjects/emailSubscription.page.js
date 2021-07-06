const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    get inputEmail() {
        return $('#email')
    }
    get btnSubmit() {
        return $('#newsletterFormSubmitBtn')
    }
    get acceptCookiesButton() {
        return $('div.consentForm__acceptButtons > div:nth-child(2)')
    }
    get confirmationMessage() {
        return $('div.footerNewsletter__confirmation')
    }



    async open() {
        return super.open('login');
        browser.maximizeWindow();
    }


    async clickAcceptCookiesButton() {
        await (await this.acceptCookiesButton).click();
    }


    async enterEmailSubscription(email) {
        await (await this.inputEmail).setValue(email);
    }


    async visibilitySubscriptionField() {
        await (await this.inputEmail).isDisplayed();
    }


    async clickSubmitButton() {
        await (await this.btnSubmit).click();
    }


    async visibilityConfirmationMessage() {
        await (await this.confirmationMessage).isDisplayed();
    }

}

module.exports = new LoginPage();