describe('m-offense-fish-2-cont', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-fish-2-cont');

    cy.get('strong:visible')
      .contains('Are you a member of a tribe?')
      .should('have.length', 1);
    cy.get('p:visible')
      .contains('You can also apply on behalf of a deceased family member in the tribe who meets the criteria.')
      .should('have.length', 1);
  });

  it('when select NO option, open continue to general criteria', () => {
    cy.visit('/calculator/m-offense-fish-2-cont');

    cy.get('a:visible').contains(/^No$/).click();
    cy.url().should('include', '/calculator/m-offense-fish-6-cont');
  });
});
