export default function testIneligiblePage(link: string) {
  describe("f-classa-main-1-ineligble", () => {
    it('has ineligibility content', () => {
      cy.visit(`/calculator/${link}`);
      cy.contains('Your conviction is not eligible to vacate')
        .should('be.visible')
      cy.contains('as defined in RCW 9.94A.030')
        .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94A.030')
      cy.contains('resources page')
        .should('be.visible')
      cy.get('[data-cy="feedback-button"]:visible')
        .should('have.length', 1);
      cy.get('[data-cy="check-another-conviction"]:visible')
        .should('have.length', 1);
      cy.get('[data-cy="share-calc-link"]:visible')
        .should('have.length', 1);
    })
  })
}
