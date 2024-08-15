export default function testFinalPageLinks(path: string) {
  cy.visit(`/calculator/${path}`);

  // Check another Conviction
  cy.get('[data-cy="check-another-conviction"]')
    .should('be.visible')
    .click();
  cy.url().should('include', '/calculator/head-initial-1-cont');
}
