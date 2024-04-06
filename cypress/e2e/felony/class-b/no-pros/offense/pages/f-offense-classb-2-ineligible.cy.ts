import testIneligiblePage from "../../../../../utils/testIneligiblePage";

describe("Felony Class B Ineligible Page", () => {
  it('should display ineligibility content due to RCW 9.94A.640(2)(a)', () => {
    testIneligiblePage('f-offense-classb-2-ineligible', '9.94A.640(2)(a)', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  })
})