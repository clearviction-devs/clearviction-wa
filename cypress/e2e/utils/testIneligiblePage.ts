export default function testIneligiblePage(path: string, rcwAnchorText: string, rcwHref: string) {
  cy.visit(`/calculator/${path}`);
  cy.contains('not eligible to vacate')
    .should('be.visible')
  cy.contains(rcwAnchorText)
    .should('be.visible')
    .should('have.attr', 'href', rcwHref);
}
