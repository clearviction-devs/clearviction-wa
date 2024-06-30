export default interface StaticCalcProps {
    page: {
      title: string;
      slug: string;
      content: any[];
      choices: {
        _key: string;
        _type: string;
        label: string;
        linkTo: {
          slug: {
            current: string;
          };
        };
        linkToOtherPageType: {
          slug: {
            current: string;
          };
        };
        isExternalLink: boolean;
        url: string;
      }[];
      isQuestion: boolean;
      isFinalPage: boolean;
      isEligible: boolean;
    };
    calculatorConfig: {
      legalDisclaimer: string;
      feedback: {
        linkText: string;
        feedbackUrl: string;
      };
      checkAnotherConviction: {
        linkText: string;
        linkTo: {
          slug: {
            current: string;
          };
        };
      };
      notSureAnswer: {
        header: string;
        promptText: string;
        content: any[];
        closeText: string;
      };
    };
  }
