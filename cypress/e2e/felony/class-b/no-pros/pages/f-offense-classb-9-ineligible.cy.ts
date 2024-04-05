import testIneligiblePage from "../../../../utils/testIneligiblePage";

describe("Felony Class B Ineligible Page", () => {
  it('should display ineligibility content due to RCW 9.94A.640(2)(b)', () => {
    testIneligiblePage('f-offense-classb-9-ineligible', '9.94A.640(2)(b)', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  })
})