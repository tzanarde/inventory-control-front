import { $, ElementFinder, browser } from 'protractor';

export class LoginPage {
    name: ElementFinder;
    senha: ElementFinder;
    buttonEnter: ElementFinder;
    bemVindo: ElementFinder;
    buttonUser: ElementFinder;
    buttonLogout: ElementFinder;

    constructor() {
        this.name = $('[formcontrolname="name"] input');
        this.senha = $('[formcontrolname="password"] input');
        this.buttonEnter = $('button.mat-primary');
        this.buttonUser = $('.mat-toolbar .mat-icon-button');
        this.buttonLogout = $('.menu-card .mat-button');
    }

    navigateTo() {
        return browser.get('/');
    }
}
