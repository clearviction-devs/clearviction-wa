export default function testEligibleWithLFOPage(path: string, rcwAnchorText: string, rcwHref: string) {
  cy.visit(`/calculator/${path}`);
  cy.contains('may be eligible', { matchCase: false })
    .should('be.visible');
  cy.contains('petition')
    .should('have.attr', 'href', 'https://www.washingtonlawhelp.org/resource/filing-a-motion-to-remit-remove-financial-legal-obligations-in-district-or-municipal-court#i8627DE75-4487-42B2-9696-7DC430B66616');
  cy.contains(rcwAnchorText)
    .should('have.attr', 'href', rcwHref);
}
