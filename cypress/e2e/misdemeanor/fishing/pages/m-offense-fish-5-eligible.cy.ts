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
});
