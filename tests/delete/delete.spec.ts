import { test } from '../../src/core/customFixtures';
import { WaitActions } from '../../src/wrapper/waitActions';
import { Constants } from '../../src/utils/constants';


test.describe('Delete the Product', () => { 

test('Delete and Logout', async ({ loginPage, page, homePage, cartPage, placeOrder, deleteOrder }) => {

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
        await cartPage.cart();
        await placeOrder.order1(); 
        await deleteOrder.deletefiles();
})
});