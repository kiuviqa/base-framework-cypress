import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const envi = Cypress.env('ENV');
const url = Cypress.env(`${envi}`).url_test;

Given("el usuario abre la web de demoqa", function () {
   cy.visit(`${url}`)
});


When("el usuario ingresa el nombre", function () {
   cy.get('#firstName').type("Tomas");
});


When("el usuario ingresa el apellido", function () {
   cy.get('#lastName').type("Rios");
});


When("el usuario ingresa el email", function () {
   cy.get('#userEmail').type("test@gmail.com");
});

When("el usuario selecciona el genero", function () {
   cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click();
});

When("el usuario ingresa su fecha de nacimiento", function () {
   cy.get('#dateOfBirthInput').type("15/02/1990");
});

When("el usuario ingresa su numero de telefono", function () {
   cy.get('#userNumber').type("3517253647");
});

When("el usuario selecciona el hobbie sports", function () {
   cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
});

When("el usuario ingresa su direccion", function () {
   cy.get('#currentAddress').click();
});

When("el usuario hace clic en el boton submit", function () {
   cy.get('#submit').click();
});

Then("el sistema muestra el mensaje de exito {string}", function (expectedMessage) {
   const message = cy.get('#example-modal-sizes-title-lg');
   message.should('have.text', expectedMessage)
});
