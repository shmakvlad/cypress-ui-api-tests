describe('Writing and Organizing Tests', () => {
	const username = 'ivan@gmail.com'
	const password = 'vlad12-8'

	// runs once before all tests in the block
	before(() => {
		cy.wait(3000)
	})

	// runs before each test in the block
	beforeEach(() => {
		cy.login({
			email: username,
			password: password,
		})
	})

	it.only('Open statistic page', () => {
        cy.visit('/statistics/affise/daily');
	})
    
	it.skip('Open advertisers page', () => {
        cy.visit('/users-management');
	})

	// runs after each test in the block
	afterEach(() => {
		cy.get('span').contains(username).click({ force: true })
		cy.get('a').contains('Sign Out').click()
	})

	// runs once after all tests in the block
	after(() => {
		cy.wait(3000)
	})
})
