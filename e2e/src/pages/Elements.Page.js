class ElementsPage {

    get userNameField() {
        return cy.get('#userName');
    }
    inputUserName(fullName) {
        this.userNameField.type(fullName);
    }

    get userEmailField() {
        return cy.get('#userEmail');
    }
    inputUserEmail(email) {
        this.userEmailField.type(email);
    }

    get currentAddressField() {
        return cy.get('#currentAddress');
    }
    inputCurrentAddress(currentAddress) {
        this.currentAddressField.type(currentAddress);
    }

    get permanentAddressField() {
        return cy.get('#permanentAddress');
    }
    inputPermanentAddress(permanentAddress) {
        this.permanentAddressField.type(permanentAddress);
    }

    get submittedData() {
        return cy.get('#output');
    }
    verifySubmittedData(fullName, email, currentAddress, permanentAddress) {
        this.submittedData.should('contain.text', fullName);
        this.submittedData.should('contain.text', email);
        this.submittedData.should('contain.text', currentAddress);
        this.submittedData.should('contain.text', permanentAddress);
    }

    get directoryElements() {
        return cy.get('[title="Expand all"]');
    }
    expandDirectory() {
        this.directoryElements.click();
    }

    get checkboxElements() {
        return cy.get('.rct-title');
    }
    checkCheckbox(checkbox) {
        this.checkboxElements.contains(checkbox).click();
    }

    get checkboxResult() {
        return cy.get('#result', 'mt-3');
    }
    verifySelectedItems(headerText, selectedItems) {
        this.checkboxResult.should('contain.text', headerText + selectedItems);
    }

    get radioButtonElements() {
        return cy.get('.custom-control-label');
    }
    clickRadioButton(radioOption) {
        this.radioButtonElements.contains(radioOption).click();
    }

    get radioButtonMessage() {
        return cy.get('.text-success');
    }
    verifyRadioButtonMessage(radioOption) {
        this.radioButtonMessage.should('contain.text', radioOption);
    }

}
export default ElementsPage;