import {test,expect} from '@playwright/test'

test("Checking the wait for selector",async ({page})=>
{
    await page.goto("https://naukri.com")
    await page.waitForSelector("//a[@href]")
     let allweblinks=await page.locator("//a[@href]")
     console.log("TOtal Hyper links "+allweblinks.count());

     for (let c=0;c<allweblinks.count();c++)
     {
        let linkValue=await page.locator("//a[@href]").nth(c).innerText()
        console.log("Link Text name"+ linkValue);
        
     }
     



});