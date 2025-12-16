class HomePage {

    accessUrlHomePageDemoQA() {
        cy.visit('https://demoqa.com/');
    }

    get titleHomePage() {
        return cy.get('title');
    }
    verifyHomePageTitle() {
        this.titleHomePage.should('have.text', 'DEMOQA');
    }

    get menuElements() {
        return cy.get('.card-body');
    }
    clickMenu(Menu) {
        this.menuElements.contains(Menu).click();
    }

    get subMenuElements() {
        return cy.get('li');
    }
    clickSubMenu(SubMenu) {
        this.subMenuElements.contains(SubMenu).click();
    }

    get pageTitle() {
        return cy.get('h1');
    }
    verifyPageTitle(AssertionPage) {
        this.pageTitle.should('contain.text', AssertionPage);
    }

}

export default HomePage;