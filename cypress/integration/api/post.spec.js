const faker = require('faker')

describe('Work with cy.request', { baseUrl: Cypress.config('api_url') }, () => {
	it('POST with Content-Type:application/x-www-form-urlencoded', () => {
        let emaildata = faker.internet.email().toLowerCase();
		cy.request({
			method: 'POST',
			url: '/3.0/admin/partner',
			headers: {
				'API-Key': Cypress.env('admin_api_key'),
            },
            body: {
                password: 'Ola1212!',
				email: emaildata,
				login: 'sjxehvtl@login',
				'custom_fields[1]': 'skype',
				country: 'RU'
            },
            form: true
		}).then(response => {
            expect(response.body.partner.email).to.eq(emaildata)
        })
	})

	it('POST with Content-Type:application/json 1', { baseUrl: 'http://10.201.0.173:45401' }, () => {
        let emaildata = faker.internet.email().toLowerCase();
		cy.request({
			method: 'POST',
			url: '/4.0/affiliates/',
			qs: { 
                client_id: 10002
            },
			auth: {
				bearer:
					'wR2eRWLrZF2BkBxowhg4nA9P7VZAtG15AxvjYgAN2Aw.f9lTg6MhhXWI5kG8jnM2CeXHIqTLuHAz9ertkSzk5Ak',
            },
            headers: {
                'Accept-Language': 'en-US',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emaildata,
                password: 'BGSmQFyMSpb8xLO',
                status: 'active',
                name: 'hello',
                affiliate_manager_id: '507f1f77bcf86cd799439012',
                sub_account_1: 'a-zA-Z0-9-,._{}+=/:~',
                sub_account_1_except: true,
                sub_account_2: 'a-zA-Z0-9-,._{}+=/:~',
                sub_account_2_except: false,
                tags: ['health'],
                referral: { affiliate_id: 5, percent: 10 },
                notes: 'note',
                meta: { salesforce: [4, 9], tipalti: [4, 7] },
                contacts: {
                    address1: 'string',
                    address2: 'string',
                    city: 'string',
                    country: 'BY',
                    phone: 'string',
                    zip_code: 'string'
                }
            })
        }).then(response => {
            console.log(response)
            return response.body
		}).then(body => {
            expect(body.name).to.eq('hello')
            expect(body).property('status').to.eq('active')
            return body.email
		}).then(email => {
            expect(email).to.eq(emaildata)
        })
    })
    
    it('POST with Content-Type:application/json 2', { baseUrl: 'http://10.201.0.173:45401' }, () => {
        let emaildata = faker.internet.email().toLowerCase();
		cy.request({
			method: 'POST',
			url: '/4.0/affiliates/',
			qs: { 
                client_id: 10002
            },
			auth: {
				bearer:
					'wR2eRWLrZF2BkBxowhg4nA9P7VZAtG15AxvjYgAN2Aw.f9lTg6MhhXWI5kG8jnM2CeXHIqTLuHAz9ertkSzk5Ak',
            },
            headers: {
                'Accept-Language': 'en-US',
                'Content-Type': 'application/json'
            },
            body: {
                'email': emaildata,
                'password': 'BGSmQFyMSpb8xLO',
                "status": "active",
                'name': "hello world",
                affiliate_manager_id: "507f1f77bcf86cd799439012",
                sub_account_1: 'a-zA-Z0-9-,._{}+=/:~',
                sub_account_1_except: true,
                sub_account_2: 'a-zA-Z0-9-,._{}+=/:~',
                sub_account_2_except: false,
                'tags': ['health'],
                "referral": { affiliate_id: 5, percent: 10 },
                "notes": 'note',
                "meta": { salesforce: [4, 9], tipalti: [4, 7] },
                'contacts': {
                    address1: 'string',
                    'address2': "string",
                    city: "string",
                    "country": 'BY',
                    'phone': 'string',
                    "zip_code": "string"
                }
            }
        }).then(response => {
            console.log(response.requestBody)
            let requestBodyData = JSON.parse(response.requestBody)

            expect(response.body.email).to.eq(requestBodyData.email)
            expect(response.body.email).to.eq(emaildata)

            expect(response.body).property('status').to.eq('active')
            expect(response).property('body').property('status').to.eq('active')
		})
	})
})
