import testNotSureModal from "../../../../../utils/testNotSureModal";
import testPreviousButton from "../../../../../utils/previousButton";

describe('f-offense-classc-3-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-3-cont')
  })
  it('contains the proper content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
    .should('be.visible')
    .should('have.length', 1)
  })
  it('displays RCW 43.43.830 and directs to the proper link', () => {
    cy.contains('43.43.830')
      .should('be.visible')
      .should('have.attr','href','https://apps.leg.wa.gov/rcw/default.aspx?cite=43.43.830')
  })
})