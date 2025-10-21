import {test,expect} from  '@playwright/test';
 import { faker } from '@faker-js/faker';

test('Dynamic Id Creation', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
//     await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
    await page.waitForTimeout(3000)
    await page.locator("//input[@type='radio' and @id='gender-male']").click()
     await page.locator("#FirstName").fill(faker.name.firstName())
     await page.locator("#LastName").fill(faker.name.lastName())
      await page.locator("#Email").fill(faker.internet.email())
     await page.locator("#Company").fill(faker.company.name())

     await page.locator("//label[text()='Newsletter:']/..//following::input[@type='checkbox']").click()
     const password =  faker.internet.password()
     await page.locator("#Password").fill(password)
     await page.locator("#ConfirmPassword").fill(password)
     // await page.locator("#ConfirmPassword").fill("Sample123")
    await page.locator("#register-button").click()
    await page.waitForTimeout(2000)
    let resMessage="Your registration completed"
    let displayedMessage = page.locator("//div[text()='Your registration completed']")
     // Assertion for successful registration
   //await expect(page.locator(".result")).toHaveText("Your registration completed");
   //let displayedMessage = page.locator("//div[text()='Your registration completed']")
   await expect(page.locator("//div[text()='Your registration completed']")).toHaveText(resMessage)
   // displayedMessage.isVisible()
    await page.locator("//*[text()='Log out']").click()
    await page.locator("//*[text()='Log in']").isVisible()
        
        
    }  
    )


test('Dynamic Id Creation1', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
//     await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
    await page.waitForTimeout(3000)
    await page.locator("//input[@type='radio' and @id='gender-male']").click()
     await page.locator("#FirstName").fill(faker.name.firstName())
     await page.locator("#LastName").fill(faker.name.lastName())
      await page.locator("#Email").fill(faker.internet.email())
     await page.locator("#Company").fill(faker.company.name())

     await page.locator("//label[text()='Newsletter:']/..//following::input[@type='checkbox']").click()
     const password =  faker.internet.password()
     await page.locator("#Password").fill(password)
     await page.locator("#ConfirmPassword").fill(password)
     // await page.locator("#ConfirmPassword").fill("Sample123")
    await page.locator("#register-button").click()
    await page.waitForTimeout(2000)
    let resMessage="Your registration completed"
    let displayedMessage = page.locator("//div[text()='Your registration completed']")
     // Assertion for successful registration
   //await expect(page.locator(".result")).toHaveText("Your registration completed");
   //let displayedMessage = page.locator("//div[text()='Your registration completed']")
   await expect(page.locator("//div[text()='Your registration completed']")).toHaveText(resMessage)
   // displayedMessage.isVisible()
    await page.locator("//*[text()='Log out']").click()
    await page.locator("//*[text()='Log in']").isVisible()
        
        
    }  
    )
