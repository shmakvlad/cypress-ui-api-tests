describe('Working with inputs', () => {

    beforeEach(() => {
        cy.visit('')
    });

	it('User authorization', () => {
		cy.get('#email').clear()
		cy.get('#email').type('ivan@gmail.com')

        cy.get('#password')
            .clear()
            .type('vlad12-8')

        cy.get('input')
            .get('[type="checkbox"]')
            .check()

        cy.contains('Sign in').click()
    })

    it('User authorization', () => {
        cy.get('input')
            .get('[type="checkbox"]')
            .check()

		cy.get('#email').as('email')
		cy.get('@email').type('ivan@gmail.com', { delay: 50 })

        cy.get('#password').as('password')
        cy.get('@password')
            .clear()
            .type('vlad12-8{enter}')
    })
})
