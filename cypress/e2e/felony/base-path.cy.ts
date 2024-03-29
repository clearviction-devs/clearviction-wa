describe('From Calculator first question', () => {
  describe('user choosing Eligible options', () => {
    it('can access Felony initial page', () => {
      cy.visit('/calculator/head-start-3-cont');
      cy.get('[data-cy="calc-choice-1"]:visible')
        .should('have.attr', 'href', '/calculator/head-felony-4-cont')
        .click();
      cy.url().should('include', '/calculator/head-felony-4-cont');
    })
  })
})