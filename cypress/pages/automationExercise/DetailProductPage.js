class DetailProductPage {
    elements = {    
        productName: () => cy.get('.product-information > h2'),
        productPrice: () => cy.get(':nth-child(5) > span'),
    }
    
    getProductName() {
        return this.elements.productName();
    }   
    getProductPrice() {
        return this.elements.productPrice();
    }   
}

export default new DetailProductPage();
        