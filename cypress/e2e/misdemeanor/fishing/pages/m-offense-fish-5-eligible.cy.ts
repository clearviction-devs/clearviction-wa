describe.only('m-offense-fish-5-eligible', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-fish-5-eligible');

    cy.get('[data-cy="calc-block-of-content"]')
      .should('have.length', 1);
  });

  it('has a Check another conviction link', () => {
    cy.visit('/calculator/m-offense-fish-5-eligible');

    cy.get('[data-cy="check-another-conviction"]:visible')
      .as('checkAnotherConviction')
      .should('have.attr', 'href');

    cy.get('@checkAnotherConviction').click();

    cy.url().should('include', 'initial-1-cont');
  });

  it('has a Share the Calculator link', () => {
    cy.visit('/calculator/m-offense-fish-5-eligible');

    cy.get('[data-cy="share-calc-popup"]')
      .should('not.exist');

    cy.get('[data-cy="share-calc-link"]:visible')
      .should('have.length', 1)
      .click();

    cy.get('[data-cy="share-calc-popup"]')
      .should('be.visible');
  });

  it('has a Download Response button', () => {
    cy.visit('/calculator/m-offense-fish-5-eligible');

    cy.get('[data-cy="download-results"]:visible')
      .should('have.length', 1);
  });
});
