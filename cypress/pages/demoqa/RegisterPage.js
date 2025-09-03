class RegisterPage {
    elements = {
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        genderRadio: () => cy.get('#genterWrapper > .col-md-9 > :nth-child(2)'),
        dateOfBirthInput: () => cy.get('#dateOfBirthInput'),
        phoneNumberInput: () => cy.get('#userNumber'),
        hobbiesCheckbox: () => cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)'),
        addressInput: () => cy.get('#currentAddress'),
        submitButton: () => cy.get('#submit')
    }

    enterFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }
    
    enterLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    enterEmail(email) {
        this.elements.emailInput().type(email);
    }               
    selectGender() {
        this.elements.genderRadio().click();
    }       
    enterDateOfBirth(dob) {
        this.elements.dateOfBirthInput().type(dob);
    }       
    enterPhoneNumber(phoneNumber) {
        this.elements.phoneNumberInput().type(phoneNumber);
    }       
    selectHobbies() {
        this.elements.hobbiesCheckbox().click();
    }       
    enterAddress(address) {
        this.elements.addressInput().type(address);
    }       
    clickSubmit() {
        this.elements.submitButton().click();
    }
}
export default new RegisterPage();
