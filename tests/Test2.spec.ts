import {test} from '@playwright/test'

test("test2", async({page})=>{ // navigated to the website and clicked the 'Forms' and 'Form Layout' buttons by their text
await page.goto('http://localhost:4200/')
await page.getByText('Forms').click()
await page.getByText('Form Layouts').click()

})