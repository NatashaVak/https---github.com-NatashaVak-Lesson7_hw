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
      
    
       data1.forEach(elements => {
            cy.get(current_heater).select(elements.current_system).should('have.prop', 'value', elements.current_system)
            
        })
  })
})