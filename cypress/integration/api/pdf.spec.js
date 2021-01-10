describe('Work with cy.request', { baseUrl: Cypress.config('api_url') }, () => {
	it('Download PDF file', () => {
		cy.request({
            url: 'http://www.orimi.com/pdf-test.pdf',
            encoding: 'binary',
        }).then((response) => {
            cy.writeFile('cypress/fixtures/document.pdf', response.body, 'binary')
        })
    })
    
    it.only('Download PDF file with alias, get', () => {
		cy.request({ 
            url: 'http://www.orimi.com/pdf-test.pdf', 
            encoding: 'binary' 
        }).as('downloadpdf')

        cy.get('@downloadpdf').then((response) => {
            cy.writeFile('cypress/fixtures/document.pdf', response.body, 'binary')
        })
    })
})
