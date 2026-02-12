import { test, expect } from '@playwright/test';
test('listener',async({page})=>{
page.on('dialog',async dailog=> {
    console.log(`Alert message: ${dailog.message()}`);
    expect(dailog.message()).toContain('I am an alert box!');
    await dailog.accept();
});
await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")
await page.locator('//*[@id="alertexamples"]').click()
})