/// <reference types="cypress" />

describe('Open Seattle homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has the main header', () => {
    cy.get('h1').contains('Open Seattle');
  });

  it('has a clickable volunteer button', () => {
    cy.get('[data-cy=home-section]')
      .contains('Volunteer')
      .get('a[href*="https://airtable.com/shrU3QaEEyYH427HP"]');
  });

  it('has a clickable partner button', () => {
    cy.get('[data-cy=home-section]')
      .contains('Partner')
      .get('a[href*="https://airtable.com/shrHFwLdWCuIErqT5"]');
  });
});
