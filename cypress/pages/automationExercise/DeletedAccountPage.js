class DeletedAccountPage {
    element = { 
        deletedAccountMessage: () => cy.get('b'),
    }

    getDeletedAccountMessage() {
        return this.element.deletedAccountMessage();
    }
}
export default new DeletedAccountPage();