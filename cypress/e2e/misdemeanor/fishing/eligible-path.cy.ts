describe('From Calculator first question', () => {
  describe('user choosing Eligible options', () => {
    it('can access Fishing Violation initial page', () => {
      cy.visit('/calculator/head-mis-3-cont');
      cy.get('[data-cy="calc-choice-0"]:visible')
        .should('have.attr', 'href', '/calculator/head-special-4-cont')
        .click();

      cy.url().should('include', '/calculator/head-special-4-cont');
      cy.get('a:visible')
        // We are using Match by Text here because we want to make sure that we are entering in
        // Fishing path, so if btn order change, we dont want to break the test
        .contains('Fishing Violation')
        .as('fishingViolationBtn')
        .should('have.length', 1);
      cy.get('@fishingViolationBtn')
        .should('have.attr', 'href', '/calculator/m-offense-fish-1-cont')
        .click();

      cy.url().should('include', '/calculator/m-offense-fish-1-cont');
    });

    it('from fishing initial page, can receive Eligible page', () => {
      cy.visit('/calculator/m-offense-fish-1-cont');
      cy.get('[data-cy="calc-choice-0"]:visible')
        .as('continueBtn')
        .should('have.length', 1);
      cy.get('@continueBtn')
        .should('have.attr', 'href', '/calculator/m-offense-fish-2-cont')
        .click();

      cy.url().should('include', '/calculator/m-offense-fish-2-cont');
      cy.get('[data-cy="calc-choice-0"]:visible')
        .should('have.attr', 'href', '/calculator/m-offense-fish-3-cont')
        .click();

      cy.url().should('include', '/calculator/m-offense-fish-3-cont');
      cy.get('[data-cy="calc-choice-0"]:visible')
        .should('have.attr', 'href', '/calculator/m-offense-fish-4-cont')
        .click();

      cy.url().should('include', '/calculator/m-offense-fish-4-cont');
      cy.get('[data-cy="calc-choice-0"]:visible')
        .should('have.attr', 'href', '/calculator/m-offense-fish-5-cont')
        .click();

      cy.url().should('include', '/calculator/m-offense-fish-5-cont');
      cy.get('[data-cy="calc-choice-0"]:visible')
        .should('have.attr', 'href', '/calculator/m-offense-fish-5-eligible')
        .click();

      cy.url().should('include', '/calculator/m-offense-fish-5-eligible');
    });
  });
});
