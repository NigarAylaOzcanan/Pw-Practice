import {test} from '@playwright/test'

test.beforeEach(async ({page}) =>{           
    await page.goto('http://localhost:4200/') 
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})
test('locator syntax rules', async({page}) =>{

 // by Tag name : finds the elements by tag name
 await page.locator('input').first().click() // *in this case the locator returned 20 more elements so we put 'first()' method to get the first element. 
                                       
 // by ID : finds the elements by ID.
 // We have to put a hash(#) sign before the attribute's value.
 // If the ID is not unique, you should use a CSS selector instead.
 await page.locator('#inputEmail1').click()          
 
 // by class : finds the elements by class. In order to specify that this is a class we put a dot infront of the value
 page.locator('.shape-rectangle')

 // by attribute : finds the elements by attribute. In this case, we are looking for placeholder="Email" attribute inside of the DOM.
 //(use with square brackets)
 page.locator('[placeholder="Email"]')

 // by class (full) : finds the elements with full class value. (use with square brackets)
 page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

 // Combine different selectors..in this case we combined the tag name and the attribute value. 
 // It's important to not put a space between the tag name and the attribute. They should be like all together.  
 page.locator('input[placeholder="Email"]')                                       


 // More locators can be added to the combined selectors.
 page.locator('input[placeholder="Email"][nbinput]') 

 // by XPath (NOT RECOMMENDED)
 page.locator('//*[@id="inputEmail1"]') 

 // by partial text match
 page.locator(':text("Using")')

 // by exact text match
 page.locator(':text-is("Using the Grid")')

})
