import testNotSureModal from '../../../../../utils/testNotSureModal.ts';
import testPreviousButton from '../../../../../utils/testPreviousButton.ts';

describe('f-offense-classc-4-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-4-cont');
  });
  it('displays content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1);
  });
  it('contains and links revised code of washington 9A.36.021', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .contains('RCW 9A.36.021')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/rcw/default.aspx?cite=9a.36.021');
  });
  it('directs to f-offense-classc-4-ineligible when clicking No', () => {
    cy.get('[data-cy="calc-choice-1')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-4-ineligible');
  });
  it('directs to f-offense-classc-5-cont when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-5-cont');
  });
  testNotSureModal();
  testPreviousButton('f-offense-classc-4-cont');
});
