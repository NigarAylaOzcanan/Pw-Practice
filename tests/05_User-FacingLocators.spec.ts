import {test} from '@playwright/test'
import { first } from 'rxjs-compat/operator/first'

test.beforeEach(async ({page}) =>{           
    await page.goto('http://localhost:4200/') 
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('User facing locators', async({page})=>{
    await page.getByRole('textbox', {name: "Email"}).first().click()
    await page.getByRole('button', {name:"Sign in"}).first().click()

    await page.getByLabel('Email').first().click()
})