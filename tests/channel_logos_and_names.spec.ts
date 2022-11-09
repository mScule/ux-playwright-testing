import { test, expect } from '@playwright/test';

test('Test clicking on channel logos and names', async ({ page, browserName }) => {
    await page.goto('https://areena.yle.fi/tv/opas');
   
    if (browserName === "firefox" || browserName === "webkit")
        await page.getByRole('button', { name: 'Vain välttämättömät' }).click();

    await page.getByRole('heading', { name: 'Yle TV1' }).getByRole('link', { name: 'Yle TV1' }).click();
    await expect(page).toHaveURL('https://areena.yle.fi/tv/ohjelmat/yle-tv1');
    await page.locator('header:has-text("Suositellut SuositellutUusimmatSuosituimmat")').getByRole('img').click();

    await page.goto('https://areena.yle.fi/tv/opas');
    await page.getByRole('heading', { name: 'Yle TV2' }).getByRole('link', { name: 'Yle TV2' }).click();
    await expect(page).toHaveURL('https://areena.yle.fi/tv/ohjelmat/yle-tv2');
    await page.locator('header:has-text("Suositellut SuositellutUusimmatSuosituimmat")').getByRole('img').click();

    await page.goto('https://areena.yle.fi/tv/opas');
    await page.getByRole('heading', { name: 'Yle Teema Fem' }).locator('div').click();
    await page.getByRole('heading', { name: 'Yle Teema Fem Yle Teema Yle Fem' }).getByRole('link', { name: 'Yle Teema' }).click();
    await expect(page).toHaveURL('https://areena.yle.fi/tv/ohjelmat/yle-teema');
    await page.locator('header:has-text("Suositellut SuositellutUusimmatSuosituimmat")').getByRole('img').click();

    await page.goto('https://areena.yle.fi/tv/opas');
    await page.getByRole('heading', { name: 'Yle Teema Fem' }).locator('div').click();
    await page.getByRole('heading', { name: 'Yle Teema Fem Yle Teema Yle Fem' }).getByRole('link', { name: 'Yle Fem' }).click();
    await expect(page).toHaveURL('https://areena.yle.fi/tv/ohjelmat/yle-fem');
    await page.locator('header:has-text("Suositellut SuositellutUusimmatSuosituimmatYhteystiedot")').getByRole('img').click();

    await page.goto('https://areena.yle.fi/tv/opas');
    await page.getByRole('heading', { name: 'Yle Areena' }).locator('div').click();
    await page.getByRole('heading', { name: 'Yle Areena' }).locator('div').click();
    await page.getByRole('heading', { name: 'MTV3' }).locator('div').click();
    await page.getByRole('heading', { name: 'Nelonen' }).locator('div').click();
    await page.getByRole('heading', { name: 'Sub' }).locator('div').click();
    await page.getByRole('heading', { name: 'TV5' }).locator('div').click();
    await page.getByRole('heading', { name: 'Liv' }).locator('div').click();
    await page.getByRole('heading', { name: 'JIM' }).locator('div').click();
    await page.getByRole('heading', { name: 'Kutonen' }).locator('div').click();
    await page.getByRole('heading', { name: 'TLC' }).locator('div').click();
    await page.getByRole('heading', { name: 'Fox' }).locator('div').click();
    await page.getByRole('heading', { name: 'Ava' }).locator('div').click();
    await page.getByRole('heading', { name: 'Hero' }).locator('div').click();
    await page.getByRole('heading', { name: 'AlfaTV' }).locator('div').click();
    await page.getByRole('heading', { name: 'Frii' }).locator('div').click();
    await page.getByRole('heading', { name: 'National Geographic' }).locator('div').click();
    await page.getByRole('heading', { name: 'TV Finland' }).locator('div').click();
});
