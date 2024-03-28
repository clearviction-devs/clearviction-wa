describe('From Home Page', () => {
  it('its possible to access calculator from Header btn', () => {
    cy.visit('/');
    // https://docs.cypress.io/guides/references/best-practices#Assigning-Return-Values
    cy.get('a:contains("Access Calculator"):visible')
      .as('accessCalculatorBtns')
      .should('have.length', 2);
    // Click on ACCESS CALCULATOR from Header
    cy.get('@accessCalculatorBtns').first().click();
    cy.url().should('include', '/calculator/head-initial-1-cont');

    cy.get('[data-cy="calc-choice-0"]:visible')
      .as('initialCalculatorBtn')
      .should('have.length', 1)
      .should('have.attr', 'href', '/calculator/head-start-2-cont');
    cy.get('@initialCalculatorBtn').click();

    cy.url().should('include', '/calculator/head-start-2-cont');
    cy.get('[data-cy="calc-choice-0"]:visible')
      .should('have.attr', 'href', '/calculator/head-mis-3-cont')
      .click();

    cy.url().should('include', '/calculator/head-mis-3-cont');
  });

  it('its possible to access calculator from Hero btn', () => {
    cy.visit('/');
    cy.get('a:contains("Access Calculator"):visible').as('accessCalculatorBtns');
    cy.get('@accessCalculatorBtns').should('have.length', 2);
    cy.get('@accessCalculatorBtns').eq(1).click();
    cy.url().should('include', '/calculator/head-initial-1-cont');

    cy.get('[data-cy="calc-choice-0"]:visible')
      .as('initialCalculatorBtn')
      .should('have.length', 1)
      .should('have.attr', 'href', '/calculator/head-start-2-cont');
    cy.get('@initialCalculatorBtn').click();

    cy.url().should('include', '/calculator/head-start-2-cont');
    cy.get('[data-cy="calc-choice-0"]:visible')
      .should('have.attr', 'href', '/calculator/head-mis-3-cont')
      .click();

    cy.url().should('include', '/calculator/head-mis-3-cont');
  });
});
