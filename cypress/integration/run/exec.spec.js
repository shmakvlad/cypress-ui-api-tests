import BasePage from '../cucumber/login/BasePage'

describe('Exec', () => {
	beforeEach(() => {
        cy.visit('')
        cy.fixture('users').as('users')
    })
    
    it('Authorize user with fixture', () => {
        cy.get('@users').each(user => {
            if (user.client == true) {
                cy.login({
                    email: user.username,
                    password: user.password
                })
                BasePage.logout()
                console.log('success')
            } else{
                console.log('pass')
            }
        })
	})

	it('Authorize user with input', () => {
        cy.get('input').each(element => {

            if (element.get(0).id == 'sign') {
                cy.wrap(element).click()
            }

            if (element.get(0).id == 'password') {
                cy.wrap(element).type('vlad12-8')
            }

            if (element.get(0).id == 'email') {
                cy.wrap(element).type('ivan@gmail.com')
            }
        })

        cy.get('button').each(element => {
            if (element.text() == 'Sign in') {
                cy.wrap(element).click()
            }
        })
    })
    
})
