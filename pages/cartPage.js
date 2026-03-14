const {expect} = require('@playwright/test')

class CartPage{

constructor(page){

this.page = page
this.products = page.locator("h3")
this.checkoutBtn = page.locator("text=Checkout")

}

async verifyProduct(productName){

await expect(this.products.filter({hasText:productName})).toBeVisible()

}

async checkout(){

await this.checkoutBtn.click()

}

}

module.exports = CartPage
