describe('Visual Regression', () => {
	it('Time override command', () => {
		let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
		cy.clock(currentTime)
		cy.visit('/user/login')
		// cy.wait(3000)
		cy.matchImageSnapshot()
	})
})

const pages = ['/user/login', '/user/recovery']
const sizes = ['iphone-6', 'ipad-2', [1280, 800]]

describe('Diffrent resolutions and pages', () => {
	sizes.forEach(size => {
		pages.forEach(page => {
			it(`should match ${page} in resolution ${size}`, () => {
				let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
				cy.clock(currentTime)
				cy.setResolution(size)
				cy.visit(page)
				cy.percySnapshot(`Page: ${page}, Resolution: ${size}`)
				cy.matchImageSnapshot(`Page: ${page}, Resolution: ${size}`)
			})
		})
	})
})

describe('Percy diffrent pages', () => {
	pages.forEach(page => {
		it.only(`should match ${page}`, () => {
			cy.visit(page)
			cy.percySnapshot(`Page: ${page}`)
		})
	})
})

describe('Single Element Snapshot', () => {
	it('should match single element on the page', () => {
		cy.visit('')
		cy.get('button').matchImageSnapshot({
			failureTreshold: 10.0,
			failureTresholdType: 'pixels',
		})
	})
})
