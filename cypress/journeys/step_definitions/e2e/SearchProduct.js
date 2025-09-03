import { When, Then } from "@badeball/cypress-cucumber-preprocessor";    
import HeaderPage from '../../../pages/automationExercise/Header';
import ProductsPage from "../../../pages/automationExercise/ProductsPage";
import DetailProductPage from "../../../pages/automationExercise/DetailProductPage";

When("el usuario hace clic en el boton products", function () {           
   HeaderPage.clickProduct();
}); 

When('el usuario realiza la busqueda del producto {string}', function (product) {
   ProductsPage.enterSearchProduct(product);
    ProductsPage.clickSearchButton();
}); 

When('el usuario obtiene el precio del producto', function () { 
    ProductsPage.getProductPrice().then(($price) => {
        const priceText = $price.text().trim();
        cy.wrap(priceText).as('productPrice');
    });
}); 

When('el usuario hace clic en en el boton view product', function () { 
   ProductsPage.clickViewProduct();
});

Then('el sistema muestra la informacion del producto {string}', function (product) {
    DetailProductPage.getProductName().should('have.text', product);
}); 

Then('el sistema muestra el mismo precio del producto que se obtuvo en la busqueda', function () {
    cy.get('@productPrice').then((priceText) => {
        DetailProductPage.getProductPrice().should('have.text', priceText);
    });
}); 


