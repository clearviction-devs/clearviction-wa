export default function sendToGeneralCriteriaAssert(url: string) {
  cy.visit(url);

  cy.get('[data-cy="calc-choice-1"]:visible')
    .click();
  cy.url().should('include', '/calculator/m-offense-fish-6-cont');
}
