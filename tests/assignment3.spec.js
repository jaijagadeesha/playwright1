import {test,expect} from  '@playwright/test';
test('Test to check the assignment', async ({ page }) => {
  await page.goto('https://blazedemo.com/');

  // Select 'fromPort'
  const fromCityOptions = page.locator("//select[@name='fromPort']/option");
  const fromCitiesCount = await fromCityOptions.count();
  console.log('Total From Cities: ' + fromCitiesCount);

  for (let i = 0; i < fromCitiesCount; i++) {
    const cityName = await fromCityOptions.nth(i).innerText();
    console.log(cityName);
    if (cityName.includes("Boston")) {
      await fromCityOptions.nth(i).click();




      
      break;
    }
  }
});
