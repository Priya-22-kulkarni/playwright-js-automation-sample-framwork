const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/loginPage')
const DashboardPage = require('../pages/dashboardPage')
const CartPage = require('../pages/cartPage')
const CheckoutPage = require('../pages/checkoutPage')

const data = require('../utils/testData')

test('Verify order appears in order history', async ({ page }) => {

const loginPage = new LoginPage(page)
const dashboard = new DashboardPage(page)
const cart = new CartPage(page)
const checkout = new CheckoutPage(page)

await loginPage.goTo()

await loginPage.login(data.email,data.password)

await dashboard.addProductToCart(data.productName)

await dashboard.goToCart()

await cart.checkout()

await checkout.selectCountry(data.country)

await checkout.placeOrder()

// go to orders page
await page.locator("[routerlink*='myorders']").click()

// verify order exists
await expect(page.locator("tbody")).toContainText(data.productName)

})
