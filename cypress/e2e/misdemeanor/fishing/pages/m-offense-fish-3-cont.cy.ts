describe('m-offense-fish-3-cont', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-fish-3-cont');

    cy.get('strong:visible')
      .contains('Did you (or your family member) receive a fishing related conviction while exercising a treaty right?')
      .should('have.length', 1);
  });

  it('when select NO option, open continue to general criteria', () => {
    cy.visit('/calculator/m-offense-fish-3-cont');

    cy.get('a:visible').contains(/^No$/).click();

    cy.url().should('include', '/calculator/m-offense-fish-6-cont');
  });

  it('when select "I\'m not sure" option, open pop-up with some information', () => {
    cy.visit('/calculator/m-offense-fish-3-cont');
    cy.get('button:visible').contains(/^I'm not sure$/).click();

    cy.get('div[role="dialog"]').should('be.visible');
    cy.get('button:visible').contains('Okay').should('have.length', 1);
  });
});
