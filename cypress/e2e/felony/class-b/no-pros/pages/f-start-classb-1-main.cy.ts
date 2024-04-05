describe("Felony Class B No-Pros Main Page", () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classb-1-main');
  })
  it('should redirect users to Felony Class B No-Pros Second Page when "continue" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-2-cont')
  })
})