class SuccessPage {
    elements = {
        successMessage: () => cy.get('#example-modal-sizes-title-lg')
    }

    getSuccessMessage() {
        return this.elements.successMessage();
    }   
}
export default new SuccessPage();   