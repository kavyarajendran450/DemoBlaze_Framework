import {Page, Locator} from "@playwright/test";
import { BasePage } from "../core/basePage";
import { UIActions } from "../actions/uiActions";
import { Constants } from "../utils/constants";

export class LoginPage extends BasePage {

    private loginlink: Locator; 
    private username: Locator; 
    private password: Locator; 
    private Loginbtn: Locator;
    private Loggedinname: Locator; 
    private uiActions: UIActions;

    constructor(page:Page) {
        super(page); 
        this.page = page; 
        this.uiActions = new UIActions(page);
        this.loginlink = page.locator("//a[@id = 'login2']"); 
        this.username = page.locator("//input[@id = 'loginusername']");
        this.password = page.locator("//input[@id = 'loginpassword']");
        this.Loginbtn = page.locator("//button[text() = 'Log in']");
        this.Loggedinname = page.locator("//a[@id = 'nameofuser']");
    }


    async navigateToLoginpage() {
        await this.uiActions.navigateTo(Constants.BASE_URL);
    }

    async logLink() {
        await this.uiActions.click(this.loginlink);  
    }

    async enterusername(username: string) {
        await this.uiActions.fill(this.username, username); 
    }
    
    async enterpassword(password: string) {
        await this.uiActions.fill(this.password, password); 
    } 

     async clickLogin() {
     await this.uiActions.click(this.Loginbtn);
    } 
    
    async gettext() {
        return await this.Loggedinname.textContent();
    } 

}