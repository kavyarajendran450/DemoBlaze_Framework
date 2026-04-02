import { test as base,BrowserContext,Page} from '@playwright/test';
import { BrowserFactory } from './browserFactory';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';
import {PlaceOrder} from '../pages/placeOrder';
import { DeletePage } from '../pages/deletePage';


 interface CustomFixtures {
  context: BrowserContext;
  page: Page;
  loginPage: LoginPage; 
  homePage: HomePage;
  cartPage: CartPage; 
  placeOrder: PlaceOrder;
  deleteOrder: DeletePage;
}; 

  export const test = base.extend<CustomFixtures>({
  context: async ({}, use) => {
    const context = await BrowserFactory.createContext(await BrowserFactory.createBrowser());
    await use(context);
    await context.close();
   },
  page: async ({ context }, use) => {

    const page = await BrowserFactory.createPage(context);
    await use(page);
    await page.close();
  },
 
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));  
  },

  cartPage: async({page}, use) =>{
    await use(new CartPage(page));
  },

  placeOrder: async({page}, use) =>{
    await use(new PlaceOrder(page));
  }, 

  deleteOrder: async({page}, use)=> {
    await use(new DeletePage(page));
  }

});