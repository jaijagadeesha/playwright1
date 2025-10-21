import {test,expect} from "@playwright/test"
import { log } from "console"

test("alert Check",async ({page})=>
{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:"load"})
    await page.url().includes("orange")
   



})