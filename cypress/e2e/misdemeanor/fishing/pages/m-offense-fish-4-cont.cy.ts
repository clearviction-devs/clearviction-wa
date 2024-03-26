describe('m-offense-fish-4-cont', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-fish-4-cont');

    cy.get('strong:visible')
      .contains('Was it before January 1st, 1975?')
      .should('have.length', 1);
  });

  it('when select NO option, open continue to general criteria', () => {
    cy.visit('/calculator/m-offense-fish-4-cont');

    cy.get('a:visible').contains(/^No$/).click();

    cy.url().should('include', '/calculator/m-offense-fish-6-cont');
  });
});
