const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

describe('Logo', () => {
	sizes.forEach(size => {
		it(`Should display logo on ${size} screen`, () => {
			if (Cypress._.isArray(size)) {
				cy.viewport(size[0], size[1])
			} else {
				cy.viewport(size)
			}
            cy.visit('')
            cy.wait(3000)
		})
	})
})
