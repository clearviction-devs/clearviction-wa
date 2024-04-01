import haveNecessaryInfoAssert from '../../utils/haveNecessaryInfoAssert.ts';
import sendToGeneralCriteriaAssert from '../../utils/sendToGeneralCriteriaAssert.ts';

describe('m-offense-fish-3-cont', () => {
  it('have all necessary information', () => {
    haveNecessaryInfoAssert('/calculator/m-offense-fish-3-cont');
  });

  it('when select NO option, open continue to general criteria', () => {
    sendToGeneralCriteriaAssert('/calculator/m-offense-fish-3-cont');
  });
});
