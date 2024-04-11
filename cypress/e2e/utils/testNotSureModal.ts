export default function testNotSureModal() {
  it('should open "I\'m not sure" modal when choosing "I\'m not sure" option', () => {
    cy.get('[data-cy="not-sure-button"]')
      .should('be.visible')
      .click();
    cy.get('[data-cy="not-sure-pop-up-close"]')
      .should('be.visible')
      .click();
    cy.get('[data-cy="not-sure-popup"]')
      .should('not.exist');
  });
}
