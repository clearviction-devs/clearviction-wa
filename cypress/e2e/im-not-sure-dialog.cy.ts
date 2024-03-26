describe('When a page has "Im not sure button"', () => {
  it('select this button, open pop-up with some information', () => {
    const SOME_PAGE_WITH_THIS_BUTTON = '/calculator/m-offense-fish-2-cont';
    cy.visit(SOME_PAGE_WITH_THIS_BUTTON);
    cy.get('button:visible').contains(/^I'm not sure$/).click();

    cy.get('div[role="dialog"]').should('be.visible');
    cy.get('button:visible').contains('Okay').should('have.length', 1);
  });
});
