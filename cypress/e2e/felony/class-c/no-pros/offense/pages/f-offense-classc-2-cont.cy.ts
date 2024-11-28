import testNotSureModal from '../../../../../utils/testNotSureModal.ts';
import testPreviousButton from '../../../../../utils/testPreviousButton.ts';

describe('f-offense-classc-2-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-2-cont');
  });
  it('displays the required content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1);
  });
  it('directs to f-offense-classc-4-cont when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-4-cont');
  });
  it('directs to f-offense-classc-3-cont when clicking No', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-3-cont');
  });
  testNotSureModal();
  testPreviousButton('f-offense-classc-2-cont');
});
