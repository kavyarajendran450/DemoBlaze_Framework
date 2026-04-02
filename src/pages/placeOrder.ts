import{Page, Locator} from "@playwright/test";
import { BasePage } from "../core/basePage";
import { UIActions } from "../actions/uiActions";


export class PlaceOrder extends BasePage {
    private cart: Locator; 
    private placeord: Locator; 
    private name: Locator;
    private country: Locator; 
    private city: Locator;
    private creditcard: Locator; 
    private month: Locator;
    private year: Locator;
    private purchase: Locator;
    private uiActions: UIActions; 
    private cnfpage: Locator; 
    private details: Locator;
    private ok: Locator;

    constructor(page:Page){
        super(page);
        this.page = page; 
        this.cart = page.locator("//a[@id = 'cartur']");
        this.placeord = page.locator("//button[text() = 'Place Order']");
        this.name = page.locator("//input[@id= 'name']");
        this.country = page.locator("//input[@id= 'country']")
        this.city = page.locator("//input[@id= 'city']");
        this.creditcard = page.locator("//input[@id= 'card']");
        this.month = page.locator("//input[@id= 'month']");
        this.year = page.locator("//input[@id= 'year']");
        this.purchase = page.locator("//button[text() = 'Purchase']");
        this.uiActions = new UIActions(page);
        this.cnfpage = page.locator("//h2[text() = 'Thank you for your purchase!']");
        this.details = page.locator("//p[@class = 'lead text-muted ']");
        this.ok = page.locator("//button[text() = 'OK']");
    }

    async order1() {
        await this.uiActions.click(this.cart);
    }
    async order2(){
        await this.uiActions.click(this.placeord); 
    }

    async orderdetails(nam: string, cou: string, cit: string, cc: string, mnth: string) {
        await this.uiActions.fill(this.name, nam);
        await this.uiActions.fill(this.country, cou);
        await this.uiActions.fill(this.city, cit);
        await this.uiActions.fill(this.creditcard, cc);
        await this.uiActions.fill(this.month, mnth);
    }

    async orderclick(yr: string) {
        await this.uiActions.fill(this.year, yr);
        await this.uiActions.click(this.purchase);
    }

    async finalpage() {
        return await this.cnfpage.textContent(); 
    }

    async printtexts() {
        return await this.details.allTextContents();
        
    }
    async acceptok() {
        await this.uiActions.click(this.ok);
    }

}