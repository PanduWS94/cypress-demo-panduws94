import CommonPage from './Common.Page.js';

const common = new CommonPage();

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
        this.userEmailField.clear().type(email);
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
        return cy.get('#result');
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

    get firstNameField() {
        return cy.get('#firstName');
    }
    inputFirstName(FirstName) {
        this.firstNameField.clear().type(FirstName);
    }

    get lastNameField() {
        return cy.get('#lastName');
    }
    inputLastName(LastName) {
        this.lastNameField.clear().type(LastName);
    }

    get ageField() {
        return cy.get('#age');
    }
    inputAge(age) {
        this.ageField.clear().type(age);
    }

    get salaryField() {
        return cy.get('#salary');
    }
    inputSalary(salary) {
        this.salaryField.clear().type(salary);
    }

    get departmentField() {
        return cy.get('#department');
    }
    inputDepartment(department) {
        this.departmentField.clear().type(department);
    }

    verifyDataInTable(FirstName, LastName, email, age, salary, department) {
        common.dataTableRowElements(FirstName, LastName, email, age, salary, department).should('exist');
    }

    get editButtonElement() {
        return cy.get('[title="Edit"]');
    }
    clickEditButton(email) {
        common.dataTableRowElements(email).within(() => {
            this.editButtonElement.click();
        });
    }

    get deleteButtonElement() {
        return cy.get('[title="Delete"]');
    }
    clickDeleteButton(email) {
        common.dataTableRowElements(email).within(() => {
            this.deleteButtonElement.click();
        });
    }

    get deleteConfirmationElement() {
        return cy.get('[role="gridcell"]');
    }
    verifyDeletedData(email) {
        this.deleteConfirmationElement.contains(email).should('not.exist');
    }

    get buttonDynamicElement() {
        return cy.get('button');
    }
    clickDynamicButton(buttonType) {
        const button = this.buttonDynamicElement.contains(
            new RegExp(`^${buttonType}$`)
        );

        switch (buttonType) {
            case 'Double Click Me':
                button.dblclick();
                break;

            case 'Right Click Me':
                button.rightclick();
                break;

            case 'Click Me':
                button.click();
                break;
        }
    }

    get messageClickedElement() {
        return cy.get('p');
    }
    verifyButtonClickedMessage(message) {
        this.messageClickedElement.should('contain.text', message);
    }

    get dynamicLinkElement() {
        return cy.get('a');
    }
    clickDynamicLink(linkType) {
        const link = this.dynamicLinkElement

        if (linkType === 'Home') {
            link.contains('Home')
                .invoke('removeAttr', 'target')
                .click();
        } else {
            link.contains(linkType)
                .click();
        }
    }

    get newTabMessageElement() {
        return cy.get('#linkResponse');
    }
    verifyNewTabMessage(statusMessage) {
        if (statusMessage) {
            this.newTabMessageElement
                .should('contain.text', statusMessage);
        } else {
            cy.url().should('eq', 'https://demoqa.com/');
        }
    }

    verifyImageSource(imageSrc) {
        cy.get('img[src="' + imageSrc + '"]')
            .should('be.visible');
    }

    clickNormalLink(linkType) {
        const link = this.dynamicLinkElement;
        link.contains(linkType)
            .click();
    }

    verifyUploadedFileName(fileName2) {
        cy.get('#uploadedFilePath')
            .should('contain.text', fileName2);
    }

    get enableButtonElement() {
        return cy.get('#enableAfter');
    }
    get changeColorButtonElement() {
        return cy.get('#colorChange');
    }
    get visibleButtonElement() {
        return cy.get('#visibleAfter');
    }

    verifyVisibleButtonsAfterDelay(properties, changes, verify) {
        if (properties.includes('Enable')) {
            this.enableButtonElement.should('have.attr', changes, verify);
        }
        if (properties.includes('Color')) {
            this.changeColorButtonElement.should('have.class', changes);
        }
        if (properties.includes('Visible')) {
            this.visibleButtonElement.should(verify);
        }
    }


}
export default ElementsPage;