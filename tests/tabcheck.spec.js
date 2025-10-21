import {test,expect}    from    '@playwright/test'

test("Checking the tabe",  async ({ browser })=>
{
   let context= await browser.newContext();
   context.pages();
   let page=await context.newPage();
   await page.goto("https://freelance-learn-automation.vercel.app/login")
   let [facebookPage] = await Promise.all([
        context.waitForEvent("page"),
        await page.locator("(//a[contains(@href,'facebook')])[1]").click()
   ]
   )
   //facebookPage.getByText("Create new account").click();

   let [secondaryPage] = await Promise.all([
        context.waitForEvent("page"),
        await facebookPage.getByText("Create new account").click()
   ]
   )


    secondaryPage.url().includes("reg")
   await secondaryPage.locator("//input[@name='firstname']").pressSequentially("Jai",{delay:200})

   await secondaryPage.locator("//input[@name='lastname']").pressSequentially("jagadeesha",{delay:200})


   

});

