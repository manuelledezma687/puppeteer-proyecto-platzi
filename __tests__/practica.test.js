const puppeteer = require('puppeteer')

describe('practica #1',() =>{

    it('test', async() => {
    const browser = await puppeteer.launch({
        headless:true,
        product: 'firefox',
        defaultViewport: null  
    })
    const page = await browser.newPage()
    await page.goto('https://www.google.com/')
    await page.close()

},5000)


})