import testIneligiblePage from "../../utils/testIneligiblePage"

describe("Felony Class A Page", () => {
  it('should display ineligibility content due to RCW 9.94A.030', () => {
    testIneligiblePage('f-classa-main-1-ineligible', 'RCW 9.94A.030', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94A.030');
  })
})