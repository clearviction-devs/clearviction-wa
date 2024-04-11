import finalPageLinks from '../../../../../utils/finalPageLinks.ts';
import testPreviousButton from '../../../../../utils/previousButton.ts';
import testIneligiblePage from '../../../../../utils/testIneligiblePage.ts';

describe('Felony Class C Ineligible Page', () => {
  it('should display ineligibility content due to RCW 9.94A.640(2)(g)', () => {
    testIneligiblePage('f-offense-classc-11-ineligible', '9.94A.640(2)(g)', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  });
  it('should have the bottom links function properly', () => {
    finalPageLinks('f-offense-classc-11-ineligible');
  });
  it('directs to the previous page when clicked', () => {
    testPreviousButton('f-offense-classc-11-ineligible');
  });
});
