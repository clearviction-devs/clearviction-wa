export default function haveNecessaryInfoAssert(url: string) {
  cy.visit(url);

  cy.get('[data-cy="calc-block-of-content"]')
    .should('have.length', 1)
    .should('be.visible');

  cy.get('[data-cy="not-sure-button"]:visible')
    .should('have.length', 1);
  // =^ is a selector that means "starts with"
  // so we are taking all elements that have data-cy that starts with "calc-choice-"
  cy.get('[data-cy^="calc-choice-"]:visible')
    .should('have.length', 2);
}
