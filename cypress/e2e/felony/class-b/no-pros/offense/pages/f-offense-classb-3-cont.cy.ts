import testNotSureModal from "../../../../../utils/testNotSureModal";

describe("Felony Class B No-Pros Third Page", () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classb-3-cont');
  })
  it('should display "RCW 9.94A.030" as a link to its respective WA State Legislature page', () => {
    cy.contains('9.94A.030')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/rcw/default.aspx?cite=9.94A.030')
  })
  it('should display "RCW 9.94A.640(2)(b)" as a link to its respective WA State Legislature page', () => {
    cy.contains('9.94A.640(2)(b)')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640')
  })
  it('should redirect users to Felony Class B Fourth Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-4-cont')
  })
  it('should redirect users to Felony Class B No-Pros Fifth Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-5-cont')
  })
  testNotSureModal();
})