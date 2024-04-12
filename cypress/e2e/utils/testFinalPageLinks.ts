export default function testFinalPageLinks(path: string) {
  cy.visit(`/calculator/${path}`);

  // Check another Conviction
  cy.get('[data-cy="check-another-conviction"]')
    .should('be.visible')
    .click();
  cy.url().should('include', '/calculator/head-initial-1-cont');

  // Share Calculator Link
  cy.get('[data-cy="share-calc-link"]').as('btn');
  cy.get('@btn').click();

  // Share calculator modal
  cy.get('[data-cy="share-calc-modal"]')
    .should('have.length', 1)
    .should('be.visible');
}
