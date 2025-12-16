class CommonPage {

    get submitButton() {
        return cy.get('#submit');
    }
    clickSubmitButton() {
        this.submitButton.click();
    }

}

export default CommonPage;