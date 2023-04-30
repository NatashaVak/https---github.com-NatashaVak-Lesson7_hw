///<reference types = "Cypress"/>


describe('empty spec', () => {


  const select_state = '[name="nastates"]'
  const select_city = '[name="stage2"]'
  const select_stories = '[name="stories"]'
  const sq_ft = '[name="squarefeet"]'
  const house_age = '[name="houseage"]'


  it('navigate to the saving calculator page', () => {
    cy.visit('/savings-calculator/')
  })
  before(() => {
    cy.visit('/savings-calculator/')
  })
  beforeEach(() => {
    cy.visit('/savings-calculator/')
  })

  it('Canadian provinces search on the state list', () => {
    cy.get(select_state).should('be.visible')
    cy.get(select_state).select('Alberta').invoke("val").should('eq', "Alberta")
    // cy.get(select_state).select('British Columbia').invoke("val").should('eq', "BritishColumbia") 
    cy.get(select_state).select('Manitoba').invoke("val").should('eq', "Manitoba")
    cy.get(select_state).select('New Brunswick').invoke("val").should('eq', "NewBrunswick")
    cy.get(select_state).select('Newfoundland').invoke("val").should('eq', "Newfoundland")
    cy.get(select_state).select('Northwest Territory').invoke("val").should('eq', "NorthwestTerritory")
    cy.get(select_state).select('Nova Scotia').invoke("val").should('eq', "NovaScotia")
    cy.get(select_state).select('Ontario').invoke("val").should('eq', "Ontario")
    cy.get(select_state).select('Quebec').invoke("val").should('eq', "Quebec")
    cy.get(select_state).select('Saskatechewan').invoke("val").should('eq', "Saskatechewan")

  })
  it('Canadian provinces citi search', () => {
    cy.get(select_state).select('Alberta')
    cy.get(select_city).select('Calgary').invoke("text").should('contain', "Calgary")


    // cy.get(select_state).select('British Columbia')  
    // cy.get(select_city).select('British Columbia').invoke("val").should('contain', "British Columbia") 

    cy.get(select_state).select('Manitoba')
    cy.get(select_city).select('Winnepeg').invoke("text").should('contain', "Winnepeg")

    cy.get(select_state).select('New Brunswick')
    cy.get(select_city).select('Fredrickton').invoke("text").should('contain', "Fredrickton")

    cy.get(select_state).select('Newfoundland')
    cy.get(select_city).select('St Johns').invoke("text").should('contain', "St Johns")

    cy.get(select_state).select('Northwest Territory')
    cy.get(select_city).select('Fort Smith').invoke("text").should('contain', "Fort Smith")

    cy.get(select_state).select('Nova Scotia')
    cy.get(select_city).select('Halifax').invoke("text").should('contain', "Halifax")

    cy.get(select_state).select('Ontario')
    cy.get(select_city).select('Toronto').invoke("text").should('contain', "Toronto")

    cy.get(select_state).select('Quebec')
    cy.get(select_city).select('Montreal').invoke("text").should('contain', "Montreal")

    cy.get(select_state).select('Saskatechewan')
    cy.get(select_city).select('Regina').invoke("text").should('contain', "Regina")




  })
})

