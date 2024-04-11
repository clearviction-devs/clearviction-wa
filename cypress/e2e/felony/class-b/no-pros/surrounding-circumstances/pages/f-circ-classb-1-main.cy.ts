describe('Felony Class B No-Pros Surrounding Circumstances Main Page', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-circ-classb-1-main');
  });
  it('should redirect users to Felony Class B No-Pros Surrounding Circumstances First Page when "continue" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-circ-classb-1-cont');
  });
});
