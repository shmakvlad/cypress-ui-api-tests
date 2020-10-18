describe('Visual Regression with Percy - Login Page', () => {
	before(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
		})
		cy.visit('/statistics/affise/daily')
		cy.wait(2000)
	})

	it('Desktop Layout', () => {
		cy.percySnapshot('Statistic desktop responsive test', {
			widths: [375, 768, 992, 1280, 1920]
		})
	})
	it('Tablet Layout', () => {
		cy.percySnapshot('Statistic Tablet Layout')
	})
})


describe('Visual Regression with Percy - Statistic Page', () => {
	beforeEach(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
		})
	})

	it('Daily page', () => {
		cy.visit('/statistics/affise/daily')
		cy.wait(2000)
		cy.percySnapshot('Daily', { widths: [375, 720, 1280, 1920] })
	})
	it('Affiliates page', () => {
		cy.visit('/statistics/affise/affiliates')
		cy.wait(2000)
		cy.percySnapshot('Affiliates', { widths: [375, 1280] })
	})
	it('Offers page', () => {
		cy.visit('/statistics/affise/offers')
		cy.wait(2000)
		cy.percySnapshot('Offers')
	})
})
