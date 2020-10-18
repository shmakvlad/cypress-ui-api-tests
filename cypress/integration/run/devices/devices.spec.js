describe('Work with Resolution', () => {
    it('550x340', () => {
        cy.viewport(550, 340) 
        cy.visit('');
        cy.wait(3000)
    });

    it('1280x720', () => {
        cy.viewport(1024, 720) 
        cy.visit('');
        cy.wait(3000)
    });

    it('1920x1080', () => {
        cy.viewport('ipad-mini') 
        cy.visit('');
        cy.wait(3000)
    });

    it('iphone-x portrait', () => {
        cy.viewport('iphone-x','portrait') 
        cy.visit('');
        cy.wait(3000)
    });

    it('iphone-x landscape', () => {
        cy.viewport('iphone-x','landscape') 
        cy.visit('');
        cy.wait(3000)
    });

    it('macbook-15', () => {
        cy.viewport('macbook-15') 
        cy.visit('');
        cy.wait(3000)
    });

    it('samsung-s10', () => {
        cy.viewport('samsung-s10') 
        cy.visit('');
        cy.wait(3000)
    });
});