//const {test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test'

test('Enter user credentials and Login', async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    await page.locator('#user-name').fill("standard_user");
    await page.fill('#password',"secret_sauce");
    await page.click('#login-button');

    const titleText= await page.locator(".title[data-test='title']").textContent();
    await expect(titleText).toEqual('Products');

})




