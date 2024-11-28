import testNotSureModal from '../../../../../utils/testNotSureModal.ts';

describe('Felony Class B No-Pros Terms of Offense First Page', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-terms-classb-1-cont');
  });
  it('should redirect users to Felony Class B Terms Second Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-terms-classb-2-cont');
  });
  it('should redirect users to Felony Class B No-Pros Ineligible Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-terms-classb-1-ineligible');
  });
  testNotSureModal();
});
