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


}

export default ElementsPage;