describe('m-offense-fish-3-cont', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-fish-3-cont');

    cy.get('[data-cy="calc-block-of-content"]')
      .should('have.length', 1)
      .should('be.visible');

    cy.get('[data-cy="not-sure-button"]:visible')
      .should('have.length', 1);
    // =^ is a selector that means "starts with"
    // so we are taking all elements that have data-cy that starts with "calc-choice-"
    cy.get('[data-cy^="calc-choice-"]:visible')
      .should('have.length', 2);
  });

  it('when select NO option, open continue to general criteria', () => {
    cy.visit('/calculator/m-offense-fish-3-cont');

    cy.get('[data-cy="calc-choice-1"]:visible')
      .click();
    cy.url().should('include', '/calculator/m-offense-fish-6-cont');
  });
});
