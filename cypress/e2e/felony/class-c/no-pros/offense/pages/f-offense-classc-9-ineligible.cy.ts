import testFinalPageLinks from '../../../../../utils/testFinalPageLinks.ts';
import testIneligiblePage from '../../../../../utils/testIneligiblePage.ts';
import testPreviousButton from '../../../../../utils/testPreviousButton.ts';

describe('Felony Class C Ineligible Page', () => {
  it('should display ineligibility content due to RCW 9.94A.640(2)(b)', () => {
    testIneligiblePage('f-offense-classc-9-ineligible', 'Washington Revised Code Annex § 9.94A.640(2)(b)', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  });
  it('should have the bottom links function properly', () => {
    testFinalPageLinks('f-offense-classc-9-ineligible');
  });
  it('directs to the previous page when clicked', () => {
    testPreviousButton('f-offense-classc-9-ineligible');
  });
});
