describe('m-offense-mari-1-cont', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-mari-1-cont');

    cy.get('[data-cy="calc-block-of-content"]')
      .should('have.length', 1)
      .should('be.visible');

    cy.get('a:visible')
      .filter((_index, element: any) => element.getAttribute('href')
        .includes('determining-blake-eligibility'))
      .should('have.length', 1)
      .should('have.attr', 'href', 'https://civilsurvival.org/guides/determining-blake-eligibility/');
  });

  it('when select NOT BLACK ELIGIBLE btn, open general criteria path', () => {
    cy.visit('/calculator/m-offense-mari-1-cont');

    cy.get('[data-cy="calc-choice-0"]:visible')
      .should('have.attr', 'href', '/calculator/m-offense-main-1-cont')
      .click();

    cy.url().should('include', '/calculator/m-offense-main-1-cont');
  });
});
