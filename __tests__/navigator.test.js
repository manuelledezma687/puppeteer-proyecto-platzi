const puppeteer = require('puppeteer')

describe('mi primer test',() => {
    
it('abrir y cerrar navegador',async() => {
    const browser = await puppeteer.launch({
    headless: true,   
    product:'firefox'     
    })

    const page = await browser.newPage()
    await page.goto("https://www.google.com")
    await page.waitForTimeout(200)
    await browser.close()
},35000)

})