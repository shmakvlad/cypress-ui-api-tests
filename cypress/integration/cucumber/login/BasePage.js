export default class BasePage {
    static openPage(url){
        cy.visit(url)
    }

    static search(text){
        cy.get('#search').type(`${text} {enter}`)
    }
}