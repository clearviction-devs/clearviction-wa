import testNotSureModal from '../../../../../utils/testNotSureModal';

describe('Felony Class B No-Pros Surrounding Circumstances Third Page', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-circ-classb-3-cont');
  });
  it('should redirect users to Felony Class B No-Pros Surrounding Circumstances Fourth Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-circ-classb-4-cont');
  });
  it('should redirect users to Felony Class B No-Pros Ineligible Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-circ-classb-3-ineligible');
  });
  testNotSureModal();
});
