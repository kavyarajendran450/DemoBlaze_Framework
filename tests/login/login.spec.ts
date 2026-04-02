import { test } from '../../src/core/customFixtures';
import { WaitActions } from '../../src/wrapper/waitActions';
import { Constants } from '../../src/utils/constants';

 
test.describe('Login Validation Tests', () => { 
    test('Login with valid credentials and verify successful login', async ({ loginPage, page }) => {
        const waitActions = new WaitActions(page);
        await loginPage.navigateToLoginpage(); 
        await loginPage.logLink();
        await loginPage.enterusername(Constants.USERNAME);
        await loginPage.enterpassword(Constants.PASSWORD); 
        await loginPage.clickLogin();
        await loginPage.gettext();
        await waitActions.waitForTimeout(2000);
        
    });
});