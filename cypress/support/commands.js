import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import '@percy/cypress'
import { config } from 'chai'

addMatchImageSnapshotCommand({
	failureThreshold: 0.00,                 // threshold for entire image
	failureThresholdType: 'percent',        // percent of image or number of pixels
	customDiffConfig: { threshold: 0.0 },   // threshold for each pixel
	capture: 'viewport'                     // capture viewport in screenshot
})

Cypress.Commands.add('setResolution', size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
})

Cypress.Commands.add('login', user => {
        cy.visit('')

        cy.get('input[name=email]')
            .type(user.email)

        cy.get('input[name=password]')
            .type(user.password)

        if(Cypress.config().termsAndConditions === true){
            cy.get('input')
                .get('[type="checkbox"]')
                .check()
        }

        cy.contains('Sign in').click()
})
