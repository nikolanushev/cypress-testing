/// <reference types="cypress" />

it('Telekom Internet', function() {
    cy.visit('https://www.telekom.mk/')
    cy.get('[class="internet"]').should('be.visible')
})

it('Navigation', function() {
    cy.visit('https://www.telekom.mk/')
    cy.get('[class="btn btn-brand cookie-set-btn"]').first().click()
    cy.get('[class="internet"]').click().get('[class="dropli"]').first().click()
    cy.get('[class="container-fluid"]').should('be.visible')
})