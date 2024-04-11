import testPreviousButton from '../../../../../utils/previousButton.ts';
import testNotSureModal from '../../../../../utils/testNotSureModal.ts';

describe('f-offense-classc-8-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-8-cont');
  });
  it('contains the proper content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1);
  });
  it('displays RCW 9A.56.210 and directs to the proper link', () => {
    cy.contains('9A.56.210')
      .should('be.visible')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/rcw/default.aspx?cite=9A.56.210');
  });
  it('displays 9.94A.640(2)(b) and directs to the proper link', () => {
    cy.contains('9.94A.640(2)(b)')
      .should('be.visible')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  });
  it('directs to f-offense-classc-8-ineligible when clicking No', () => {
    cy.get('[data-cy="calc-choice-1')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-8-ineligible');
  });
  it('directs to f-offense-classc-9-cont when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-9-cont');
  });
  testNotSureModal();
  testPreviousButton('f-offense-classc-8-cont');
});
