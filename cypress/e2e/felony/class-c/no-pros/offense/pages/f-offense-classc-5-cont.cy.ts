import testNotSureModal from "../../../../../utils/testNotSureModal";
import testPreviousButton from "../../../../../utils/previousButton";

describe('f-offense-classc-5-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-5-cont')
  })
  it('displays the proper content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1)
  })
  it('displays 9.94A.640(2)(b) and links properly', () => {
    cy.contains('9.94A.640(2)(b)')
      .should('be.visible')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640')
  })
  it('directs to f-offense-classc-5-ineligible when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classc-5-ineligible')
  })
  it('directs to f-offense-classc-11-cont when clicking No', () => {
    cy.get('[data-cy="calc-choice-1')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classc-11-cont')
  })
  testNotSureModal();
  testPreviousButton('f-offense-classc-5-cont')
})