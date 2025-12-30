class CommonPage {

    get submitButton() {
        return cy.get('#submit');
    }
    clickSubmitButton() {
        this.submitButton.click();
    }

    get addButton() {
        return cy.get('button');
    }
    clickAddButton() {
        this.addButton.contains('Add').click();
    }

    get tableRowElements() {
        return cy.get('.rt-tr-group');
    }
    dataTableRowElements(...columns) {
        return this.tableRowElements.then($rows => {
            const $filteredRows = Cypress.$($rows).filter((index, row) => {
                let isMatch = true;
                columns.forEach(expectedValue => {
                    if (!expectedValue) return;
                    const text = Cypress.$(row).text().trim();

                    if (!text.includes(expectedValue)) {
                        isMatch = false;
                        return false;
                    }
                });
                return isMatch;
            });
            if ($filteredRows.length === 0) {
                const message = `Tidak ada kolom yang berisi: ${columns.filter(Boolean).join(', ')}`;
                throw new Error(message);
            }
            return cy.wrap($filteredRows.first());
        });
    }

    get downloadLink() {
        return cy.get('#downloadButton');
    }
    downloadFile() {
        this.downloadLink.click();
    }

    verifyDownloadedFile(fileName) {
        const downloadsFolder = Cypress.config('downloadsFolder');
        cy.readFile(`${downloadsFolder}/${fileName}`).should('exist');
    }

    get uploadFileInput() {
        return cy.get('input[type="file"]');
    }
    uploadFile(fileName2) {
        const filePath = `e2e/src/cypress/assets/${fileName2}`;
        this.uploadFileInput.selectFile(filePath, { force: true });
    }

}

export default CommonPage;