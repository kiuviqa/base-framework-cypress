import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const envi = Cypress.env('ENV');
const url = Cypress.env(`${envi}`).url_automationexercise;
Given("el usuario abre la web de automation exercise", function () {
   cy.visit(`${url}`)
});
When("el usuario hace clic en el boton signup-login", function () {
   cy.get('a[href="/login"]').click();
});
Then('el sistema muestra el titulo New User Signup!', function () {
   cy.get('.signup-form > h2').contains("New User Signup!").should('be.visible');
});
When('el usuario ingresa el nombre y el email', function () {
   let name = 'Tomas Rios';
   let email = 'tom-9@gmail.com';
   cy.get('input[data-qa="signup-name"]').type(name);
   cy.get('input[data-qa="signup-email"]').type(email);
   // Guardamos el nombre y el email en variables de cypress
   cy.wrap(name).as('userName');
   cy.wrap(email).as('userEmail');
});
When('el usuario hace clic en el boton signup', function () {
   cy.get('button[data-qa="signup-button"]').click();
});
When('el usuario selecciona su genero', function () {
   cy.get('#id_gender1').click();
});
When('el usuario verifica que el nombre este precargado', function () {
   // Obtenemos la variable userName de cypress
   cy.get('@userName').then(nameUser => {
      cy.get('input[id="name"]').should('have.value', nameUser);
   })
});
When('el usuario verifica que el email esta precargado', function () {
   // Obtenemos la variable userEmail de cypress
   cy.get('@userEmail').then(emailUser => {
      cy.get('input[id="email"]').should('have.value', emailUser);
   })
});
When('el usuario ingresa la contraseña', function () {
   cy.get('[data-qa="password"]').type('12345');
});
When('el usuario selecciona la fecha de nacimiento', function () {
   cy.get('select[id="days"]').select('10').should('have.value', '10');
   cy.get('select[id="months"]').select('5').should('have.value', '5');
   cy.get('select[id="years"]').select('1990').should('have.value', '1990');
});
When('el usuario ingresa el nombre y apellido', function () {
    cy.get('input[id="first_name"]').type('Tomas');
    cy.get('input[id="last_name"]').type('Rios');
});
When('el usuario ingresa la compania', function () {
    cy.get('input[id="company"]').type('Kiuvi');
});
When('el usuario ingresa la direccion principal y la direccion 2', function () {
    cy.get('input[id="address1"]').type('Calle Falsa 123');
      cy.get('input[id="address2"]').type('Departamento 1A');
});
When('el usuario selecciona el pais', function () {
   cy.get('select[id="country"]').select('Canada').should('have.value', 'Canada');
});
When('el usuario ingresa el estado, la ciudad, el codigo postal y el movil', function () {
   cy.get('input[id="state"]').type('Buenos Aires');
   cy.get('input[id="city"]').type('La Plata');
   cy.get('input[id="zipcode"]').type('1900');
   cy.get('input[id="mobile_number"]').type('+5492211234567');
});
When('el usuario hace clic en el boton create account', function () {
   cy.get('button[data-qa="create-account"]').click();
});
Then('el sistema muestra el mensaje ACCOUNT CREATED!', function () {
   cy.get('b').contains("Account Created!").should('be.visible');
});
When('el usuario hace clic en el boton continue', function () {
   cy.get('a[data-qa="continue-button"]').click();
   cy.wait(3000);
});
When('el usuario hace clic en el boton delete account', function () {
   cy.get('a[href="/delete_account"]').click();
});
Then('el sistema muestra el mensaje ACCOUNT DELETED!', function () {
   cy.get('b').contains("Account Deleted!").should('be.visible');
});