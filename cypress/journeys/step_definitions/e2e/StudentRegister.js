import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegisterPage from '../../../pages/demoqa/RegisterPage';
import SuccessPage from '../../../pages/demoqa/SuccessPage';

const envi = Cypress.env('ENV');
const url = Cypress.env(`${envi}`).url_test;

Given("el usuario abre la web de demoqa", function () {
   cy.visit(`${url}`)
});


When("el usuario ingresa el nombre", function () {
   RegisterPage.enterFirstName("Tomas");
});


When("el usuario ingresa el apellido", function () {
   RegisterPage.enterLastName("Rios");
});


When("el usuario ingresa el email", function () {
   RegisterPage.enterEmail("test@gmail.com");
});

When("el usuario selecciona el genero", function () {
   RegisterPage.selectGender();
});

When("el usuario ingresa su fecha de nacimiento", function () {
   RegisterPage.enterDateOfBirth("15/02/1990");
});

When("el usuario ingresa su numero de telefono", function () {
   RegisterPage.enterPhoneNumber("1234567890");
});

When("el usuario selecciona el hobbie sports", function () {
   RegisterPage.selectHobbies();
});

When("el usuario ingresa su direccion", function () {
   RegisterPage.enterAddress("Calle Falsa 123");
});

When("el usuario hace clic en el boton submit", function () {
   RegisterPage.clickSubmit();
});

Then("el sistema muestra el mensaje de exito {string}", function (expectedMessage) {
   const message = SuccessPage.getSuccessMessage();
   message.should('have.text', expectedMessage)
});