import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ElementsPage from "../../src/pages/Elements.Page.js";

const elements = new ElementsPage();

When('User input {string} in Full Name field', (fullName) => {
    elements.inputUserName(fullName);
});

When('User input {string} in Email field', (email) => {
    elements.inputUserEmail(email);
});

When('User input {string} in Current Address field', (currentAddress) => {
    elements.inputCurrentAddress(currentAddress);
});

When('User input {string} in Permanent Address field', (permanentAddress) => {
    elements.inputPermanentAddress(permanentAddress);
});

Then('User will see Submitted data with {string} {string} {string} {string}', (fullName, email, currentAddress, permanentAddress) => {
    elements.verifySubmittedData(fullName, email, currentAddress, permanentAddress);
});

When('User expand all directory', () => {
    elements.expandDirectory();
});

When('User check the {string} checkbox', (checkbox) => {
    elements.checkCheckbox(checkbox);
});

Then('User will see checkbox {string} with {string}', (headerText, selectedItems) => {
    elements.verifySelectedItems(headerText, selectedItems);
});

When('User click the {string} radio button', (radioOption) => {
    elements.clickRadioButton(radioOption);
});

Then('User will see radio button {string}', (radioOption) => {
    elements.verifyRadioButtonMessage(radioOption);
});

When('User input {string} in First Name field', (FirstName) => {
    elements.inputFirstName(FirstName);
});

When('User input {string} in Last Name field', (LastName) => {
    elements.inputLastName(LastName);
});

When('User input {string} in Age field', (age) => {
    elements.inputAge(age);
});

When('User input {string} in Salary field', (salary) => {
    elements.inputSalary(salary);
});

When('User input {string} in Department field', (department) => {
    elements.inputDepartment(department);
});

Then('User will see new record with {string} {string} {string} {string} {string} {string}', (FirstName, LastName, email, age, salary, department) => {
    elements.verifyDataInTable(FirstName, LastName, email, age, salary, department);
});

When('User click Edit button on record with {string}', (email) => {
    elements.clickEditButton(email);
});

Then('User will see updated record with {string} {string} {string} {string} {string} {string}', (FirstName, LastName, email, age, salary, department) => {
    elements.verifyDataInTable(FirstName, LastName, email, age, salary, department);
});

When('User click Delete button on record with {string}', (email) => {
    elements.clickDeleteButton(email);
});

When('User will not see record with {string}', (email) => {
    elements.verifyDeletedData(email);
});

When('User click the {string} dynamic button', (buttonType) => {
    elements.clickDynamicButton(buttonType);
});

Then('User will see {string} button clicked message', (message) => {
    elements.verifyButtonClickedMessage(message);
});

When('User click the {string} link', (linkType) => {
    elements.clickDynamicLink(linkType);
});

Then('User will see {string} response', (statusMessage) => {
    elements.verifyNewTabMessage(statusMessage);
});

When('User will see {string} image', (imageSrc) => {
    elements.verifyImageSource(imageSrc);
});

When('User click the {string} link to verify', (linkType) => {
    cy.wait(2000);
    elements.clickNormalLink(linkType);
});

Then('User will see {string} link status', (statusMessage) => {
    elements.verifyLinkStatus(statusMessage);
});

Then('User will see uploaded file name {string}', (fileName2) => {
    elements.verifyUploadedFileName(fileName2);
});

Then('User will see {string} {string} {string} button after 5 seconds', (properties, changes, verify) => {
    cy.wait(6000);
    elements.verifyVisibleButtonsAfterDelay(properties, changes, verify);
});