import {test,expect} from '@playwright/test'

test("Checking the wait for selector",async ({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    let locaname="//div[@class='interest-div']//input[@type='checkbox']";
    let allelements=page.locator(locaname)
    let totalCheckbox = await page.locator(locaname).count();
    console.log(totalCheckbox);
    console.log(("*********************"));
    

   await page.waitForSelector(locaname)
   let totalCheckbox1 = await page.locator(locaname).count();
    console.log( totalCheckbox1);


    for (let c=0;c<totalCheckbox1;c++)
    {

        await allelements.nth(c).click()
        await allelements.nth(c).isChecked()
        
    }
    
    
});