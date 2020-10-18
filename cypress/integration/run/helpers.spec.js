describe('Working with custom commands', () => {
	beforeEach(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
		})
	})

	it('Check that login was correct', () => {
		cy.visit('/statistics/affise/daily', { failOnStatusCode: true })
		cy.contains('Daily')
	})

	it('Check that login was correct', () => {
		cy.get('span').contains('span', 'Staging DEV env.')
		cy.xpath('(//div[3]/div/span)[1]').should(
			'have.text',
			'Staging DEV env.'
		)
	})
})

describe('Working with fixtures', () => {
	it('Check that login was correct', () => {
		cy.visit('', { timeout: 2000 })
		cy.fixture('authorization').then(user => {
			const username = user.username;
			const password = user.password;

			cy.get('input')
        		.get('[type="checkbox"]')
            	.check()

			cy.get('#email')
				.type(username)

			cy.get('#password')
				.type(password)

			cy.get('button').type('{enter}')
		})
	})
})
