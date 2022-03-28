const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddToCartPage extends Page {


    get checkOutButton() {
        return $('div.cart-page__summary___1Ah1i.cart-aside___HjA1u > div.gl-flex-display.gl-flex-col-reverse.gl-flex-justify-content-end > div.cart-page__actions--aside___3aEIR.gl-vspace-bpall-small.gl-vspace-bpl-null > div:nth-child(1) > button')
    }




    async clickCheckOutButton(){
        await (await this.checkOutButton).isDisplayed();
        await (await this.checkOutButton).click();
    }

}

module.exports = new AddToCartPage();