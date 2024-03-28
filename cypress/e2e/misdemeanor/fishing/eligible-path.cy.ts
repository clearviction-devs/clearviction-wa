describe('From Calculator first question', () => {
  describe('user choosing Eligible options', () => {
    it('can access Fishing Violation initial page', () => {
      cy.visit('/calculator/head-start-3-cont');

      cy.get('strong:contains("Was this offense a misdemeanor or gross misdemeanor in Washington state?")')
        .should('be.visible');
      cy.get('a:visible').contains('Yes').click();

      cy.url().should('include', '/calculator/head-mis-4-cont');
      cy.get('a:visible')
        .contains('Fishing Violation')
        .as('fishingViolationBtn')
        .should('have.length', 1);
      cy.get('@fishingViolationBtn').click();

      cy.url().should('include', '/calculator/m-offense-fish-1-cont');
      cy.get('h1:visible')
        .contains(/^Violation of Fishing Regulation$/)
        .should('have.length', 1);
    });

    it('from fishing initial page, can receive Eligible page', () => {
      cy.visit('/calculator/m-offense-fish-1-cont');
      cy.get('a:visible').contains(/^Continue$/)
        .as('continueBtn')
        .should('have.length', 1);
      cy.get('@continueBtn').click();

      cy.url().should('include', '/calculator/m-offense-fish-2-cont');
      cy.get('strong:visible').contains('Are you a member of a tribe?').should('have.length', 1);
      cy.get('a:visible').contains(/^Yes$/).click();

      cy.url().should('include', '/calculator/m-offense-fish-3-cont');
      cy.get('strong:visible')
        .contains('Did you (or your family member) receive a fishing related conviction while exercising a treaty right?')
        .should('have.length', 1);
      cy.get('a:visible').contains('Yes').click();

      cy.url().should('include', '/m-offense-fish-4-cont');
      cy.get('strong:visible')
        .contains('Was it before January')
        .should('have.length', 1);
      cy.get('a:visible').contains('Yes').click();

      cy.url().should('include', '/calculator/m-offense-fish-5-cont');
      cy.get('strong:visible')
        .contains('Did your tribe (or your family member\'s tribe)')
        .should('have.length', 1);
      cy.get('a:visible').contains('Yes').click();

      cy.url().should('include', '/calculator/m-offense-fish-5-eligible');
      cy.get('h1:visible')
        .contains('Your Conviction May Be Eligible to Vacate!')
        .should('have.length', 1);
    });

    it('on Eligible page, check that important info are working');
  });
});
