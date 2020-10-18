import BasePage from './BasePage'

class LoginPage extends BasePage {
    static openLoginPage() {
        cy.visit('/user/login')
    }

    static openRecoveryPage() {
        cy.visit('/user/recovery')
    }
    
    static login(email, password){
        cy.login ({
            email: email,
			password: password
        })
    }
}

export default LoginPage