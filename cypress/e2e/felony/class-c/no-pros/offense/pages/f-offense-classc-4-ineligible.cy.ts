import testIneligiblePage from "../../../../../utils/testIneligiblePage";

describe("Felony Class C Ineligible Page", () => {
  it('should display ineligibility content due to RCW 9.94A.640(2)(b)', () => {
    testIneligiblePage('f-offense-classc-4-ineligible', '9.94A.640(2)(b)', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  })
})