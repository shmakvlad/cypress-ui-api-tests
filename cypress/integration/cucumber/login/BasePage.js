export default class BasePage {

    static EMAIL_LOCATOR = '//*[@id="root"]/div[3]/div/div[1]/div[6]/div/span'

    static openPage(url){
        cy.visit(url)
    }

    static search(text){
        cy.get('#search').type(`${text} {enter}`)
    }

    static logout(){
        cy.xpath(this.EMAIL_LOCATOR).click()
            .get('a[href="/user/logout"]').click({ force: true })
    }

    static returnEmailLocator(){
        return this.EMAIL_LOCATOR
    }
}