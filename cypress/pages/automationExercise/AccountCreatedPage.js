class AccountCreatedPage {
    elements = {
        accountCreatedMessage: () => cy.get('h2[data-qa="account-created"]'),
        continueButton: () => cy.get('a[data-qa="continue-button"]')
        }

    getAccountCreatedMessage() {
        return this.elements.accountCreatedMessage();
    }

    clickContinueButton() {
        this.elements.continueButton().click();
    }
 
}
export default new AccountCreatedPage();