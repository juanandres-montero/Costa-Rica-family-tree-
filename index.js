const puppeteer = require('puppeteer-web');

function main() {
    automateSearch();
}

async function automateSearch() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    //await page.goto('https://servicioselectorales.tse.go.cr/chc/consulta_cedula.aspx');

    // Find the input box and enter the cedula number
    //await page.type('#txtcedula', '123456789');

    // Click on the search button
    //await page.click('#btnConsultaCedula');

    // Wait for the results to load
    //await page.waitForSelector('#lblNombre');

    // Get the results element and do something with it
    //const resultsText = await page.$eval('#lblNombre', el => el.innerText);
    //console.log(resultsText);

    await browser.close();
}

main()