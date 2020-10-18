describe('Browser Actions', () => {
	it('Override the current time', () => {
		const date = new Date(2020, 0, 2).getTime()
		cy.clock(date)
		cy.log(date)
	})

	it('Implicit Wait | Pause | Debug | Log', () => {
		cy.wait(3000)
		cy.pause()
		cy.log('Site successfully loaded')
		cy.get('footer').scrollIntoView({ easing: 'linear', duration: 2000 })
		cy.reload()
	})
})
