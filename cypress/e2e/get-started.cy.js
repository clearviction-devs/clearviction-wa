/// <reference types="cypress" />

describe("Open Seattle get-started page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/get-started");
  });

  it("URL has correct path", () => {
    cy.url()
      .should('include', '/get-started');
  });

  it("Button navigates to calculator page", () => {
    cy.get('a').contains('Access Calculator').click();
    cy.location('pathname').should('eq', '/calculator/landing-0').go('back');
  });

  it("Renders Court Forms title", () => {
    cy.get("#step-1-documents").contains("Step 1: Documents");
  });

  it("Renders Gathering Court document description", () => {
    cy.get('p').contains("Gathering documents is the first step in the process. This includes any forms or records that pertain to your conviction. Please gather all relevant court forms and get a copy of your Criminal History Record Information (CHRI).");
  });

  it("Renders Court Forms title", () => {
    cy.get('h3').contains("Court Forms");
  }); 

  it("Renders court form accordian components", () => {
    cy.get("div[data-testid=get-started-accordian]").should('exist');
  });

  it("Expands (Gross) Misdemeanor accordian details with working link to NW justice project", () => {
    cy.get("div[data-testid=courtForm-0]").click()
      .contains("details about the eligibility to vacate (p. 2-4) and the needed court forms (p. 5-13).");

    // cy.get('a').contains("Vacation packet from Northwest Justice Project")
    //   .click().get('#unified-runner').should('exist').go(-1);
  });

  it("Expands Marijuana Misdemeanor accordian details", () => {
    cy.get("div[data-testid=courtForm-1]").click()
      .contains("If you are convicted of a crime, your criminal record will continue to show that conviction in background checks. Having a criminal record might negatively affect your housing, employment, and educational opportunities.");
  });

  it("Expands Prostitutions Convictions accordian details", () => {
    cy.get("div[data-testid=courtForm-2]").click()
      .contains("To be eligible to vacate, there are specific criteria that your conviction must meet.");
  });
});