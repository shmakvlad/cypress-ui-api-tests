import BasePage from './BasePage'

const USER_EMAIL = '//*[@id="root"]/div[3]/div/div[1]/div[6]/div/span'

class DashboardPage extends BasePage {
    static openDashboardPage() {
        cy.visit('')
    }
    
    static validateActiveUserEmail(email){
        cy.xpath(USER_EMAIL)
            .should('have.text', email)
        cy.xpath(USER_EMAIL).contains(email)
    }
}

export default DashboardPage