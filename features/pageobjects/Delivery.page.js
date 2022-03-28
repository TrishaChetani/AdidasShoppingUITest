const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DeliveryPage extends Page {


    get collectButton() {
        return $('main > div:nth-child(6)')
    }

    get inputBoxPickUpPoint(){
        return $('#pickpoint-search-input')
    }

    get searchStores(){
        return $('button.gl-cta.gl-cta--primary.gl-vspace-bpall-small')
    }

    get collectFromStores(){
        return $('div.gl-modal__main-content > div > div > div.store-locator-modal-selector___1QjEz > div:nth-child(1) > div > button')
    }

    get pickUpLocation(){
        return $("div.row.gl-flex-justify-content-between.gl-flex-nowrap > div > div > strong")
    }




    async clickOnCollectButton(){
        await (await this.collectButton).isDisplayed();
        await (await this.collectButton).click();
    }

    async keyInPickUpPoint(value){
            await (await this.inputBoxPickUpPoint).isDisplayed();
            await (await this.inputBoxPickUpPoint).addValue(value);
    }

    async clickPickUpStores(){
                await (await this.collectFromStores).isDisplayed();
                await (await this.collectFromStores).click();
    }

    async verifyPickUpLocation(value){
         await (await this.pickUpLocation).isDisplayed();
         var actualValue = await this.collectFromStores.getText();
         expect(actualValue).to.equal(value);
    }

}

module.exports = new DeliveryPage();