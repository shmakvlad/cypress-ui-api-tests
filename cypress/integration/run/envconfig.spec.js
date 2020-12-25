describe('Environment, Config', () => {
	beforeEach(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
		})
	})

	it('Get, Set config variables from configuration file ', () => {
        // GET
		console.log(Cypress.config('termsAndConditions'))
		console.log(Cypress.config().termsAndConditions)
		console.log(Cypress.config('execTimeout'))
        console.log(Cypress.config().baseUrl)
        console.log(Cypress.config())
        
        // SET
		Cypress.config('termsAndConditions', false)
		Cypress.config('baseUrl', "ola.cola.com")
        Cypress.config('logging', true)
        
        // GET AGAING
		console.log(Cypress.config('termsAndConditions'))
		console.log(Cypress.config('baseUrl'))
		console.log(Cypress.config('logging'))
        console.log(Cypress.config())
	})

	it.only('Get, Set environment variables from configuration file ', () => {
        // GET
		console.log(Cypress.env())
		console.log(Cypress.env('host'))
        console.log(Cypress.env().policy)
        console.log(Cypress.env().configFile)
        console.log(Cypress.env().user)
        
        // SET
		Cypress.env('host', 'dev')
        Cypress.env('user', 'admin')
        
        // GET AGAING
		console.log(Cypress.env('host'))
        console.log(Cypress.env('user'))
        console.log(Cypress.env('configFile'))
		console.log(Cypress.env())
	})
})
