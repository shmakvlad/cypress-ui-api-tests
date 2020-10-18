describe('Nav Menus', () => {
	describe('720p resolution', () => {
		beforeEach(() => {
			cy.viewport(1280, 720)
		})

		it('displays full header', () => {
			cy.visit('');
            cy.wait(3000)
		})
	})

	describe('iphone-5 resolution', () => {
		beforeEach(() => {
			cy.viewport('iphone-5')
		})

		it('displays mobile menu on click', () => {
			cy.visit('');
            cy.wait(3000)
		})
	})
})
