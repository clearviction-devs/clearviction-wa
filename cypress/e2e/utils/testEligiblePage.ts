export default function testEligiblePage(path: string) {
  cy.visit(`/calculator/${path}`);
  cy.contains('may be eligible', { matchCase: false })
    .should('be.visible');
  cy.contains('directory')
    .should('have.attr', 'href', 'https://www.courts.wa.gov/court_dir/?fa=court_dir.county');
}
