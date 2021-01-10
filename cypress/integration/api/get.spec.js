describe('Work with cy.request', { baseUrl: Cypress.config('api_url') }, () => {
	it('GET with Headers', () => {
		cy.request({
			method: 'GET',
			url: '/3.0/admin/partners',
			headers: {
				'Accept-Language': 'en-US',
				'API-Key': Cypress.env('admin_api_key'),
			},
		}).then(response => {
			cy.log('response', response)
			cy.log('response.body', response.body)
			cy.log('response.status', response.status)
			cy.log('response.statusText', response.statusText)
			cy.log('response.isOkStatusCode', response.isOkStatusCode)
			cy.log('response.headers', response.headers)
			cy.log('request.headers', response.requestHeaders)
			cy.log('response.duration', response.duration)
			cy.log('response.allRequestResponses', response.allRequestResponses)
			console.log(response)
		})
	})

	it('GET with Auth, return response data', { baseUrl: 'http://10.201.0.173:45401' }, () => {
		cy.request({
			method: 'GET',
			url: '/4.0/advertisers/',
			qs: { client_id: 10002 },
			auth: {
				bearer:
					'wR2eRWLrZF2BkBxowhg4nA9P7VZAtG15AxvjYgAN2Aw.f9lTg6MhhXWI5kG8jnM2CeXHIqTLuHAz9ertkSzk5Ak',
			},
		}).then(response => {
			console.log(response)
			return response.body
		}).then(body => {
			console.log(body)

			cy.wrap(body).should('have.property', 'pagination')
			cy.wrap(body).should('be.a', 'object')

			expect(body).to.have.property('pagination')
			expect(body).to.be.a('object')

			expect(body.pagination).to.have.property('total_count')
			expect(body.pagination).to.have.property('per_page', 100)
			expect(body).property('pagination').to.have.property('per_page', 100)

			expect(body.advertisers[0]).to.have.property('id')
			expect(body.advertisers[1]).to.have.property('title', 'JJJ')
			expect(body).property('advertisers').to.be.an('array')
			expect(body).property('advertisers').property('0').to.have.property('title', 'Xiaomi')
		})
	})

	it('Get with Variable', () => {
		const options = {
			method: 'GET',
			url: 'http://10.201.0.173:45401/4.0/advertisers/?client_id=10002',
			headers: {
				Authorization:
					'Bearer wR2eRWLrZF2BkBxowhg4nA9P7VZAtG15AxvjYgAN2Aw.f9lTg6MhhXWI5kG8jnM2CeXHIqTLuHAz9ertkSzk5Ak',
			}
		}
		cy.request(options)
			.its('body')
			.should('be.an', 'object')
			.and('have.property', 'advertisers')

		cy.request(options)
			.its('body')
			.should('have.property', 'pagination').its('total_count').should('equal', 34)

		cy.request(options)
			.its('body').its('pagination').its('total_count').should('equal', 34)

		cy.request(options)
			.its('body').its('advertisers').its('33').its('title').should('equal', 'o')
	})

	it('GET with Query parameters 1', () => {
		cy.request({
			method: 'GET',
			url: '/3.0/admin/partners',
			headers: { 'API-Key': Cypress.config().api_keys.root },
			qs: {
				page: 1,
				limit: 3,
				status: 'active',
				'id[0]': 83,
				'id[1]': 84,
			},
		}).then(response => {
			console.log(response)
		})
	})

	it('Get page and Validate data with its()', () => {
		cy.request('http://offers.staging3.affise.com/user/login')
			.its('status')
			.should('equal', 200)

		cy.request('http://offers.staging3.affise.com/user/login')
			.its('body')
			.should(
				'include',
				'<script type="text/javascript" src="/js/essential.js"></script>'
			)

		cy.request('http://offers.staging3.affise.com/user/login')
			.its('headers')
			.should('have.property', 'x-frame-options', 'DENY')

		cy.request('http://offers.staging3.affise.com/user/login')
			.its('duration')
			.should('be.greaterThan', 100)

		cy.request('http://offers.staging3.affise.com/user/login')
			.its('requestHeaders')
			.should('have.property', 'accept-encoding', 'gzip, deflate')

		cy.request('http://offers.staging3.affise.com/user/login').then(
			response => {
				console.log(response)
				cy.wrap(response).its('status').should('equal', 200)
				cy.wrap(response.status).should('equal', 200)
				expect(response.status).to.eq(200)
			}
		)
	})
})
