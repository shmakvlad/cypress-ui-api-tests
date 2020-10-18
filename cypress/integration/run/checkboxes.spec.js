describe('Working with checkboxes', () => {
	beforeEach(() => {
		cy.visit('')
	})

	it('Work with checkboxes', () => {
		cy.wait(3000)
		cy.screenshot()
		cy.screenshot('img', { capture: 'fullPage' })
		cy.get('input[type="checkbox"]').screenshot()
		cy.get('input[type="checkbox"]').click()

		cy.get('input[type="checkbox"]').uncheck()
		cy.wait(3000)

		cy.get('input[type="checkbox"]').first().check()
		cy.wait(3000)

		cy.get('input[type="checkbox"]').uncheck(['1', 'accept'])
		cy.wait(3000)
	})
})
