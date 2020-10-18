describe('Interacting with Links, Buttons', () => {
	it('Open main page', () => {
		cy.visit('', { timeout: 3000 })
		cy.url().should('include', 'offers.staging.affise.com')
	})
	it('Validating Count of Elements', () => {
		cy.get('input').its('length').should('eq', 4)
		cy.get('input').its(2).should('have.id', 'password')
		cy.get('input').eq(1).should('have.id', 'email')
		cy.get('a').contains('Password recovering')
		cy.contains('a', 'Password recovering', { timeout: 1000 })
	})
})
