import DashboardPage from '../cucumber/login/DashboardPage'
import LoginPage from '../cucumber/login/LoginPage'

describe('Work with Browsers 1', () => {
	it('Run only in Firefox', { browser: 'firefox' }, () => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
        })
	})

	it('Do not run in Chrome', { browser: '!chrome' }, () => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
		})
	})
})

describe('Work with Browsers 2', { browser: 'chrome' }, () => {
	beforeEach(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
		})
	})

	it('Chrome 1', () => {
		DashboardPage.validateActiveUserEmail('ivan@gmail.com')
	})

	it('Chrome 2', () => {
		DashboardPage.validateActiveUserEmail('ivan@gmail.com')
	})

	afterEach(() => {
		cy.wait(1000)
	})
})

describe('Work with Browsers 3', () => {
	if (Cypress.isBrowser('firefox')) {
		it('Firefox', () => {
			LoginPage.openLoginPage()
			LoginPage.login('ivan@gmail.com', 'vlad12-8')
			DashboardPage.validateActiveUserEmail('ivan@gmail.com')
		})
	}

	if (Cypress.isBrowser(['electron', 'chrome', '!firefox'])) {
		it('Chrome, Electron', () => {
			LoginPage.openLoginPage()
			LoginPage.login('ivan@gmail.com', 'vlad12-8')
			DashboardPage.validateActiveUserEmail('ivan@gmail.com')
		})
	}
})
