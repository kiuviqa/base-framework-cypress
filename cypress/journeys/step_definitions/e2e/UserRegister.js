import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HeaderPage from '../../../pages/automationExercise/Header';
import LoginPage from '../../../pages/automationExercise/LoginAutomationExercisePage';
import SingupPage from '../../../pages/automationExercise/singupPage';
import AccountCreatedPage from '../../../pages/automationExercise/AccountCreatedPage';
import DeletedAccountPage from '../../../pages/automationExercise/DeletedAccountPage';
import DataGenerator from '../../../support/DataGenerator';


const envi = Cypress.env('ENV');
const url = Cypress.env(`${envi}`).url_automationexercise;


Given("el usuario abre la web de automation exercise", function () {
   cy.visit(`${url}`)
});


When("el usuario hace clic en el boton signup-login", function () {
   HeaderPage.clickSignupLogin();
});


Then('el sistema muestra el titulo New User Signup!', function () {
   const title = LoginPage.getTitle();
   title.contains("New User Signup!").should('be.visible');
});


When('el usuario ingresa el nombre y el email', function () {
   let name = DataGenerator.getFirstName();
   let email = DataGenerator.getEmail();
   
   LoginPage.enterName(name);
   LoginPage.enterEmail(email);
   
   // Guardamos el nombre y el email en variables de cypress
   cy.wrap(name).as('userName');
   cy.wrap(email).as('userEmail');
});


When('el usuario hace clic en el boton signup', function () {
   LoginPage.clickLogin();
});


When('el usuario selecciona su genero', function () {
   SingupPage.selectGender();
});


When('el usuario verifica que el nombre este precargado', function () {
   // Obtenemos la variable userName de cypress
   cy.get('@userName').then(nameUser => {
      SingupPage.getName().should('have.value', nameUser);
   })
});

When('el usuario verifica que el email esta precargado', function () {
   // Obtenemos la variable userEmail de cypress
   cy.get('@userEmail').then(emailUser => {
      SingupPage.getEmail().should('have.value', emailUser);
   })
});


When('el usuario ingresa la contraseña', function () {
   SingupPage.enterPassword('12345');
});


When('el usuario selecciona la fecha de nacimiento', function () {
   SingupPage.selectDay(DataGenerator.getRandomNumber(1, 28).toString());
   SingupPage.selectMonth(DataGenerator.getRandomNumber(1, 12).toString());
   SingupPage.selectYear(DataGenerator.getRandomNumber(1900, 2023).toString());
});


When('el usuario ingresa el nombre y apellido', function () {
   SingupPage.enterFirstName(DataGenerator.getFirstName());
   SingupPage.enterLastName(DataGenerator.getLastName());
});


When('el usuario ingresa la compania', function () {
   SingupPage.enterCompany(DataGenerator.getCompany()); 
});


When('el usuario ingresa la direccion principal y la direccion 2', function () {
   SingupPage.enterAddress1(DataGenerator.getAddress());
   SingupPage.enterAddress2(DataGenerator.getAddress());
});


When('el usuario selecciona el pais', function () {
   SingupPage.selectCountry('Canada');
});


When('el usuario ingresa el estado, la ciudad, el codigo postal y el movil', function () {
  SingupPage.enterState(DataGenerator.getState());
  SingupPage.enterCity(DataGenerator.getCity());
  SingupPage.enterZipcode(DataGenerator.getRandomNumber(10000, 99999).toString());
  SingupPage.enterMobileNumber(DataGenerator.getPhoneNumber());
});



When('el usuario hace clic en el boton create account', function () {
   SingupPage.clickCreateAccount();
});


Then('el sistema muestra el mensaje ACCOUNT CREATED!', function () {
   AccountCreatedPage.getAccountCreatedMessage().contains("Account Created!").should('be.visible');
});


When('el usuario hace clic en el boton continue', function () {
   AccountCreatedPage.clickContinueButton();
   cy.wait(3000);
});


When('el usuario hace clic en el boton delete account', function () {
   HeaderPage.clickDeleteAccount();
});


Then('el sistema muestra el mensaje ACCOUNT DELETED!', function () {
   DeletedAccountPage.getDeletedAccountMessage().contains("Account Deleted!").should('be.visible');
});