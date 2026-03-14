const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/loginPage')

const users = [

{email:"testuser@example.com",password:"Test@123"},
{email:"demo@test.com",password:"Test@123"},
{email:"invalid@test.com",password:"wrongpass"}

]

users.forEach(user => {

test(`Login Test for ${user.email}`, async ({page}) => {

const loginPage = new LoginPage(page)

await loginPage.goTo()

await loginPage.login(user.email,user.password)

await page.waitForTimeout(2000)

})

})
