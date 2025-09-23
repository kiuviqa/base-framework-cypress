import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../../services/login";

const loginService = new Login();

const envi = Cypress.env('ENV');
const username = Cypress.env(`${envi}`).username_api;
const password = Cypress.env(`${envi}`).password_api;


let payload = {
  username: username,
  password: password
};


Given ("el usuario tiene acceso a la API de login", function() {

});

When("el usuario envia la solicitud de login con credenciales validas", function() {
  loginService.postLogin(payload).then((response) => {
    cy.wrap(response).as('loginResponse');
  });
});

Then("el sistema responde con un código de estado 200", function() {
  cy.get('@loginResponse').then((response) => {
    expect(response.status).to.eq(200);
  });
});

Then("el sistema devuelve un token de autenticacion", function() {
  cy.get('@loginResponse').then((response) => {
    expect(response.body).to.have.property('token');
    expect(response.body.token).to.be.a('string').and.to.have.length.greaterThan(0);
  });
});

