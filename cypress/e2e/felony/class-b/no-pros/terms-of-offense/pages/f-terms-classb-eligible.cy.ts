import testEligiblePage from "../../../../../utils/testEligiblePage";

describe("Felony Class B No-Pros Eligible Page", () => {
  it('should display eligibility content', () => {
    testEligiblePage('f-terms-classb-1-eligible');
  })
})