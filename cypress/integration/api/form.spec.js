describe('Work with cy.visit', { baseUrl: Cypress.config('api_url') }, () => {
	it('Submit and send a form', () => {
		cy.visit({
			url: Cypress.config('baseUrl', 'http://offers.staging2.affise.com/user/login'),
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: {
				email: 'ivan@gmail.com',
				password: 'vlad12-8'
			}
		}).then(page => {
			console.log(page.document)
		})
	})
})

describe('Work with cy.request', { baseUrl: Cypress.config('api_url') }, () => {
	it('Submit and send a form', () => {
		cy.request({
			url: Cypress.config('baseUrl', 'http://offers.staging2.affise.com/user/login'),
			method: 'POST',
			form: true,
			body: {
				email: 'ivan@gmail.com',
				password: 'vlad12-8'
			}
		}).then(page => {
			console.log(page)
		})
	})
})

