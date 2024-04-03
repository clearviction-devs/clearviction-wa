describe('Offense Classification Page', () => {
  it('should redirect to the Felony page when choosing Felony option', () => {
    cy.visit('/calculator/head-start-3-cont');
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .should('have.attr', 'href', '/calculator/head-felony-4-cont')
      .should('contain', 'Felony')
      .click();
    cy.url().should('include', '/calculator/head-felony-4-cont');
  })
})