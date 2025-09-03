class LoginPage {
    elements = {
        title:() => cy.get('.signup-form > h2'),
        nameInput: () => cy.get('input[data-qa="signup-name"]'),
        emailInput: () => cy.get('input[data-qa="signup-email"]'),
        loginButton: () => cy.get('button[data-qa="signup-button"]'),
        errorMessage: () => cy.get('p[style="color: red;"]')

    }

    enterName(name) {
        this.elements.nameInput().type(name);
    }
    
    enterEmail(email) {
        this.elements.emailInput().type(email);
    }
    clickLogin() {
        this.elements.loginButton().click();
    }           
    getErrorMessage() {
        return this.elements.errorMessage();
    }   

    getTitle() {
        return this.elements.title();
    }
}
export default new LoginPage();