class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.countryInput = page.locator("[placeholder='Select Country']");
    this.placeOrderBtn = page.locator(".action__submit");
    this.confirmMessage = page.locator(".hero-primary");
  }

  async selectCountry(country) {
    await this.countryInput.fill(country);  // or use pressSequentially("ind") if dynamic
    await this.page.locator(`.ta-results button:has-text('${country}')`).click();
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }

  async verifyOrder() {
    await expect(this.confirmMessage).toHaveText(" Thankyou for the order. ");
  }
}

module.exports = CheckoutPage;
