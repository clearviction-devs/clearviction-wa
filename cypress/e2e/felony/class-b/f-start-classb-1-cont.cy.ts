import testNotSureModal from "../../utils/testNotSureModal";

describe("Felony Class B Page", () => {
  beforeEach(() => {
    cy.visit('/calculator/f-start-classb-1-cont');
  })

  it('should display "RCW 9.94A.030" as a link to its respective WA State Legislature page', () => {
    cy.contains('RCW 9.94A.030')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.030')
  })
  it('should redirect users to Felony Class B Yes-Pros Main Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classbpro-1-main');
  })
  it('should redirect users to Felony Class B No-Pros Main Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-1-main');
  })
  testNotSureModal();
})