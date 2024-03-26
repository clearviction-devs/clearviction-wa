describe('m-offense-fish-5-cont', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-fish-5-cont');

    cy.get('strong:visible')
      .contains('Did your tribe (or your family member\'s tribe) exercise fishing rights at the location where it occurred?')
      .should('have.length', 1);
  });

  it('when select NO option, open continue to general criteria', () => {
    cy.visit('/calculator/m-offense-fish-5-cont');

    cy.get('a:visible').contains(/^No$/).click();

    cy.url().should('include', '/calculator/m-offense-fish-6-cont');
  });
});
