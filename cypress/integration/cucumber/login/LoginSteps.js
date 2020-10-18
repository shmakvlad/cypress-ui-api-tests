import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './LoginPage'
import DashboardPage from './DashboardPage'
import BasePage from './BasePage'

Given('I open login page', () => {
	LoginPage.openLoginPage()
})

When('I submit form with payload:', a => {
	let body = JSON.parse(a)
	LoginPage.login(body.email, body.password)
})

Then('I see dashboard page with {string} data', email => {
	DashboardPage.validateActiveUserEmail(email)
})

When('I submit form with {} payload:', (a, b) => {
	let body = JSON.parse(b)
	cy.login({
		email: body.email,
		password: body.password,
	})
})

When('I submit form with {} and {}:', (a, b) => {
	let body = JSON.parse(b)
	cy.login({
		email: body.email,
		password: body.password,
	})
})

Then('I see dashboard page with {} data', email => {
	cy.xpath('//*[@id="root"]/div[3]/div/div/div[4]/div/span').should(
		'have.text', email)
})
