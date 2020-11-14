describe('Working with custom commands', () => {

    let countries = ["Angola", "Bolivia", "Cyprus"];

    before(() => {
        const currentTime = new Date(Date.UTC(2019, 3, 21))
        cy.clock(currentTime)
    })

	beforeEach(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
		})
	})

	it.only('Choose countries in filter with press keyboard key "Option"', () => {
        cy.visit('/statistics/affise/daily')
		cy.xpath('//*[@id="root"]/div[6]/div/div[2]/div[1]/div[1]/div/div[3]/div/div/div').click()
        cy.get('body').type('{option}', { release: false })

        for (let country of countries) {
            cy.get('.kVMIkWONDSdNMXZSp785L')
                .find('.M7PN41YGW-xT-UY7x4kPk')
                .contains(country).click()
        }

        cy.percySnapshot('percy', { widths: [375, 720, 1920] })
        cy.screenshot('screenshot')
        cy.setResolution('iphone-x')
        cy.matchImageSnapshot('snapshot')
    })
    
    it('', () => {
        
    });
})
