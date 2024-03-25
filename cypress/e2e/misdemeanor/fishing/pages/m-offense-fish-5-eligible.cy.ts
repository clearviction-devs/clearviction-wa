describe.only('m-offense-fish-5-eligible', () => {
  it('have all necessary information', () => {
    cy.visit('/calculator/m-offense-fish-5-eligible');

    cy.get('h1:visible')
      .contains('Your Conviction May Be Eligible to Vacate!')
      .should('have.length', 1);
    cy.get('strong:visible')
      .contains('Step 1: Read the Local Court Rules')
      .should('have.length', 1);
    cy.get('strong:visible')
      .contains('Step 2: Fill out the Form')
      .should('have.length', 1);
    cy.get('strong:visible')
      .contains('Step 3: Make Copies')
      .should('have.length', 1);
  });

  it('has a Give Us Your Feedback button', () => {
    cy.visit('/calculator/m-offense-fish-5-eligible');

    cy.get('a:visible').contains(/^Give us your feedback$/)
      .should('have.attr', 'href', 'https://forms.gle/RNzxdMgns4FFivU1A');
  });

  it('has a Download Response button', () => {
    cy.visit('/calculator/m-offense-fish-5-eligible');

    cy.get('button:visible').contains(/^Download responses$/)
      .should('have.length', 1);
  });
});
