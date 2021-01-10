describe('Browser Actions', () => {
	it('Load URL', () => {
		cy.visit('')
		cy.get('button').dblclick('topRight', { force: true, shiftKey: false, ctrlKey: false })
	})

	it('Load URL with timeout', () => {
		cy.visit('', { timeout: 3000 })
		cy.go('back')
		cy.go('forward')
	})

	it('Check correct URL, title', () => {
		cy.url().should('include', 'offers.staging.affise.com')
		cy.title().should('eq', 'Authorization | Staging DEV env.')
	})

	it('Check for exist element', () => {
		cy.get('[href="/user/recovery"]').should('contain.text', 'Password')
		cy.get('#password').should('have.class', 'form-control')
		cy.get('h3').should('have.text', 'Authorization')
		cy.xpath('//*[@id="loginForm"]/button').should('be.enabled')
		cy.get('#email.form-control').should('exist')
		cy.get('.btn.btn-success.btn-block').should('be.visible')
		cy.get('.btn.btn-success.btn-block').should('include.text', 'Sign in')
		cy.get('.btn.btn-success.btn-block').should(
			'not.contain.text',
			'button'
		)
		cy.get('#loginForm').submit()
	})

	it('And command', () => {
		cy.get('button')
			.should('have.class', 'btn-success')
			// .should('have.attr', 'role')
			.and('not.be.disabled')
			.and('be.visible')
	})
})
