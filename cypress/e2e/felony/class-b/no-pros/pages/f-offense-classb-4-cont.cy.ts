import testNotSureModal from "../../../../utils/testNotSureModal";

describe("Felony Class B No-Pros Fourth Page", () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classb-4-cont');
  })
  it('should display "RCW 9A.36.021" as a link to its respective WA State Legislature page', () => {
    cy.contains('9A.36.021')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9A.36.021')
  })
  it('should display "RCW 9.94A.640(2)(b)" as a link to its respective WA State Legislature page', () => {
    cy.contains('9.94A.640(2)(b)')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640')
  })
  it('should redirect users to Felony Class B Eighth Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-8-cont')
  })
  it('should redirect users to Felony Class B Ineligible Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-4-ineligible')
  })
  testNotSureModal();
})