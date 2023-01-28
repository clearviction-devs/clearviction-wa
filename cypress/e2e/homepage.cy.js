/// <reference types="cypress" />

describe('Open Seattle homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has the main header', () => {
    cy.get('h1').contains('');
  });

});
