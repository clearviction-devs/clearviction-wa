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

    cy.get('a:visible').contains(/^Next$/)
      .as('initialCalculatorBtn')
      .should('have.length', 1);
    cy.get('@initialCalculatorBtn').click();

    cy.url().should('include', '/calculator/head-start-2-cont');
    cy.get('h1:visible')
      .contains('Quick Start Guide')
      .should('have.length', 1);
    cy.get('a:visible').contains(/^Start$/).click();

    cy.url().should('include', '/calculator/head-start-3-cont');
  });

  it('its possible to access calculator from Hero btn', () => {
    cy.visit('/');
    cy.get('a:contains("Access Calculator"):visible').as('accessCalculatorBtns');
    cy.get('@accessCalculatorBtns').should('have.length', 2);
    cy.get('@accessCalculatorBtns').eq(1).click();
    cy.url().should('include', '/calculator/head-initial-1-cont');

    cy.get('a:visible').contains(/^Next$/)
      .as('initialCalculatorBtn')
      .should('have.length', 1);
    cy.get('@initialCalculatorBtn').click();

    cy.url().should('include', '/calculator/head-start-2-cont');
    cy.get('h1:visible')
      .contains('Quick Start Guide')
      .should('have.length', 1);
    cy.get('a:visible').contains(/^Start$/).click();

    cy.url().should('include', '/calculator/head-start-3-cont');
  });
});
