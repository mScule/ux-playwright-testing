const {test, expect} = require('@playwright/test');

test('News time and name test ', async ({ page }) => {

    // Go to the page Yle Areena
    await page.goto('https://areena.yle.fi/tv');

    // Expect the URL to be https://areena.yle.fi/tv
    await expect(page).toHaveURL('https://areena.yle.fi/tv');

    // Click on the link TV-opas
    await page.locator('#menu-main > ul > li:nth-child(4) > a > span').click();
    
    // Expect the URL to be https://areena.yle.fi/tv/opas
    await expect(page).toHaveURL('https://areena.yle.fi/tv/opas');

    // Look for the time 22.00
    await page.locator('xpath=//*[@id="maincontent"]/div[1]/ul/li[5]/div/ul/li[31]/div[1]/span/span[1]/time[1]').click();

    // Look for Kymmenen uutiset
    await page.locator('xpath=//*[@id="maincontent"]/div[1]/ul/li[5]/div/ul/li[31]/div[1]/span/span[2]/span').click();
});