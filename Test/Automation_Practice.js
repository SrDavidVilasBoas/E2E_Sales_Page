import { Builder, By } from "selenium-webdriver"

describe("Buying a t-shirt", function () {

    it("Buying a white 'S' t-shirt", async function () {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account");
        // Login
        await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[1]/input")).sendKeys("afrodewan@gmail.com");
        await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/div[2]/input")).sendKeys("Davidtechfixe");
        await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/p[2]/button/span")).click();
        // Assertion
        let currentURL = await driver.getCurrentUrl();
        if (currentURL.includes("http://www.automationpractice.pl/index.php?controller=my-account")) {
            console.log("✔ The URL is as expected")
            // Find t-shirt
            // Click on the "WOAMAN" button
            await driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[1]/a")).click();
            // Wait
            await driver.sleep(1000);
            // Select "S"
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div[1]/div[2]/div[1]/form/div/div[2]/ul/li[1]/div/span/input")).click();
            // Wait
            await driver.sleep(2000);
            // Select "White"
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div[1]/div[2]/div[1]/form/div/div[4]/ul/li[2]/input")).click();
            // Click on the image of the t-shirt
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[1]/div/a[1]/img")).click();
            // Wait
            await driver.sleep(1500);
            // Select white t-shirt model
            await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[4]/form/div/div[2]/div/fieldset[2]/div/ul/li[1]/a")).click();
            // Assertion
            let inStock = await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[3]/p[4]/span")).getText();
            if (inStock.includes("In stock")) {
                console.log("✔ The white model of the t-shirt is avalible in stock")
                await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div/div[4]/form/div/div[3]/div[1]/p/button/span")).click();
                // Wait
                await driver.sleep(1500);
                await driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/div[4]/a/span")).click();
                // Wait
                await driver.sleep(1500);
                await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/p[2]/a[1]/span")).click();
                // Wait
                await driver.sleep(2000);
                await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/form/p/button/span")).click();
                // Wait
                await driver.sleep(1000);
                // Agreement checkbox
                await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/form/div/p[2]/div/span/input")).click();
                // Continue button
                await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/form/p/button/span")).click();
                // Wait
                await driver.sleep(1000);
                // Continue button
                await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div/div[3]/div[1]/div/p/a")).click();
                // Wait
                await driver.sleep(1000);
                // Continue button
                await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/form/p/button/span")).click();
                // Wait
                await driver.sleep(1000);
                // Assertion
                let confirmationMessageText = await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/p[1]")).getText();
                if (confirmationMessageText.includes("Your order on My Shop is complete.")) {
                    console.log("✔ The message is displayed")
                } else {
                    console.log("Unfortunetely the message isn't displayed")
                }
                // Wait
                await driver.sleep(1000);
                // Quit
                await driver.quit();
            } else {
                console.log("Unfortunetely the URL isn't the expected")
                await driver.quit();
            }
        } else {
            console.log("Unfortunetely the white model of the t-shirt isn't avalible in stock")
        }
    })
})