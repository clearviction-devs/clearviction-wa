import testNotSureModal from '../../../../../utils/testNotSureModal.ts';
import testPreviousButton from '../../../../../utils/testPreviousButton.ts';

describe('f-offense-classc-6-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-6-cont');
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
  it('directs to f-offense-classc-8-cont when clicking No', () => {
    cy.get('[data-cy="calc-choice-1')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-8-cont');
  });
  it('directs to f-offense-classc-5-cont when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-5-cont');
  });
  testNotSureModal();
  testPreviousButton('f-offense-classc-6-cont');
});
