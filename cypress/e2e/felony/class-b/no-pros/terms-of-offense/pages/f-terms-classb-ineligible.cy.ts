import testEligibleWithLFOPage from '../../../../../utils/testEligibleWithLFOPage.ts';

describe("Felony Class B No-Pros 'Eligible with LFO' Page", () => {
  it('should display "eligible with LFO" content due to RCW 9.94A.640(1)', () => {
    testEligibleWithLFOPage('f-terms-classb-1-ineligible', '9.94A.640(1)', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  });
});
