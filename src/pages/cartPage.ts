import {Page, Locator} from "@playwright/test";
import { BasePage } from "../core/basePage";
import { UIActions } from "../actions/uiActions";
import { HomePage } from "./homePage";

export class CartPage extends BasePage {

    private macbookclik: Locator; 
    private producttitle: Locator;
    private productprice: Locator;
    private addtocart: Locator; 
    private uiActions: UIActions; 


    constructor(page: Page) {
        super(page); 
        this.page = page; 
        this.uiActions = new UIActions(page);

    this.macbookclik = page.locator("//a[text() = 'MacBook air']"); 
    this.producttitle = page.locator("//h2[text() = 'MacBook air']");
    this.productprice = page.locator("//h3[@class = 'price-container']");
    this.addtocart = page.locator("//a[text() = 'Add to cart']");
   } 

   

    async macbookclick(){
        await this.uiActions.click(this.macbookclik);
    } 

    async productdetails() {
        return await this.producttitle.textContent(); 
    
    }
    async productpri() {
        return await this.productprice.textContent(); 
    
    }

    async cart() {
       await this.uiActions.click(this.addtocart);
       this.page.once("dialog", dialog => dialog.accept());
    }

}