const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchProductPage extends Page {


    get searchFirstProduct() {
        return $('#app > div > div:nth-child(1) > div > div > div > div.plp-root___kvAtB > div > div:nth-child(2) > div > div > div.col-s-12.col-l-24.no-gutters-s > div.product-container___Qm5zA > div > div:nth-child(2) > div > div > div > div > div > div > div.glass-product-card__assets > a.glass-product-card__assets-link > img.img_with_fallback___1aENo.glass-product-card__image.performance-item')
    }

    get searchButton(){
        return $('input.searchinput___zXLAR');
    }


    async open() {
        return super.open('');
        browser.maximizeWindow();
    }


    async clickFirstProduct() {
        await (await this.searchFirstProduct).isDisplayed();
        await (await this.searchFirstProduct).click();
        await expect(browser).toHaveUrlContaining('solarglide-5-shoes');
    }

    async clickSearchButton(running){
    await (await this.searchButton).isDisplayed();
    await (await this.searchButton).setValue(running);
    await  browser.keys("\uE007");
    }
}

module.exports = new SearchProductPage();