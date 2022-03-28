const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {


    get viewLocationPopUp() {
        return $('div.gl-modal__main-content > h5')
    }

    get closeLocationPopUp(){
    return $('button.gl-modal__close')
    }

    get trackingPopUp(){
    return $('div.gl-modal__main-content > div >div > h4')
    }

    get acceptTrackingPopUp(){
    return $('div.footer___3-AJI > button.gl-cta.gl-cta--primary.gl-cta--full-width.text-wrap___3Cntx');
    }

    get searchButton(){
        return $('input.searchinput___zXLAR');
    }


    async open() {
        return super.open('');
        browser.maximizeWindow();
    }

    async clickCloseLocationPopUp() {
        await (await this.viewLocationPopUp).isDisplayed();
        await (await this.closeLocationPopUp).click();
    }

    async clickTrackingPopUp(){
    await (await this.trackingPopUp).isDisplayed();
    await (await this.acceptTrackingPopUp).click();
    }

    async clickSearchButton(running){
    await (await this.searchButton).isDisplayed();
    await (await this.searchButton).setValue(running);
    await  browser.keys("\uE007");
    }
}

module.exports = new HomePage();