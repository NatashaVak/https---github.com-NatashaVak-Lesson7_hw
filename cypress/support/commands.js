// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import selectors from '../support/selectors.js'

Cypress.Commands.add('homeSearch', (state_name, city_name, stories_num, sf_width, age) => { 
    cy.get(selectors.select_state).select(state_name, {force: true})
    cy.get(selectors.select_city).select(city_name, {force: true})
    cy.get(selectors.select_stories).select(stories_num, {force: true})
    cy.get(selectors.sq_ft).select(sf_width, {force: true})
    cy.get(selectors.house_age).type(age, {force: true})


    // cy.get('[name="stage2"]').select(city_name, {force: true})
    // cy.get('[name="stories"]').select(stories_num, {force: true})
    // cy.get('[name="squarefeet"]').select(sf_width, {force: true})
    // cy.get('[name="houseage"]').type(age, {force: true})


})
//