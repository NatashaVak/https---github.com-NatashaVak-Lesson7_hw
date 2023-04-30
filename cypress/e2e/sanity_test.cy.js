///<reference types = "Cypress"/>


describe('The Saving calculator functionality', () => {

  const home = '[id="menu-item-31"]';
  const about = '[id="menu-item-36"]';
  const products = '[id="menu-item-32"]';
  const services = '[id="menu-item-34"]';
  const tools = '[id="menu-item-35"]';
  const promotions = '[id="menu-item-673"]';
  const careers = '[id="menu-item-1589"]';
  const blog = '[id="menu-item-1725"]';
  const faqs = '[id="menu-item-1727"]';
  const contact = '[id="menu-item-1726"]'


  it('navigate to main page', () => {
    cy.visit('/')
  })
  before(() => {
    cy.visit('/')
  })
  beforeEach(() => {
    cy.visit('/')
  })


  it('verify that buttons on the menu page', () => {
    cy.get(home).should("be.visible")
    cy.get(about).should("be.visible")
    cy.get(products).should("be.visible")
    cy.get(services).should("be.visible")
    cy.get(tools).should("be.visible")
    cy.get(promotions).should("be.visible")
    cy.get(careers).should("be.visible")
    cy.get(blog).should("be.visible")
    cy.get(faqs).should("be.visible")
    cy.get(contact).should("be.visible")
  })

  it('verify that clicking on Home will navigate to correct page', () => {
    cy.get(home).click()
  })
  it('verify that clicking on About will navigate to correct page', () => {
    cy.get(about).click()
  })
  it('verify that clicking on Products will navigate to correct page', () => {
    cy.get(products).click()
  })
  it('verify that clicking on Services will navigate to correct page', () => {
    cy.get(services).click()
  })
  it('verify that clicking on Tools will navigate to correct page', () => {
    cy.get(tools).click()
  })
  it('verify that clicking on Promotions will navigate to correct page', () => {
    cy.get(promotions).click()
  })
  it('verify that clicking on Careers will navigate to correct page', () => {
    cy.get(careers).click()
  })
  it('verify that clicking on Blog will navigate to correct page', () => {
    cy.get(blog).click()
  })
  it('verify that clicking on FAQs will navigate to correct page', () => {
    cy.get(faqs).click()
  })
  it('verify that clicking on Contact will navigate to correct page', () => {
    cy.get(contact).click()
})
})
