///<reference types = "Cypress"/>

//  import _ from 'cypress/types/lodash'
import { data } from '../fixtures/params.json'

describe('Coosing each Current Heating type will change the price', () => {

     const select_state = '[name="nastates"]'
     const select_city = '[name="stage2"]'
     const select_stories = '[name="stories"]'
     const sq_ft = '[name="squarefeet"]'
     const house_age = '[name="houseage"]'
     const current_heater = '[name="heattype"]'
     const heat_type = '[name="eheattype"]'


    it('navigate to the saving calculator page', () => {
        cy.visit('/savings-calculator/')
      })
      before(() => {
        cy.visit('/savings-calculator/')
      })
      beforeEach(() => {
        cy.visit('/savings-calculator/')
      })



it('search at Step 1', () => {
    cy.homeSearch('Alberta', 'Calgary', '3', '2500', '35')
})



 it('Current Heating type change the price in Cost column', () => {

    // cy.homeSearch('Alberta', 'Calgary', '3', '2500', '35')

    cy.get(select_state).select('Alberta')  
    cy.get(select_city).select('Calgary')
    cy.get(select_stories).select('3')  
    cy.get(sq_ft).select('2500')  
    cy.get(house_age).type('35')  
      
    
       data.forEach(element => {

    //      cy.get(current_heater).select(element.current_system).invoke("val").should('eq', element.current_system)
    //      cy.get(heat_type).select(element.current_level).invoke("val").should('eq', element.current_level)

            cy.get(current_heater).select(data[3].current_system).invoke("val").should('eq', data[3].current_system)
           cy.get(heat_type).select(data[5].current_level).invoke("val").should('eq', data[5].current_level)

           
        //    cy.get(current_heater).select('Heat Pump').invoke("val").should('eq', "HeatPump")
        // cy.get(heat_type).clear().type('5.50{enter}').invoke("val").should('eq', "5.50")

            //  cy.get('[name="heattype"]').clear().type('5.50{enter}').invoke("val").should('eq', "5.50")
    })
})








    // cy.get(current_heater).select('Heat Pump').invoke("val").should('eq', "HeatPump")
    // cy.get(heat_type).type('5,50').invoke("val").should('eq', "75")










