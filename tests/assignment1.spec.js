import {test,expect}  from "@playwright/test"

test("Assignment 1 By Mukesh Sir -  Static Registration Test", async ({page})=>
{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
    await page.waitForTimeout(3000)
    await page.locator("//input[@type='radio' and @id='gender-male']").click()
     await page.locator("#FirstName").fill("Sample")
     await page.locator("#LastName").fill("Playwright")
      await page.locator("#Email").fill("abcdero1254@gmail.com")
     await page.locator("#Company").fill("OTS")

     await page.locator("//label[text()='Newsletter:']/..//following::input[@type='checkbox']").click()
     await page.locator("#Password").fill("Sample123")
     await page.locator("#ConfirmPassword").fill("Sample123")
     // await page.locator("#ConfirmPassword").fill("Sample123")
      await page.locator("#register-button").click()
    await page.waitForTimeout(2000)
    let resMessage="Your registration completed"
    //let displayedMessage = page.locator("//div[text()='Your registration completed']").to
     // Assertion for successful registration
   //await expect(page.locator(".result")).toHaveText("Your registration completed");
   //let displayedMessage = page.locator("//div[text()='Your registration completed']")
   
    displayedMessage.isVisible()
    await page.getByText("ico-logout").click()
     await page.getByText("ico-login").isVisible()

})

test("Assignment 1 By Mukesh Sir2 -  Static Registration Test", async ({page})=>
{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
    await page.waitForTimeout(3000)
    await page.locator("//input[@type='radio' and @id='gender-male']").click()
     await page.locator("#FirstName").fill("Sample")
     await page.locator("#LastName").fill("Playwright")
      await page.locator("#Email").fill("abcdero1254@gmail.com")
     await page.locator("#Company").fill("OTS")

     await page.locator("//label[text()='Newsletter:']/..//following::input[@type='checkbox']").click()
     await page.locator("#Password").fill("Sample123")
     await page.locator("#ConfirmPassword").fill("Sample123")
     // await page.locator("#ConfirmPassword").fill("Sample123")
      await page.locator("#register-button").click()
    await page.waitForTimeout(2000)
    let resMessage="Your registration completed"
    //let displayedMessage = page.locator("//div[text()='Your registration completed']").to
     // Assertion for successful registration
   //await expect(page.locator(".result")).toHaveText("Your registration completed");
   //let displayedMessage = page.locator("//div[text()='Your registration completed']")
   
    displayedMessage.isVisible()
    await page.getByText("ico-logout").click()
     await page.getByText("ico-login").isVisible()

})
