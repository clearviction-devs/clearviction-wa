describe('m-offense-fish-6-cont', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-fish-6-cont');

    cy.get('h1:visible')
      .contains('Continue to general criteria')
      .should('have.length', 1);
    cy.get('p:visible').contains('Based on your answers, it looks like your conviction is not eligible under the fishing regulation special clause')
      .should('have.length', 1);
  });

  it('when select Continue option, open continue to general criteria', () => {
    cy.visit('/calculator/m-offense-fish-6-cont');

    cy.get('a:visible').contains(/^Continue$/)
      .should('have.attr', 'href', '/calculator/m-offense-main-1-cont')
      .click();

    cy.url().should('include', '/calculator/m-offense-main-1-cont');
  });

  it('has an a link "Report an error" with correct href', () => {
    cy.visit('/calculator/m-offense-fish-6-cont');

    cy.get('a:visible').contains('Report an error')
      .should('have.attr', 'href', 'https://docs.google.com/forms/d/e/1FAIpQLSf8JvZfgYPBV36Ow4Qn_KyxkdmzI3szvZej-L1MbFO9vSGKWQ/viewform')
      .click();
  });
});
