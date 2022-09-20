/// <reference types="cypress" />

it('Visibility', function() {
    cy.visit('https://www.telekom.mk/')
    cy.get('[class="magenta"]').should('be.visible')
})

it('Navigation', function() {
    cy.visit('https://www.telekom.mk/')
    cy.get('[class="btn btn-brand cookie-set-btn"]').first().click()
    cy.get('[class="magenta"]').click().get('[class="dropli"]').first().click()
    cy.get('[class="container-fluid"]').should('be.visible')
})