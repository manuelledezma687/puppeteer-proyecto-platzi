const puppeteer = require('puppeteer')

describe('llenar un formulario',() => {

    it('test llenado de formulario', async() => {
        const browser = await puppeteer.launch({
            headless: false, 
            defaultViewport: null,
            product:'firefox'
        })

        const page = await browser.newPage()
        await page.goto("https://staging.mojomarketplace.com/", {waitUntil: 'networkidle0'})

    await page.click('/html/body/div[1]/div/header/div[1]/div/div[2]/div[2]/nav/span[2]/div/span/a[1]')
    await page.type('#mm-login-form__modal--username-input','test_shopping@qa.team')
    await page.type('#mm-login-form__modal--password-input','travian88')
    await page.click('body > div:nth-child(15) > div > div.theme__dialog___1f3Zg.styles-module__dialog___2XUgZ.theme__normal___1WehK.theme__active___3rz6t.mm-dialog.mm-user-dialog > section > div > form > div > button')
    await page.waitForXPath('//*[@id="root"]/div/div/div[1]/ul[1]/li/a', {visible :true})


},35000)

//para validar si esta visible o no hidden o visible como true o false
// variable button (const)
})
