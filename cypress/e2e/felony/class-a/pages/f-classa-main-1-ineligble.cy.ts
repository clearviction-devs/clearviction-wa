import testIneligiblePage from "../../utils/testIneligiblePage"

describe("Felony Classification Page", () => {
  it('should redirect to Felony Class A page when choosing Felony Class A option', () => {
    cy.visit('/calculator/head-felony-4-cont');
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .should('contain', 'Felony Class A')
      .click();
    cy.url().should('include', 'calculator/f-classa-main-1-ineligble');
  })
  it('should display ineligibility content for RCW 9.94A.030', () => {
    testIneligiblePage('f-classa-main-1-ineligble', 'RCW 9.94A.030', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94A.030');
  })
})