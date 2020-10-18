class BasePage {
    static openPage(url){
        cy.visit(url)
    }
}

class AuthorizationPage extends BasePage {
    static openAuthorizationPage() {
        cy.visit('/user/login');
    }
    
    static login(email, password){
        cy.login ({
            email: email,
			password: password
        })
    }
}

describe('Work with Classes', () => {
	it('Authorize user', () => {
        AuthorizationPage.openPage('')
        AuthorizationPage.openAuthorizationPage()
        AuthorizationPage.login('ivan@gmail.com', 'vlad12-8')
    })
})
