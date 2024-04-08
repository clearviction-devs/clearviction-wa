import testNotSureModal from "../../utils/testNotSureModal";
import testPreviousButton from "../../utils/previousButton";

describe('Felony Class C Page', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-start-classc-1-cont')
  })
  it('displays the proper content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1)
  })
  it('displays RCW 9.94A.03 and directs to the proper link', () => {
    cy.contains('RCW 9.94A.03')
      .should('be.visible')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.030')
  })
  it('directs to f-offense-classcpro-1-main when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classcpro-1-main')
  })
  it('directs to f-offense-nopro-classc-1-main when clicking No', () => {
    cy.get('[data-cy="calc-choice-1')
      .should('be.visible')
      .click()
    cy.url().should('include', '/calculator/f-offense-classc-1-main')
  })
  testNotSureModal();
  testPreviousButton('f-start-classc-1-cont')
})