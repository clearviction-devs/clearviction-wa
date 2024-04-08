import testNotSureModal from "../../../../../utils/testNotSureModal";

describe('f-offense-classc-2-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-2-cont')
  })
  it('displays the required content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1)
  })
  it('ask if the offense was related and links to RCW 9.94A.030', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .contains('Revised Code of Washington 9.94A.030')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.030#:~:text=(b)%20%22Domestic%20violence%22,as%20defined%20in%20RCW%2010.99.')
  })
  it('defines Washington Revised Code Annex 9.94A.640(2)(b) with link', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .contains('Washington Revised Code Annex § 9.94A.640(2)(b)')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640')
  })
  it('directs to f-offense-classc-4-cont when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classc-4-cont')
  })
  it('directs to f-offense-classc-3-cont when clicking No', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classc-3-cont')
  })
  testNotSureModal();
})