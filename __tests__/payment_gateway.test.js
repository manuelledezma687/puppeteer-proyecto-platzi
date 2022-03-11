const puppeteer = require('puppeteer')

describe('Payment Gateway',() => {
    
it('test payment gateway',async() => {
    const browser = await puppeteer.launch({
    headless: false,
    slowMo:0,
    product:'firefox',
    devtools: false,
    //defaultViewport: {
    //    width: 2100,
    //    height:1080,},
    defaultViewport: null,
    args:['--window-size=1920,1080']
    })

    const page = await browser.newPage()
    await page.goto("https://blazedemo.com/")
    await page.select('body > div.container > form > select:nth-child(1)', 'Boston')
    await page.select('body > div.container > form > select:nth-child(4)', 'Rome')
    await page.click('body > div.container > form > div > input')
    await page.click('body > div.container > table > tbody > tr:nth-child(1) > td:nth-child(2) > input')
    await page.type('#inputName','Mike')
    await page.type('#address','Arizona')
    await page.type('#city','Arizona')
    await page.type('#state','Arizona')
    await page.type('#zipCode','85006')
    await page.select('#cardType', 'Visa')
    await page.type('#creditCardNumber', '4940255539047410')
    await page.type('#creditCardMonth', '11')
    await page.type('#creditCardYear', '2026')
    await page.type('#nameOnCard', 'Mike Myers')
    await page.click('body > div.container > form > div:nth-child(12) > div > input')
    await page.waitForSelector('body > div.container > div > h1')
    await page.close()
},15000)

})