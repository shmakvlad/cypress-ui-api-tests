describe('Working with custom commands', () => {

    let countries = ["Angola", "Bolivia", "Cyprus"];

	beforeEach(() => {
		cy.login({
			email: 'ivan@gmail.com',
			password: 'vlad12-8'
		})
	})

	it('Choose countries in filter with press keyboard key "Option"', () => {
        cy.visit('/statistics/affise/daily')
		cy.xpath('//*[@id="root"]/div[6]/div/div[2]/div[1]/div[1]/div/div[3]/div/div/div').click()
        cy.get('body').type('{option}', { release: false })

        for (let country of countries) {
            cy.get('.css__body--V2_B4-yAYgBdGqOlage5p.css__list-body--udTEus38zHdTrB037VZi_')
			    .find('.css__container--3121ovjkw34nn_wFJ_slqj')
                .contains(country).click()
        }
    })
    
    it.only('', () => {
        
    });
})
