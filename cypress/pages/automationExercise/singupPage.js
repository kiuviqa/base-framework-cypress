class SingupPage {  
    elements = {    
        gender : () => cy.get('#id_gender1'),
        inputName : () => cy.get('input[id="name"]'),
        inputEmail : () => cy.get('input[id="email"]'),
        inputPassword : () => cy.get('[data-qa="password"]'),
        selectDay : () => cy.get('select[id="days"]'),
        selectMonth : () => cy.get('select[id="months"]'),
        selectYear : () => cy.get('select[id="years"]'),
        inputFirstName : () => cy.get('input[id="first_name"]'),
        inputLastName : () => cy.get('input[id="last_name"]'),
        inputCompany : () => cy.get('input[id="company"]'),
        inputAddress1 : () => cy.get('input[id="address1"]'),
        inputAddress2 : () => cy.get('input[id="address2"]'),
        selectCountry : () => cy.get('select[id="country"]'),
        inputState : () => cy.get('input[id="state"]'),
        inputCity : () => cy.get('input[id="city"]'),
        inputZipcode : () => cy.get('input[id="zipcode"]'),
        inputMobileNumber : () => cy.get('input[id="mobile_number"]'),
        createAccountButton : () => cy.get('button[data-qa="create-account"]')
     
    }
    selectGender() {
        this.elements.gender().click();
    }
    getName() {
        return this.elements.inputName();
    }
    getEmail() {
        return this.elements.inputEmail();
    }
    enterPassword(password) {
        this.elements.inputPassword().type(password);
    }
    selectDay(day) {
        this.elements.selectDay().select(day);
    }
    selectMonth(month) {
        this.elements.selectMonth().select(month);
    }
    selectYear(year) {
        this.elements.selectYear().select(year);
    }
    enterFirstName(firstName) {
        this.elements.inputFirstName().type(firstName);
    }
    enterLastName(lastName) {
        this.elements.inputLastName().type(lastName);
    }
    enterCompany(company) {
        this.elements.inputCompany().type(company);
    }
    enterAddress1(address1) {
        this.elements.inputAddress1().type(address1);
    }
    enterAddress2(address2) {
        this.elements.inputAddress2().type(address2);
    }
    selectCountry(country) {
        this.elements.selectCountry().select(country);
    }
    enterState(state) {
        this.elements.inputState().type(state);
    }
    enterCity(city) {
        this.elements.inputCity().type(city);
    }
    enterZipcode(zipcode) {
        this.elements.inputZipcode().type(zipcode);
    }
    enterMobileNumber(mobileNumber) {
        this.elements.inputMobileNumber().type(mobileNumber);
    }
    clickCreateAccount() {
        this.elements.createAccountButton().click();
    }   
}

export default new SingupPage();

