import{test} from '@playwright/test'  // İmport the test method from the playwright library

test('the first test', () => {  // a basic test body with 2 parameters (test name and actual method)


})

test.describe ('test suite 1', () => { // tests can be grouped by test.describe method

  test('the first test', () => {

  })

  test('the second test', () => {

  })

  test('the third test', () => {

  })

})

// ************************************* 



test('test1',async ({page}) =>{ // page represents as the blank page of the browser. Its one of the fixtures of the playwright.  
                          // in order to run the test, we need to open a new page of the browser and then we can do this page whatever we want.
 await page.goto('')

})