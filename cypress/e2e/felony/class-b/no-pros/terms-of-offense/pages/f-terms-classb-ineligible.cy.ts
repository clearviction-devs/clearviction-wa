import testIneligiblePage from '../../../../../utils/testIneligiblePage.ts';

describe('Felony Class B No-Pros Ineligible Page', () => {
  it('should display ineligible content due to RCW 9.94A.640(1)', () => {
    testIneligiblePage('f-terms-classb-1-ineligible', '9.94A.640(2)(e)', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  });
});
