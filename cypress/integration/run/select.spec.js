describe('Working with Select command', () => {
	beforeEach(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8',
		})
	})

	it('Select manager for advertiser', () => {
        cy.visit('/advertiser/add')

        cy.get('#EditPartner_title')
            .type('Create advertiser')

        cy.get('#EditPartner_manager_id')
            .select('Vladislav Affiliate', { force: true })

        cy.get('span#select2-EditPartner_manager_id-container')
            .should('have.text', 'Vladislav Affiliate')

        cy.get('input.btn.btn-primary').click()
    })
    
    it('Select manager for advertiser', () => {
        cy.visit('http://htmlbook.ru/html/select')

        cy.get('[name=select]')
            .select(['Крокодил Гена', 'Шапокляк'])
            .invoke('val')
            .should('deep.equal', ['1', '2'])
	})
})