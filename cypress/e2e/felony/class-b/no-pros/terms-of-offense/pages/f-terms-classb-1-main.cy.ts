describe('Felony Class B No-Pros Terms of Offense Main Page', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-terms-classb-1-main');
  });
  it('should redirect users to Felony Class B No-Pros Terms of Offense First Page when "continue" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-terms-classb-3-cont');
  });
});
