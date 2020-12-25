describe('Variables', () => {
	before(() => {
		cy.visit('')
	})

	it('Authorize user', () => {
		cy.get('input[name=email]')
			.type('ivan@gmail.com')
			.then(($emailField) => {
				cy.log($emailField.val() === 'ivan@gmail.com')
				cy.wrap($emailField).should('contain.id', 'email')
				cy.wrap($emailField).should('contain.value', 'ivan@gmail.com')
			})

		cy.get('input[name=password]')
			.type('vlad12-8')
			.then(($passwordField) => {
				cy.log($passwordField.first().val())
				cy.wrap($passwordField).should('have.value', 'vlad12-8')
			})

		if (Cypress.config().termsAndConditions === true) {
			cy.get('input').then(() => {
				cy.get('[type="checkbox"]').then(($input) => {
					// 1
					$input.get(0).click()
					// 2
					cy.wrap($input).click()
					// 3
					cy.wrap($input).check()
				})
			})
		}

		cy.contains('Sign in').then($link => {
			cy.log($link.text(), $link.get(0))
			cy.wrap($link).click() // Also can use $link.click()
		})
	})
	
})
