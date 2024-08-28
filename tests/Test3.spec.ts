import {test} from '@playwright/test'


test.beforeEach(async ({page}) =>{            // to avoid duplication of code and repetitive situations, we've used the 'beforeEach' hook.
    await page.goto('http://localhost:4200/') // the main 'beforeEach' hook will be executed before every single test
})

test.describe('suite1',()=>{                  //   'beforeEach' hooks inside the 'test.describe' methods will be work only for that particular 'describe' method or the test suite.
    test.beforeEach(async ({page}) =>{            
        await page.getByText('Charts').click()
    })
    
    test("navigate to form layouts", async({page})=>{
        await page.getByText('Form Layouts').click()
    })
    
    test('navitage to datepicker page',async ({page}) => { 
     await page.getByText('Datepicker').click() 
    })
})

test.describe.skip('suite2',()=>{             // 'test.describe' methods can also be specified with the 'Skip' and 'Only' options.
    test.beforeEach(async ({page}) =>{            
        await page.getByText('Forms').click()
    })
    
    test("navigate to form layouts1", async({page})=>{
        await page.getByText('Form Layouts').click()
    })
    
    test('navitage to datepicker page1',async ({page}) => {
     await page.getByText('Datepicker').click()
    })
})
