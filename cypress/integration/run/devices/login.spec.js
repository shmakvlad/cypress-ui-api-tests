describe('Visual Regression - Login Page', () => {
	before(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
		})
	})

	it('Desktop Layout', () => {
		cy.setResolution([1280, 720])
		cy.matchImageSnapshot()
	})

	it('Tablet Layout', () => {
		cy.setResolution('iphone-x')
		cy.matchImageSnapshot()
	})

	it('Mobile Layout', () => {
		cy.setResolution('ipad-2')
		cy.matchImageSnapshot()
	})
})
