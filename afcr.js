const { Builder, By, Key, until } = require('selenium-webdriver');

async function performWebSearch(cedulaNumber) {
    // Set up the Selenium WebDriver
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the website
        await driver.get('https://servicioselectorales.tse.go.cr/chc/consulta_cedula.aspx');

        // Find the input box and enter the cedula number
        const inputBox = await driver.findElement(By.xpath('//*[@id="txtcedula"]'));
        await inputBox.sendKeys(cedulaNumber, Key.RETURN);

        // Wait for the results to load
        await driver.wait(until.elementLocated(By.xpath('//*[@id="btnConsultaCedula"]')), 5000);

        // Click on the search button
        const searchButton = await driver.findElement(By.xpath('//*[@id="btnConsultaCedula"]'));
        await searchButton.click();

        // Wait for the results to load
        await driver.wait(until.elementLocated(By.xpath('/* XPath expression for the results element */')), 5000);

        // Get the results element and do something with it
        const resultsElement = await driver.findElement(By.xpath('/* XPath expression for the results element */'));
        const resultsText = await resultsElement.getText();
        console.log(resultsText);
    } finally {
        // Quit the WebDriver
        await driver.quit();
    }
}

// Prompt the user for the cedula number and perform the web search
const cedulaNumber = prompt('Enter the cedula number:');
performWebSearch(cedulaNumber);
