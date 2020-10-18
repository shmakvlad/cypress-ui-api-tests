describe('Interacting with Links, Buttons', () => {
	it('Open main page', () => {
		cy.visit('')
		cy.url().should('include', 'offers.staging.affise.com')
	})

	it('Click on button', () => {
		cy.get('button').contains('Sign in', { timeout: 1000 }).click()
		cy.contains('button', 'Sign in', { timeout: 1000 }).click()
	})

	it('Click on link', () => {
		cy.get('a').contains('Password recovering').click()
		cy.get('h3').contains('Password recovery')
	})
})
