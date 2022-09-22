/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://www.telekom.mk/')
    cy.get('[class="btn btn-brand cookie-set-btn"]').first().click()
    cy.get('[class="uredi"]').click().get('[class="dropli"] > ul > li').first().click()
})

it('Visibility', function() {
    cy.get('[class="uredi"]').should('be.visible')
})

it('Navigation', function() {
    cy.get('[class="one-content blue-theme"]').should('be.visible')
})

it('Check radio functionality', function() {
    cy.get('[class="paymentType"]').first().get('div > radio')
    .should('be.checked')
})