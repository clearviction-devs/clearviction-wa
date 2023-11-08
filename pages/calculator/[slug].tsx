import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useRef, useState } from 'react';

import CalcHeader from '../../components/calculator/misdemeanor/CalcHeader.tsx';
import FinalPageLinksContainer, { ErrorReportContainer, ShareCalcContainer } from '../../components/calculator/misdemeanor/CTAContainers.tsx';
import NotSurePopup, { ShareCalculatorPopup } from '../../components/calculator/misdemeanor/PopupContainers.tsx';
import QandAContainer from '../../components/calculator/misdemeanor/QandAContainer.tsx';
import ResultsDownloadContainer from '../../components/calculator/misdemeanor/ResultsDownloadContainer.tsx';
import externalLinks from '../../components/functional/ExternalLinks.tsx';
import MailchimpForm from '../../components/functional/MailchimpForm.tsx';
import IndividualPageHead from '../../components/helper/IndividualPageHead.tsx';
import Results from '../../components/helper/Results.tsx';
import { StaticCalcProps } from '../../utils/calculator.props.ts';
import {
  getCalculatorConfig,
  getCalculatorPageBySlug,
  getCalculatorPagePaths,
} from '../../utils/sanity.client.ts';

export default function CalculatorSlugRoute({ page, calculatorConfig }: StaticCalcProps) {
  // all state and functions here are shared between multiple secondary components
  const [openNotSurePopup, setOpenNotSurePopup] = useState(false);
  const [openSharePopup, setOpenSharePopup] = useState(false);
  const [responseObject, setResponseObject] = useState({});
  const [showResults, setShowResults] = useState(false);

  const calcFirstPageUrl = 'https://clearviction.org/calculator/head-initial-1-cont';
  const isFirstPage = () => page.slug === 'head-initial-1-cont';
  const contentRef = useRef<HTMLDivElement>(null);

  const addToResponses = (answer: string) => {
    // delete object when start over
    if (page.slug === 'head-initial-1-cont') setResponseObject({});
    if (
      answer !== 'Continue'
      && answer !== 'Next'
      && answer !== 'Start'
      && page.slug !== 'head-mis-3-cont'
    ) {
      setResponseObject({ ...responseObject, [page.slug]: answer });
    }
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  externalLinks();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, [page]);

  return (
    <>
      <IndividualPageHead
        title="Check the Eligibility to Vacate your Misdemeanor with Clearviction"
        metaContent="Determine if your misdemeanor or gross misdemeanor is eligible to vacate in Washington State with Clearviction's eligibility calculator."
      />

      <CalcHeader page={page} isFirstPage={isFirstPage} />

      <Container
        ref={contentRef}
        component={Container}
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="calculator-container-outer"
        tabIndex={-1}
      >
        <QandAContainer
          page={page}
          calculatorConfig={calculatorConfig}
          addToResponses={addToResponses}
          setOpenNotSurePopup={setOpenNotSurePopup}
        />

        {
          (page.isFinalPage) && (
            <>
              <FinalPageLinksContainer
                page={page}
                calculatorConfig={calculatorConfig}
                setOpenSharePopup={setOpenSharePopup}
                calcFirstPageUrl={calcFirstPageUrl}
              />
              <Box
                maxWidth="60ch"
                textAlign="center"
                id="legal-disclaimer-container"
              >
                <Typography variant="caption" sx={{ fontWeight: 'light' }}>
                  {calculatorConfig.legalDisclaimer}
                </Typography>
              </Box>
            </>
          )
        }

        {
          (page.isFinalPage && page.isEligible) && (
            <>
              <ResultsDownloadContainer
                handleCloseResults={handleCloseResults}
                setShowResults={setShowResults}
              />
              <MailchimpForm />
            </>
          )
        }

        {
          (page.isEligible && showResults) && (
            <Results
              responseObject={responseObject}
              handleCloseResults={handleCloseResults}
            />
          )
        }

      </Container>

      <NotSurePopup
        calculatorConfig={calculatorConfig}
        openNotSurePopup={openNotSurePopup}
        setOpenNotSurePopup={setOpenNotSurePopup}
      />

      <ShareCalculatorPopup
        openSharePopup={openSharePopup}
        setOpenSharePopup={setOpenSharePopup}
      />

      <Box sx={{ mb: '1.875rem' }}>
        {
          isFirstPage() && (
            <ShareCalcContainer
              setOpenSharePopup={setOpenSharePopup}
              calcFirstPageUrl={calcFirstPageUrl}
              justify
            />
          )
        }

        <ErrorReportContainer calculatorConfig={calculatorConfig} />
      </Box>

    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params = {} } = ctx;
  const slug = params.slug as string || '';

  const [page, calculatorConfig] = await Promise.all([
    getCalculatorPageBySlug({ slug }),
    getCalculatorConfig(),
  ]);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      calculatorConfig,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getCalculatorPagePaths();

  return {
    paths: paths?.map((slug) => `/calculator/${slug}`) || [],
    fallback: false,
  };
};
