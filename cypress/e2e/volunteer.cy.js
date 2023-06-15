/// <reference types="cypress" />

describe("Volunteer User Stories", () => {
  // user navigates to main screen
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // user navigates to get-involved page via navbar
  it("User can navigate to 'Get Involved' page from homewpage", async () => {
    // user must click on hamburger menu to open navbar before navigating to get-involved page
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('be.not.visible');
    cy.get('.hamburger-btn').click();
    cy.get('.MuiDrawer-root > .MuiPaper-root').should('be.visible');

    cy.get('.MuiDrawer-root > .MuiPaper-root > > ul > li > a').contains("Get Involved").click();
    cy.location('pathname', {timeout: 5000}).should('include', '/get-involved');
    cy.get('[data-testid="page-heading"]').contains("Get Involved");
  });

  
  // user can use the page footer to navigate to get involved page
  // it("User can find 'Get Involved page from footer", () => {
  //   cy.get('[data-testid="footer-link"]').contains("Get Involved").click();
  //   cy.location('pathname', {timeout: 5000}).should('include', '/get-involved')
  //   cy.get('[data-testid="page-heading"]').contains("Get Involved");
  // })
  
  // user clicks on hero volunteer card button
  it("User can read about volunteering at clearviction and open roles", () => {
    cy.visit("http://localhost:3000/get-involved");

    // user is navigated to #volunteer section of page
    cy.get('a[href*="#volunteer"]').click();
    cy.get('#volunteer > h2').should("be.visible");
    cy.location('pathname', {timeout: 5000}).should('include', '/get-involved');
    
    // user can see open roles at clearviction
    cy.get('#roles-airtable-embed', {timeout: 7000})
    .its('0.contentDocument.body')
    .should('be.visible')
    // user can apply for positions through iframe job openings
    .then(cy.wrap)
    .find('a').should('include.text', 'Apply for position');
  })

  // user clicks on donate card button
  it("Allows users to get involved through donations", () => {
    // user is navigated to donate page
    cy.visit("http://localhost:3000/get-involved", {timeout: 5000});
    cy.get('a[href="/donate"]').contains("donate").click();
    cy.location('pathname', {timeout: 5000}).should('include', '/donate')
    cy.get('[data-testid="page-heading"]').contains("Donate");

    // user can see the iframe donorbox to make a donation
    cy.get('[data-testid="donor-box"]', {timeout: 10000})
    .its('0.contentDocument.body')
    .should('be.visible');

    // user can read more about donating via the FAQ
    cy.scrollTo('bottom');
    cy.get('[data-testid="donate-faq"]').contains('Donation FAQ');
  })

  // // user goes back to get involved page
  it("User can explore becoming a partner through the partner page", () => {
    cy.visit("http://localhost:3000/get-involved", {timeout: 5000});
  // user clicks on partner with us hero card button
    cy.get('a[href*="#partner-with-us"]').click();
  // user is navigated to bottom of page and clicks on contact us button
    cy.get('#partner-with-us > h2').should("be.visible");
    cy.location('pathname', {timeout: 5000}).should('include', '/[artner-with-us]');
  // user is navigated to contact page
    cy.get('#partner-with-us a[href=/contact]').click();
  })

});
