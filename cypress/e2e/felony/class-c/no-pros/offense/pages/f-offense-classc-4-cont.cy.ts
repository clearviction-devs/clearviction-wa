import testPreviousButton from "../../../../../utils/previousButton";
import testNotSureModal from "../../../../../utils/testNotSureModal";

describe('f-offense-classc-4-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-4-cont')
  })
  it('displays content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
    .should('be.visible')
    .should('have.length', 1)
  })
  it('contains and links revised code of washington 9A.36.021', () => {
    cy.get('[data-cy="calc-block-of-content"]')
    .contains('Revised Code of Washington 9A.36.021')
    .should('have.attr', 'href', 'https://app.leg.wa.gov/rcw/default.aspx?cite=9a.36.021')
  })
  it('contains and links revised code annex 9.94A.640(2)(b)', () => {
    cy.get('[data-cy="calc-block-of-content"]')
    .contains('Washington Revised Code Annex § 9.94A.640(2)(b)')
    .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640')
  })
  it('directs to f-offense-classc-4-ineligible when clicking No', () => {
    cy.get('[data-cy="calc-choice-1')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classc-4-ineligible')
  })
  it('directs to f-offense-classc-5-cont when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classc-5-cont')
  })
  testNotSureModal();
  testPreviousButton('f-offense-classc-4-cont')
})