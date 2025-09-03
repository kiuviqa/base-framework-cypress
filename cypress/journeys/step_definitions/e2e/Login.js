import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../../pages/practicetestautomation/LoginPage';
import SuccessPage from '../../../pages/practicetestautomation/SuccessPage';

// Obtenemos el entorno actual de Cypress
// Esto nos permite usar diferentes configuraciones según el entorno (TST, STG, etc.)
const envi = Cypress.env('ENV');
// Obtenemos la URL base de la aplicación según el entorno
const url = Cypress.env(`${envi}`).url;


Given("el usuario abre la web de Practicas", function () {
    cy.visit(`${url}`)
});

When("ingresa el usuario {string}", function (username) {
    LoginPage.enterUsername(username);
});

When("ingresa la contraseña {string}", function (password) {
    LoginPage.enterPassword(password);
});

When("el usuario hace clic en el botón ingresar", function () {
    LoginPage.clickLogin();
});

Then("el sistema muestra el mensaje de error {string}", function (expectedError) {
    const error = LoginPage.getErrorMessage();
    error.should('have.text', expectedError);
});


Then("el sistema muestra el titulo {string}", function (expectedTitle) {
    const title = SuccessPage.getTitle();
    title.should('have.text', expectedTitle);
});

Then("el sistema muestra el mensaje {string}", function (expectedMessage) {
    const message = SuccessPage.getSubTitle();
    message.should('have.text', expectedMessage);
});