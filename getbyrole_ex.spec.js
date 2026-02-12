import{test,expect} from '@playwright/test';
test('getByRole locator demo',async({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.getByRole("link",{name:"Forgot login info?"}).click()
})
test('getByText',async({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.getByText('Forgot login info?').click()
})
test('getByLabel locator demo',async({page}) => {
     await page.goto('https://login.salesforce.com/')
     await page.getByLabel('username').fill('Shiva')
})
test('get by place holder',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.getByPlaceholder('Search Amazon.in')
    .fill('playwright@microsoft.com')
});
test('getByAltText locator demo',async({page})=>{
    await page.goto('https://bookswagon.com')
    await page.getByPlaceholder('Search by Title,Author,Publisher or ISBN')
    await page.locator("xpath=//*[@name='btnTopSearch']").click();
    await page.getByAltText("Sacred Waters").click();
})
test('getByTitle locator demo',async({page})=>{
    await page.goto('https://parabank.parasoft.com/')
    await page.getByRole('link',alt="paraBank").click();
})