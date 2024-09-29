export default function testFinalPageLinks(path: string) {
  cy.visit(`/calculator/${path}`);

  // see more resources
  cy.get('[data-cy="see-more-resources"]')
    .should('be.visible')
    .click();
  cy.url().should('include', '/see-more-resources');

  // Check another Conviction
  cy.get('[data-cy="check-another-conviction"]')
    .should('be.visible')
    .click();
  cy.url().should('include', '/calculator/head-initial-1-cont');
}
