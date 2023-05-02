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
  const new_heater = '[name="heatingtype"]'
  const new_heat_type = '[name="eheatingtype"]'
  const total_saving = '[name=name="vtotalannual"]'
  const years_saving = '[name="v10yearsavings"]'

  beforeEach(() => {
    cy.visit('/savings-calculator/')
  })



  it('search at Step 1', () => {
    cy.homeSearch('Alberta', 'Calgary', '3', '2500', '35')
  })


  it('Current Heating type change the price in Cost column', () => {

    cy.get(select_state).select('Alberta')
    cy.get(select_city).select('Calgary')
    cy.get(select_stories).select('3')
    cy.get(sq_ft).select('2500')
    cy.get(house_age).type('35')


    data.forEach(elements => {
      cy.get(current_heater).select(elements.current_system).should('have.prop', 'value', elements.current_system)
      cy.get('#CHC').should('have.text', elements.current_heating_cost)
    })
  })

  it('New heating type change the price in Cost column', () => {

    cy.get(select_state).select('Alberta')
    cy.get(select_city).select('Calgary')
    cy.get(select_stories).select('3')
    cy.get(sq_ft).select('2500')
    cy.get(house_age).type('35')


    cy.get(new_heater).select("bNaturalGas").should('have.prop', 'value', "bNaturalGas")
    cy.get('#NHC').should('have.text', "$8,154.55")
    cy.get(new_heater).select("Propane").should('have.prop', 'value', "Propane")
    cy.get('#NHC').should('have.text', "$29,545.45")
    cy.get(new_heater).select("Oil").should('have.prop', 'value', "Oil")
    cy.get('#NHC').should('have.text', "$20,777.47")
    cy.get(new_heater).select("Electric").should('have.prop', 'value', "Electric")
    cy.get('#NHC').should('have.text', "$10,950.78")
    cy.get(new_heater).select("HeatPump").should('have.prop', 'value', "HeatPump")
    cy.get('#NHC').should('have.text', "$8,506.56")
    cy.get(new_heater).select("DualFuelNaturalGas").should('have.prop', 'value', "DualFuelNaturalGas")
    cy.get('#NHC').should('have.text', "$6,828.82")
    cy.get(new_heater).select("DualFuelOil").should('have.prop', 'value', "DualFuelOil")
    cy.get('#NHC').should('have.text', "$14,402.58")
    cy.get(new_heater).select("DualFuelPropane").should('have.prop', 'value', "DualFuelPropane")
    cy.get('#NHC').should('have.text', "$19,663.37")
  })


  it('Savings are displayed when new and old types are chosen, ', () => {

    cy.get(select_state).select('Alberta')
    cy.get(select_city).select('Calgary')
    cy.get(select_stories).select('3')
    cy.get(sq_ft).select('2500')
    cy.get(house_age).type('35')
    cy.get(current_heater).select("aNaturalGas")
    cy.get(new_heater).select("Propane")
    cy.get('div#AHS').should('have.text', "-$21,390.91")
  })

  it('Total savings are displayed when new and old types are chosen, ', () => {

    cy.get(select_state).select('Alberta')
    cy.get(select_city).select('Calgary')
    cy.get(select_stories).select('3')
    cy.get(sq_ft).select('2500')
    cy.get(house_age).type('35')
    cy.get(current_heater).select("aNaturalGas")
    cy.get(new_heater).select("Propane")
    cy.get('div#VTAS').should('have.text', "-$21,390.91")
    cy.get('div#VTES').should('have.text', "-$213,909.09")



  })
})


