import {Page, Locator} from "@playwright/test";
import { BasePage } from "../core/basePage";
import { UIActions } from "../actions/uiActions";


export class HomePage extends BasePage {

    private categories: Locator; 
    private Laptops: Locator;
    private Next: Locator; 
    private Macbookair: Locator; 
    private uiActions: UIActions; 


    constructor(page: Page) {
        super(page); 
        this.page = page; 
        this.uiActions = new UIActions(page);
        this.categories = page.locator("//a[@id= 'cat']")
        this.Laptops = page.locator("//a[text() = 'Laptops']"); 
        this.Next = page.locator("//button[@id = 'next2']"); 
        this.Macbookair = page.locator("//a[text() = 'MacBook air']"); 
    }


    async category() {
       return await this.categories.textContent();
    }

    async laptopclick() {
        await this.uiActions.click(this.Laptops);  
    }

    async nxtbtn() {
        await this.uiActions.click(this.Next);

    }

    async macbk() {
        return await this.Macbookair.textContent();
        
    }

   


}