const {test, expect} = require ('@playwright/test');

test('Launch Home page and verify title', async ({page})=>{
    
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle('Swag Labs');

});



