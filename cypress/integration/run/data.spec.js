describe('Write / Read data to JSON / Text file', () => {
	it('Write data to JSON file', () => {
		cy.writeFile('cypress/fixtures/data.json', {
	        name: 'Joe',
	        surname: 'Smith',
	        email: 'js@gmail.com',
	        password: 'joesmith'
		})
		cy.readFile('cypress/fixtures/data.json').then(user => {
			expect(user.name).to.equal('Joe')
			expect(user.password).to.equal('joesmith')
		})
	    cy.readFile('cypress/fixtures/data.json').its('email').should('eq', 'js@gmail.com')
	})

	it('Write data to TXT file', () => {
		cy.writeFile('cypress/fixtures/data.txt', 'Hello World ', {
			encoding: 'ascii',
			flag: 'a+',
		})
		cy.readFile('cypress/fixtures/data.txt').should('eq', 'Hello World ')
		cy.readFile('cypress/fixtures/data.txt').then(text => {
			expect(text).to.equal('Hello World ')
	    })
	    cy.readFile('does-not-exist.yaml').should('not.exist')
	})
	
	it('Read / Verify browser document content', () => {
		cy.visit('')
		cy.document()
			.its('contentType')
			.should('eq', 'text/html')

		cy.document()
			.should('have.property', 'charset')
			.and('eq', 'UTF-8')
	})
})
