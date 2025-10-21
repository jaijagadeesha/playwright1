import {test,expect} from "@playwright/test"
import { log } from "console"

test("alert Check",async ({page})=>
{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:"load"})
    //await page.waitForTimeout(20000);

    await page.getByPlaceholder("Username").fill("Admin",{timeout:200})
    await page.getByPlaceholder("Password").fill("admin123",{timeout:200})

    await page.locator("//button[@type='submit']").click()

    await page.locator("//span[text()='Admin']").click()

    await page.locator("//input[contains(@placeholder,'Type for hints')]").pressSequentially("A",{delay:2000})
    const eNames = await page.waitForSelector("//div[@role='listbox']//div[@class='oxd-autocomplete-option']/span")
    console.log(eNames.textContent);

    for (let name of eNames)
    {
        console.log(name.textContent);
        
    }

    //Checking the status
    await page.locator("//div[@class='oxd-grid-item oxd-grid-item--gutters'][4]").click()
    let statuschecks=await page.waitForSelector("//div[@role='option' and @class='oxd-select-option']/span")
    for (let name of statuschecks)
    {
        console.log(name.textContent);
        
    }
    



})