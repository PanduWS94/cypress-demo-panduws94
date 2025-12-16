import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../src/pages/Home.Page.js';
import CommonPage from '../../src/pages/Common.Page.js';

const home = new HomePage();
const common = new CommonPage();


Given('User can access homepage demo qa site', () => {
    home.accessUrlHomePageDemoQA();
});

When('User click Menu {string}', (Menu) => {
    home.clickMenu(Menu);
});

When('User click SubMenu {string}', (SubMenu) => {
    home.clickSubMenu(SubMenu);
});

Then('User will see Page {string}', (SubMenu) => {
    home.verifyPageTitle(SubMenu);
});

When('User click Submit button', () => {
    common.clickSubmitButton();
});