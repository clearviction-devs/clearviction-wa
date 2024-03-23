describe('Fishing ineligible choises', () => {
  describe('m-offense-fish-2-cont', () => {
    it('when select NO option, open continue to general criteria', () => {
      cy.visit('/calculator/m-offense-fish-2-cont');

      cy.get('strong:visible')
        .contains('Are you a member of a tribe?')
        .should('have.length', 1);
      cy.get('p:visible').contains('You can also apply on behalf of a deceased family member in the tribe who meets the criteria.');
      cy.get('a:visible').contains(/^No$/).click();

      cy.url().should('include', '/calculator/m-offense-fish-6-cont');
      cy.get('h1:visible')
        .contains('Continue to general criteria')
        .should('have.length', 1);
      cy.get('a:visible').contains(/^Continue$/).click();
      cy.url().should('include', '/calculator/m-offense-main-1-cont');
    });

    it('when select "I\'m not sure" option, open pop-up with some information', () => {
      cy.visit('/calculator/m-offense-fish-2-cont');
      cy.get('button:visible').contains(/^I'm not sure$/).click();

      cy.get('div[role="dialog"]').should('be.visible');
      cy.get('button:visible').contains('Okay').should('have.length', 1);
    });
  });

  describe('m-offense-fish-3-cont', () => {
    it('when select NO option, open continue to general criteria', () => {
      cy.visit('/calculator/m-offense-fish-3-cont');

      cy.get('strong:visible')
        .contains('Did you (or your family member) receive a fishing related conviction while exercising a treaty right?')
        .should('have.length', 1);
      cy.get('a:visible').contains(/^No$/).click();

      cy.url().should('include', '/calculator/m-offense-fish-6-cont');
    });

    it('when select "I\'m not sure" option, open pop-up with some information', () => {
      cy.visit('/calculator/m-offense-fish-3-cont');
      cy.get('button:visible').contains(/^I'm not sure$/).click();

      cy.get('div[role="dialog"]').should('be.visible');
      cy.get('button:visible').contains('Okay').should('have.length', 1);
    });
  });

  describe('m-offense-fish-4-cont', () => {
    it('when select NO option, open continue to general criteria', () => {
      cy.visit('/calculator/m-offense-fish-4-cont');

      cy.get('strong:visible')
        .contains('Was it before January 1st, 1975?')
        .should('have.length', 1);
      cy.get('a:visible').contains(/^No$/).click();

      cy.url().should('include', '/calculator/m-offense-fish-6-cont');
    });

    it('when select "I\'m not sure" option, open pop-up with some information', () => {
      cy.visit('/calculator/m-offense-fish-4-cont');
      cy.get('button:visible').contains(/^I'm not sure$/).click();

      cy.get('div[role="dialog"]').should('be.visible');
      cy.get('button:visible').contains('Okay').should('have.length', 1);
    });
  });

  describe('m-offense-fish-5-cont', () => {
    it('when select NO option, open continue to general criteria', () => {
      cy.visit('/calculator/m-offense-fish-5-cont');

      cy.get('strong:visible')
        .contains('Did your tribe (or your family member\'s tribe) exercise fishing rights at the location where it occurred?')
        .should('have.length', 1);
      cy.get('a:visible').contains(/^No$/).click();

      cy.url().should('include', '/calculator/m-offense-fish-6-cont');
    });

    it('when select "I\'m not sure" option, open pop-up with some information', () => {
      cy.visit('/calculator/m-offense-fish-5-cont');
      cy.get('button:visible').contains(/^I'm not sure$/).click();

      cy.get('div[role="dialog"]').should('be.visible');
      cy.get('button:visible').contains('Okay').should('have.length', 1);
    });
  });
});
