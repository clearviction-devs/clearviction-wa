import testNotSureModal from '../../../../../utils/testNotSureModal.ts';
import testPreviousButton from '../../../../../utils/testPreviousButton.ts';

describe('f-offense-classc-1-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-1-cont');
  });
  it('displays the proper content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1);
  });
  it('directs to f-offense-classc-1-ineligible when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0"]')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-1-ineligible');
  });
  it('directs to f-offense-classc-2-cont when clicking No', () => {
    cy.get('[data-cy="calc-choice-1"]')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-2-cont');
  });
  testNotSureModal();
  testPreviousButton('f-offense-classc-1-cont');
});
