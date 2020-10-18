describe('Working with Cookies & Local Storage', () => {
	beforeEach(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8',
		})
	})

	it('Clear LocalStorage', () => {
		cy.visit('/statistics/affise/daily')
		cy.clearLocalStorage('_hjid', { log: true })
		cy.clearLocalStorage({ log: true })
	})

	it('Clear Cookies', () => {
		cy.visit('/statistics/affise/daily')
		cy.clearCookie('signed', { log: true })
		cy.clearCookies({ log: true })

		// Assert
		cy.visit('/statistics/affise/daily')
		cy.url().should('contain', 'offers.staging.affise.com/user/login')
	})
})
