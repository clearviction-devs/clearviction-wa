describe('From Calculator first question', () => {
  describe('user choosing Eligible options', () => {
    it('can access possible eligible statement', () => {
      cy.visit('/calculator/head-start-3-cont');
      cy.get('[data-cy="calc-choice-0"]:visible')
        .should('have.attr', 'href', '/calculator/head-mis-4-cont')
        .click();

      cy.url().should('include', '/calculator/head-mis-4-cont');
      cy.get('a:visible')
        // We are using Match by Text here because we want to make sure that we are entering in
        // marijuana path, so if btn order change, we dont want to break the test
        .contains('Possession of marijuana')
        .as('possesionOfMarijuanaBtn')
        .should('have.length', 1);
      cy.get('@possesionOfMarijuanaBtn')
        .should('have.attr', 'href', '/calculator/m-offense-mari-1-cont')
        .click();

      cy.url().should('include', '/calculator/m-offense-mari-1-cont');
    });
  });
});
