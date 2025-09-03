class HeaderPage {  
    elements = {    
        signupLoginButton: () => cy.get('a[href="/login"]'),
        deleteAccountButton: () => cy.get('a[href="/delete_account"]'),
        productButton: () => cy.get('a[href="/products"]')
    }
    
    clickSignupLogin() {
        this.elements.signupLoginButton().click();
    }   
    clickDeleteAccount() {  
        this.elements.deleteAccountButton().click();
    }
    clickProduct() {
        this.elements.productButton().click();
    }
}

export default new HeaderPage();    