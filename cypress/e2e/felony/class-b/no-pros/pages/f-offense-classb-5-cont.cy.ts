describe("Felony Class B No-Pros Fifth Page", () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classb-5-cont');
  })
  it('should display "RCW 43.43.830" as a link to its respective WA State Legislature page', () => {
    cy.contains('43.43.830')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=43.43.830')
  })
  it('should display "RCW 9.94A.640(2)(b)" as a link to its respective WA State Legislature page', () => {
    cy.contains('9.94A.640(2)(b)')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640')
  })
  it('should redirect users to Felony Class B Sixth Page when "yes" button is clicked', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-offense-classb-6-cont')
  })
  it('should redirect users to Felony Class B No-Pros Surrounding Circumstances Main Page when "no" button is clicked', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', 'calculator/f-circ-classb-1-main')
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