class SuccessPage {
    elements = {
        title: () => cy.get('.post-title'),
        subTitle: () => cy.get('strong')
    }

    getTitle() {
        return this.elements.title();
    }

    getSubTitle() {
        return this.elements.subTitle();
    }

}

export default new SuccessPage();