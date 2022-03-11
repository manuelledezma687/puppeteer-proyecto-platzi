const puppeteer = require('puppeteer')

describe('segundo test',() => {

    it('abrir y cerrar navegador', async() => {
        const browser = await puppeteer.launch({
            headless: true, 
            defaultViewport: null,   
            product:'firefox' 
        })

        const page = await browser.newPage()
        await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

        page.on('dialog', async(dialog) => {
                await dialog.accept()
        })
    //Click derecho
    await page.click('#authentication > span', { button: 'right', delay: 500})
    await page.waitForTimeout(3000)


    await page.click('#authentication > button', {clickCount:2, delay:500} )
    await browser.close()

},350000)


})
