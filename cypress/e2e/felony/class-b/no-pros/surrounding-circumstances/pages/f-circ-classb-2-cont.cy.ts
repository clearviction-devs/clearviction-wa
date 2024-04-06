import testNotSureModal from "../../../../../utils/testNotSureModal";

describe("Felony Class B No-Pros Surrounding Circumstances Second Page", () => {
  beforeEach(() => {
    cy.visit('/calculator/f-circ-classb-2-cont');
  })
  it('should display "RCW 9.94A.640(2)(g)" as a link to its respective WA State Legislature page', () => {
    cy.contains('9.94A.640(2)(g)')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640')
  })
  it('should redirect users to Felony Class B Ineligible Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-circ-classb-2-ineligible')
  })
  it('should redirect users to Felony Class B No-Pros Surrounding Circumstances Third Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-circ-classb-3-cont')
  })
  testNotSureModal();
})