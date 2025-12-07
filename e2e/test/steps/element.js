import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../src/pages/HomePage.js";

const homePage = new HomePage();

Given('User can access homepage demo qa site', () => {
    homePage.accessUrlHomePageDemoQA();
    // homePage.verifyHomePageTitle();
});

When('User click Menu {string}', (Menu) => {
    homePage.clickMenu(Menu);
});

When('User click SubMenu {string}', (SubMenu) => {
    homePage.clickSubMenu(SubMenu);
});

Then('User will see Page {string}', (SubMenu) => {
    homePage.verifyPageTitle(SubMenu);
});