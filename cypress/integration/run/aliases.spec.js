describe('Aliases', () => {
	beforeEach(() => {
		cy.visit('')
        cy.get('button').as('text')
        cy.fixture('authorization').as('user')
	})

	it('Invoke', () => {
	    cy.get('button').invoke('text').then(element => {
	        expect(element).to.eq('Sign in')
	    })
	})

	it('Object', () => {
		cy.get('button').then($element => {
            expect($element.text()).to.eq('Sign in')
            cy.get('@text').then($el => {
                expect($element.text()).to.eq($el.text())
            })
		})
    })
    
    it('Authorize user with fixture 1', () => {
        cy.get('@user').then(($user) => {
            cy.login({
                email: $user.username,
                password: $user.password
            })
        })
    })
    
    it('Authorize user with fixture 2', () => {
        cy.get('@user').then(user => {
            cy.login({
                email: user.username,
                password: user.password
            })
        })
	})
})
