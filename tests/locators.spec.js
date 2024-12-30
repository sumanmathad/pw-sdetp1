const {test, expect} = require('@playwright/test');
//import {test, expect} from '@playwright/test'

test('Enter user credentials and Login', async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    await page.locator('#user-name').fill("standard_user");
    await page.fill('#password',"secret_sauce");
    await page.click('#login-button');

    const titleText= await page.locator(".title[data-test='title']").textContent();
    await expect(titleText).toEqual('Products');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})

test('Verify burger menu item list', async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    await page.locator('#user-name').fill("standard_user");
    await page.fill('#password',"secret_sauce");
    await page.click('#login-button');

    await page.locator('#react-burger-menu-btn').click();

    await expect(page.getByRole('link',{name: 'All Items'})).toBeVisible();


});


test('print the names of all products', async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator('#user-name').fill("standard_user");
    await page.fill('#password',"secret_sauce");
    await page.click('#login-button');

    const productNameArray = await page.$$('div[data-test="inventory-item"] .inventory_item_description a');

    for ( const names of productNameArray){
        console.log(await names.textContent());
    }

});



