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

