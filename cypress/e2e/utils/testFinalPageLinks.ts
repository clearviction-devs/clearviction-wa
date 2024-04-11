export default function testFinalPageLinks(path: string) {
  cy.visit(`/calculator/${path}`);
  // Feedback button
  cy.get('[data-cy="feedback-button"]')
    .should('have.attr', 'href')
    .and('include', 'forms');

  // Check another Conviction
  cy.get('[data-cy="check-another-conviction"]')
    .should('be.visible')
    .click();
  cy.url().should('include', '/calculator/head-initial-1-cont');

  // Share Calculator Link
  cy.get('[data-cy="share-calc-link"]')
    .should('be.visible')
    .click();

  // Share calculator modal
  cy.get('[data-cy="share-calc-modal"]')
    .should('have.length', 1)
    .should('be.visible');
}
