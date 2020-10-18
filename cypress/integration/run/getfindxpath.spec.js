describe('Working with commands get(), find() and xpath()', () => {
	beforeEach(() => {
		cy.login({
            email: 'ivan@gmail.com',
            password: 'vlad12-8',
        })
	})

	it('Use get(), find() and xpath() commands', () => {
        // By itc()
        cy.get('.css__items--3Bvcxzkvnx56aUm2tcGHcl').find('a').its(3).click()

        // By eq()
        cy.xpath('//div[3]/div[1]/div[2]/div').find('a').eq(1).click()

        // By css selector
        cy.get('.css__items--3Bvcxzkvnx56aUm2tcGHcl').find('a[href="/advertisers"]').click()
        cy.xpath('//div[3]/div[1]/div[2]/div').find('a[data-event="Link: Offers"]').click()
        cy.get('.essential__nav--content').find('> a:nth-child(2)').click()

        // get(), xpath()
        cy.get('.css__items--3Bvcxzkvnx56aUm2tcGHcl')
            .xpath('//a[3]').click()

        cy.xpath('//*[@class="css__items--3Bvcxzkvnx56aUm2tcGHcl"]')
            .get('a[href*="export"]').click()

        cy.xpath('//*[@class="css__items--3Bvcxzkvnx56aUm2tcGHcl"]')
            .find('a[href="/export"]').click()
            .get('a[href*="/stat"]:nth-child(2)').click()
        
        // By contains
		cy.get('.css__items--3Bvcxzkvnx56aUm2tcGHcl').find('a').contains('News').click()
        cy.get('.css__items--3Bvcxzkvnx56aUm2tcGHcl').contains('a', 'News').click()
        cy.get('a').contains('Advertisers').click()
	})
})
