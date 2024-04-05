describe("Felony Class B No-Pros Second Page", () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classb-2-cont');
  })
  it('should redirect users to Felony Class B Ineligible Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-2-ineligible')
  })
  it('should redirect users to Felony Class B No-Pros Third Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-3-cont')
  })
  it('should open "I\'m not sure" modal when choosing "I\'m not sure" option', () => {
    cy.get('[data-cy="not-sure-button"]')
      .should('be.visible')
      .click();
    cy.get('[data-cy="not-sure-pop-up-close"]')
      .should('be.visible')
      .click();
    cy.get('[data-cy="not-sure-popup"]')
      .should('not.exist')
  })
})