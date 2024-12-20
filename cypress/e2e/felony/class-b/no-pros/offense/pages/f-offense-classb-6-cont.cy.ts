import testNotSureModal from '../../../../../utils/testNotSureModal.ts';

describe('Felony Class B No-Pros Sixth Page', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classb-6-cont');
  });
  it('should display "RCW 9A.56.210" as a link to its respective WA State Legislature page', () => {
    cy.contains('9A.56.210')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.210');
  });
  it('should redirect users to Felony Class B No-Pros Eighth Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-8-cont');
  });
  it('should redirect users to Felony Class B No-Pros Ninth Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-9-cont');
  });
  testNotSureModal();
});
