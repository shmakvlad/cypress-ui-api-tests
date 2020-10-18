class BasePage {
    static openPage(url){
        cy.visit(url)
    }
}

export default BasePage