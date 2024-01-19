const puppeteer = require('puppeteer-web');
async function performWebSearch(cedulaNumber) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://servicioselectorales.tse.go.cr/chc/consulta_cedula.aspx');
    
}