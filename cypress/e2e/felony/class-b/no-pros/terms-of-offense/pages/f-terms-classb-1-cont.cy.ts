import testNotSureModal from '../../../../../utils/testNotSureModal.ts';

describe('Felony Class B No-Pros Terms of Offense First Page', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-terms-classb-1-cont');
  });
  it('should display "RCW 9.94A.640(1)" as a link to its respective WA State Legislature page', () => {
    cy.contains('9.94A.640(1)')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  });
  it('should redirect users to Felony Class B No-Pros Eligible Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-terms-classb-1-eligible');
  });
  it('should redirect users to Felony Class B No-Pros "Eligible with LFO" Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-terms-classb-1-ineligible');
  });
  testNotSureModal();
});
