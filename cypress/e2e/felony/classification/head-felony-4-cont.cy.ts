import testNotSureModal from "../../utils/testNotSureModal";

describe("Felony Classification Page", () => {
  beforeEach(() => {
    cy.visit('/calculator/head-felony-4-cont');
  })

  it('should redirect to Felony Class A page when choosing Felony Class A option', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .should('contain', 'Felony Class A')
      .click();
    cy.url().should('include', 'calculator/f-classa-main-1-ineligible');
  })
  it('should redirect to Felony Class B page when choosing Felony Class B option', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .should('contain', 'Felony Class B')
      .click();
    cy.url().should('include', 'calculator/f-start-classb-1-cont');
  })
  it('should redirect to Felony Class C page when choosing Felony Class C option', () => {
    cy.get('[data-cy="calc-choice-2"]')
      .should('be.visible')
      .should('contain', 'Felony Class C')
      .click();
    cy.url().should('include', 'calculator/f-start-classc-1-cont');
  })
  testNotSureModal();
})