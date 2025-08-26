import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";    


When("el usuario hace clic en el boton products", function () {           
   cy.get('a[href="/products"]').click();
}); 

When('el usuario realiza la busqueda del producto {string}', function (product) {
   cy.get('#search_product').type(product);
   cy.get('#submit_search').click();
}); 

When('el usuario obtiene el precio del producto', function () { 
    cy.get('.productinfo > h2').then(($price) => {
        const priceText = $price.text().trim();
        cy.wrap(priceText).as('productPrice');
    });
}); 

When('el usuario hace clic en en el boton view product', function () { 
   cy.get('.choose > .nav > li > a').click();
});

Then('el sistema muestra la informacion del producto {string}', function (product) {
    cy.get('.product-information > h2').should('have.text', product);
}); 

Then('el sistema muestra el mismo precio del producto que se obtuvo en la busqueda', function () {
    cy.get('@productPrice').then((priceText) => {
        cy.get(':nth-child(5) > span').should('have.text', priceText);
    });
}); 


