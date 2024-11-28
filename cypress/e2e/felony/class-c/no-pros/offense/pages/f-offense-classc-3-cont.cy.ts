import testNotSureModal from '../../../../../utils/testNotSureModal.ts';
import testPreviousButton from '../../../../../utils/testPreviousButton.ts';

describe('f-offense-classc-3-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-3-cont');
  });
  it('contains the proper content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1);
  });
  it('displays RCW 43.43.830 and directs to the proper link', () => {
    cy.contains('43.43.830')
      .should('be.visible')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=43.43.830');
  });
  it('directs to f-circ-classc-1-main when clicking No', () => {
    cy.get('[data-cy="calc-choice-1')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-circ-classc-1-main');
  });
  it('directs to f-offense-classc-6-cont when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-6-cont');
  });
  testNotSureModal();
  testPreviousButton('f-offense-classc-3-cont');
});
