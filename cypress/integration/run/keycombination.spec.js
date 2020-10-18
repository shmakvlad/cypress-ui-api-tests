describe('Working with key combination', () => {
	it('Press enter, shift, option, right click...', () => {
		cy.visit('')

	    cy.get('input')
	        .get('[type="checkbox"]')
	        .check()

	    cy.get('#email')
	        .type('{shift}{option}Qq', { force: true })

	    cy.get('#password')
	        .type('password')

	    cy.contains('a', 'Password recovering').rightclick()
	    cy.contains('a', 'Password recovering').dblclick()

	    cy.get('button').type('{enter}')
	})

	it('Global Shortcuts', () => {
	    cy.visit('')

	    cy.get('body')
	        .type('{uparrow}{uparrow}{downarrow}{downarrow}{leftarrow}{rightarrow}{leftarrow}{rightarrow}ba')

	    cy.get('#email')
	        .type('{cmd}Qq', { release: false })

	    cy.get('button').type('{enter}')
	})

	it('Open new tab, open new window', () => {
		cy.visit('', { timeout: 5000 })

        cy.get('body')
            .type('{cmd}', { release: false })
            .get('button')
            .click()

		// It is needed to reset release value, after that release will be true
		cy.get('body').type('{alt}')

		cy.get('body')
			.type('{shift}', { release: false })
            .get('a')
            .contains('Password recovering')
			.click()
	})
})
