class DashboardPage{

constructor(page){

this.page = page
this.products = page.locator(".card-body")
this.cartBtn = page.locator("[routerlink*='cart']")

}

async addProductToCart(productName){

const count = await this.products.count()

for(let i=0;i<count;i++){

const title = await this.products.nth(i).locator("b").textContent()

if(title.trim() === productName){

await this.products.nth(i).locator("text= Add To Cart").click()
break

}

}

}

async goToCart() {
  await Promise.all([
    this.page.waitForNavigation({ waitUntil: 'networkidle' }),
    this.cartBtn.click()
  ]);
}


}

module.exports = DashboardPage
