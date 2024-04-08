import testPreviousButton from "../../../../../utils/previousButton"

describe('f-offense-classc-1-main', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-1-main')
  })
  it('displays the proper content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1)
  })
  it('continues to f-offense-classc-1-cont when clicking Continue', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .click()
    cy.url().should('include', "/calculator/f-offense-classc-1-cont")
  })
  it('contains error link for users to report', () => {
    cy.get('[data-cy="error-report-link"]:visible')
      .should('have.attr', 'href')
      .and('include', 'forms');
  })
  testPreviousButton('f-offense-classc-1-main')
})