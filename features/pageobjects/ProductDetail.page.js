const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductDetailPage extends Page {


    get size() {
        return $('div.sizes___3Stmf.gl-vspace > button:nth-child(1)')
    }

    get addToBagButton(){
         return $('button.gl-cta.gl-cta--primary.gl-cta--full-width')
    }

    get modalPopUpClose(){
        return $('button.gl-modal__close')
    }

    get successfulMessagePopUp(){
        return $('div.gl-modal__main-content > h5')
    }

    get addToCartButton(){
        return $('section > div.order-summary___3sMsw.gl-vspace-bpl-small > a')
    }



    async open() {
        return super.open('');
        browser.maximizeWindow();
    }

    async clickToClosePopup(){
        await (await this.modalPopUpClose).isDisplayed();
        await (await this.modalPopUpClose).click();
    }
    async selectSize() {
        await (await this.size).isDisplayed();
        await (await this.size).click();
    }

      async clickAddToBagButton() {
            await (await this.addToBagButton).isDisplayed();
            await (await this.addToBagButton).click();
        }

    async verifySuccessfulMessagePopUp(){
            await (await this.successfulMessagePopUp).isDisplayed();
            await (await this.successfulMessagePopUp).click();
    }

    async clickAddToCartButton(){
             await (await this.clickAddToCartButton).isDisplayed();
             await (await this.clickAddToCartButton).click();
    }
}

module.exports = new ProductDetailPage();