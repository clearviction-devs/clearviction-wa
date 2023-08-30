import React from 'react';

export interface StaticCalcProps {
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
        isExternalLink: boolean;
        url: string;
      }[];
      isQuestion: boolean;
      isFinalPage: boolean;
      isEligible: boolean;
      isUndetermined: boolean;
    };
    calculatorConfig: {
      legalDisclaimer: string;
      feedback: {
        linkText: string;
        allOtherFeedbackUrl: string;
        isUndeterminedUrl: string;
      };
      checkAnotherConviction: {
        linkText: string;
        linkTo: {
          slug: {
            current: string;
          };
        };
      };
      errorReportingForm: {
        linkText: string;
        errorReportingFormUrl: string;
      };
      notSureAnswer: {
        header: string;
        promptText: string;
        content: any[];
        closeText: string;
      };
    };
  }

export interface SharedCalcProps {
    isFirstPage: () => boolean;
    // eslint-disable-next-line no-unused-vars
    addToResponses: (answer: string) => void;
    openNotSurePopup: boolean;
    setOpenNotSurePopup: React.Dispatch<React.SetStateAction<boolean>>
    openSharePopup: boolean;
    setOpenSharePopup: React.Dispatch<React.SetStateAction<boolean>>;
    calcFirstPageUrl: string;
    handleCloseResults: () => void;
    setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  }
