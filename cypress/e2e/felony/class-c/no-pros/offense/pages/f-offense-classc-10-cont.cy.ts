import testNotSureModal from '../../../../../utils/testNotSureModal.ts';
import testPreviousButton from '../../../../../utils/testPreviousButton.ts';

describe('f-offense-classc-10-cont', () => {
  beforeEach(() => {
    cy.visit('/calculator/f-offense-classc-10-cont');
  });
  it('contains the proper content', () => {
    cy.get('[data-cy="calc-block-of-content"]')
      .should('be.visible')
      .should('have.length', 1);
  });
  it('displays 9.94A.640(2)(b) and directs to the proper link', () => {
    cy.contains('9.94A.640(2)(b)')
      .should('be.visible')
      .should('have.attr', 'href', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  });
  it('directs to f-circ-classcpro-1-main when clicking No', () => {
    cy.get('[data-cy="calc-choice-1')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-circ-classcpro-1-main');
  });
  it('directs to f-offense-classc-10-ineligible when clicking Yes', () => {
    cy.get('[data-cy="calc-choice-0')
      .should('be.visible')
      .click();
    cy.url().should('include', '/calculator/f-offense-classc-10-ineligible');
  });
  testNotSureModal();
  testPreviousButton('f-offense-classc-10-cont');
});
