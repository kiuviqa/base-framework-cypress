class ProductPage {
    elements = {    
        searchInput: () => cy.get('#search_product'),
        searchButton: () => cy.get('#submit_search'),
        productPrice: () => cy.get('.productinfo > h2'),
        viewProductButton: () => cy.get('.choose > .nav > li > a'),
    }
    
    enterSearchProduct(product) {
        this.elements.searchInput().type(product);
    }   
    clickSearchButton() {  
        this.elements.searchButton().click();
    }
    getProductPrice() {
        return this.elements.productPrice();
    }   
    clickViewProduct() {
        this.elements.viewProductButton().click();
    }
}

export default new ProductPage();