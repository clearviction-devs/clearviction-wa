describe('m-offense-fish-6-cont', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-fish-6-cont');

    cy.get('[data-cy="calc-block-of-content"]')
      .should('have.length', 1)
      .should('be.visible');

    // =^ is a selector that means "starts with"
    // so we are taking all elements that have data-cy that starts with "calc-choice-"
    cy.get('[data-cy^="calc-choice-"]:visible')
      .should('have.length', 1);
  });

  it('when select Continue option, open continue to general criteria', () => {
    cy.visit('/calculator/m-offense-fish-6-cont');

    cy.get('[data-cy="calc-choice-0"]:visible')
      .should('have.attr', 'href', '/calculator/m-offense-main-1-cont')
      .click();

    cy.url().should('include', '/calculator/m-offense-main-1-cont');
  });
});
