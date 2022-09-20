/// <reference types="cypress" />

it('Telekom', function() {
    cy.visit('https://www.telekom.mk/')
    cy.get('[class="internet"]').should('be.visible')
})