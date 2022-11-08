import { test, expect } from '@playwright/test';
test('Test case for finding name and date of Kummeli, Season 3, Episode 5 ', async ({ page, browserName }) => {
  
  await page.goto('https://areena.yle.fi/1-3339547');

  if (browserName === "firefox" || browserName === "webkit")
  	await page.getByRole('button', { name: 'Vain välttämättömät' }).click();
  
  //Buttons for navigating to episode 5 of season 3
  const seasonButton = page.locator('xpath=//*[@id="panel:R57h6:0"]/div/section[1]/div/div/div/div[1]/div/div/div/div[2]/ol/li[3]/button');
  const episodeButton = page.locator('xpath=//*[@id="httpsareena.api.yle.fiv1uicontentlisttokeneyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb3VyY2UiOiJodHRwczovL3Byb2dyYW1zLmFwaS55bGUuZmkvdjMvc2NoZW1hL3YxL3Nlcmllcy8xLTMzMzk1NDcvc2Vhc29ucy8lN0JzZWFzb24lN0QvZXBpc29kZXM_YXZhaWxhYmlsaXR5PWN1cnJlbnQmb3JkZXI9bmF0dXJhbDphc2MmcHJvZ3JhbV90eXBlPXByb2dyYW0iLCJjYXJkT3B0aW9uc1RlbXBsYXRlIjoiZXBpc29kZXMiLCJjYXJkUG9pbnRlciI6ImRlZmF1bHQiLCJjYXJkQ29udHJvbHMiOiJkZWZhdWx0IiwiY2FyZENhcmRzIjoiZGVmYXVsdCIsImNhcmRMYWJlbHMiOiJkZWZhdWx0R2VuZXJpY3MiLCJhbmFseXRpY3MiOnsiY29udGV4dCI6eyJjb21zY29yZSI6eyJ5bGVfcmVmZXJlciI6InR2LnNlcmllc19kZXRhaWxzLjEtMzMzOTU0Ny5rdW1tZWxpLmpha3NvdC5lcGlzb2RlcyJ9fSwicGxheWVyX2NvbnRleHQiOnsieWxlIjp7InB0eXBlIjoiZXBzIn19fX0.sxAvdg8lRusD3HvvpSzy0jb1yB1wHszLzSxLafXJpX0path.season1-1390languagefiv10clientyle-areena-web-2-0-Jakso5Kummeli-yleareenaitems1-1796319-Kausi3.56.LegendaaristaKummelipelleilyvuodelta1993.Puukonveljestenperunanistutustalkoot.Erotixpureutuurohkeastiaikuisviihteeseen.PotilasSaarisensilmiaristaa.MikkoKuustosenharvinainenvideo.title"]');

	//Clicking buttons
	await seasonButton.click();
	await episodeButton.click();
	
	//Expecting to be in the correct URL after clicking buttons
	await expect(page).toHaveURL('https://areena.yle.fi/1-1796319');
	
	//Locating episode title and date
	const episodeTitle = page.locator('xpath=//*[@id="maincontent"]/div[1]/section/div/div[2]/div/h1');
	const date = page.locator('xpath=//*[@id="maincontent"]/div[1]/section/div/div[2]/div/div[4]/span[1]/time');
	
	//Expecting episode title and date to be correct
	await expect(episodeTitle).toHaveText('K3, J5: Kummeli');
	await expect(date).toContainText('ti 10.1.2006');
});