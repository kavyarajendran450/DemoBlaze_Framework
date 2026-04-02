import { test } from '../../src/core/customFixtures';
import { WaitActions } from '../../src/wrapper/waitActions';
import { Constants } from '../../src/utils/constants';
import { FakerDataUtil } from '../../src/utils/fakerDataUtil';


test.describe('Order validation', () => { 

test('Order Page', async ({ loginPage, page, homePage, cartPage, placeOrder }) => {
const waitActions = new WaitActions(page);
        await loginPage.navigateToLoginpage(); 
        await loginPage.logLink();
        await loginPage.enterusername(Constants.USERNAME);
        await loginPage.enterpassword(Constants.PASSWORD); 
        await loginPage.clickLogin();
        await waitActions.waitForTimeout(3000);
        await homePage.category();
        await homePage.laptopclick();
        await homePage.nxtbtn();
        await homePage.macbk(); 
        await cartPage.macbookclick(); 
        await cartPage.cart();
        let nam = FakerDataUtil.generatename();
        let cou = FakerDataUtil.generatecountry();
        let cit = FakerDataUtil.generatecity();
        let cc =  FakerDataUtil.generatecreditcard();
        let mnth = FakerDataUtil.generatemonth();
        await placeOrder.order1(); 
        await placeOrder.order2();
        await placeOrder.orderdetails(nam,cou,cit,cc,mnth);
        await placeOrder.orderclick("2025");
        await placeOrder.finalpage();
        await placeOrder.printtexts();
        await placeOrder.acceptok();
});


});