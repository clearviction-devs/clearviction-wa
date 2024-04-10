import testNotSureModal from "../../../../../utils/testNotSureModal";
import testPreviousButton from "../../../../../utils/previousButton";

describe('f-offense-classc-11-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-11-cont')
  })
  it('contains the proper content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
    .should('be.visible')
    .should('have.length', 1)
  })
  it('displays 9.94A.640(2)(g) and directs to the proper link', () => {
    cy.contains('9.94A.640(2)(g)')
      .should('be.visible')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640')
  })
  it('directs to f-offense-classc-12-cont when clicking No', () => {
    cy.get('[data-cy="calc-choice-1')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classc-12-cont')
  })
  it('directs to f-offense-classc-11-ineligible when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classc-11-ineligible')
  })
  testNotSureModal();
  testPreviousButton('f-offense-classc-11-cont')
})