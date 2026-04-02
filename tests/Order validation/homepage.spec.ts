import { test } from '../../src/core/customFixtures';
import { WaitActions } from '../../src/wrapper/waitActions';
import { Constants } from '../../src/utils/constants';

 
test.describe('Homepage Validation Tests', () => { 
    
    test('After login, homepage launch successfully', async ({ loginPage, page, homePage }) => {
        const waitActions = new WaitActions(page);
        await loginPage.navigateToLoginpage(); 
        await loginPage.logLink();
        await loginPage.enterusername(Constants.USERNAME);
        await loginPage.enterpassword(Constants.PASSWORD); 
        await loginPage.clickLogin();
        await waitActions.waitForTimeout(2000);
        await homePage.category();
        await homePage.laptopclick();
        await homePage.nxtbtn();
        await homePage.macbk(); 
        
    });



    test('Add products to the cart', async ({ loginPage, page, homePage, cartPage }) => {
        const waitActions = new WaitActions(page);
        await loginPage.navigateToLoginpage(); 
        await loginPage.logLink();
        await loginPage.enterusername(Constants.USERNAME);
        await loginPage.enterpassword(Constants.PASSWORD); 
        await loginPage.clickLogin();
        await waitActions.waitForTimeout(2000);
        await homePage.category();
        await homePage.laptopclick();
        await homePage.nxtbtn();
        await homePage.macbk(); 
        await cartPage.macbookclick(); 
        await cartPage.productdetails();
        await cartPage.productpri(); 
        await cartPage.cart();

      
    });
});