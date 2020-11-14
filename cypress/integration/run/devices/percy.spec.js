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

	it('snapshots with percyCSS', function() {
		cy.percySnapshot('Snapshot with percyCSS', {
		  percyCSS: `body { background-color: purple; }`
		})

		cy.percySnapshot('PercyCSS visability hidden', {
			percyCSS: `@media only percy { .hide-in-percy {visibility: hidden;} }`
		})
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


describe('Snapshot live sites', () => {
    it('snapshots a website with HTTP', function() {
      cy.visit('http://example.com/')
      cy.percySnapshot('http://example.com/')
    })

    it('snapshots a website with HTTPS, strict CSP, CORS and HSTS setup', function() {
      cy.visit('https://sdk-test.percy.dev')
      cy.percySnapshot('https://sdk-test.percy.dev')
    })
})

