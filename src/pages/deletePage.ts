import {Page, Locator} from "@playwright/test";
import { BasePage } from "../core/basePage";
import { UIActions } from "../actions/uiActions";

export class DeletePage extends BasePage {

    private cartt: Locator;
    private delete: Locator; 
    private logout: Locator; 
    private uiActions: UIActions;
    
    constructor(page:Page) {
        super(page);
        this.page= page; 
        this.uiActions = new UIActions(page);
        this.cartt = page.locator("//a[text() = 'Cart']");
        this.delete = page.locator("//a[text() = 'Delete']");
        this.logout = page.locator("//a[@id= 'logout2']");
    }

    async deletefiles() {
        await this.uiActions.click(this.cartt);
        await this.uiActions.click(this.delete);
        await this.uiActions.click(this.logout);
    }

}