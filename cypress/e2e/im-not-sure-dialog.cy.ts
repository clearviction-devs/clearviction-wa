describe('When a page has "Im not sure button"', () => {
  it('select this button, open pop-up with some information and can be closed', () => {
    const SOME_PAGE_WITH_THIS_BUTTON = '/calculator/m-offense-fish-2-cont';
    cy.visit(SOME_PAGE_WITH_THIS_BUTTON);
    cy.get('[data-cy="not-sure-button"]:visible')
      .should('have.length', 1)
      .click();

    cy.get('[data-cy="not-sure-popup"]').should('be.visible');
    cy.get('[data-cy="not-sure-pop-up-close"]:visible')
      .should('have.length', 1)
      .click();
    cy.get('[data-cy="not-sure-popup"]').should('not.exist');
  });
});
