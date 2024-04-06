import testNotSureModal from "../../../../../utils/testNotSureModal";

describe("Felony Class B No-Pros Eighth Page", () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classb-8-cont');
  })
  it('should display "RCW 9.94A.640(2)(b)" as a link to its respective WA State Legislature page', () => {
    cy.contains('9.94A.640(2)(b)')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640')
  })
  it('should redirect users to Felony Class B No-Pros Ineligible Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-8-ineligible')
  })
  it('should redirect users to Felony Class B No-Pros Surrounding Circumstances Main Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-circ-classb-1-main')
  })
  testNotSureModal();
})