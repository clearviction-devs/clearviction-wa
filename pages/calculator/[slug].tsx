import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useRef, useState } from 'react';

import CalcHeader from '../../components/calculator/CalcHeader.tsx';
import FinalPageLinksContainer from '../../components/calculator/CTAContainers.tsx';
import NotSurePopup from '../../components/calculator/PopupContainers.tsx';
import QandAContainer from '../../components/calculator/QandAContainer.tsx';
import Results from '../../components/calculator/Results.tsx';
import ResultsDownloadContainer from '../../components/calculator/ResultsDownloadContainer.tsx';
import externalLinks from '../../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../../components/helper/IndividualPageHead.tsx';
import { StaticCalcProps } from '../../utils/calculator.props.ts';
import {
  getAllPagePaths,
  getAllPagesBySlug,
  getCalculatorConfig,
} from '../../utils/sanity.client.ts';

export default function CalculatorSlugRoute({ page, calculatorConfig }: StaticCalcProps) {
  // all state and functions here are shared between multiple secondary components
  const [openNotSurePopup, setOpenNotSurePopup] = useState(false);
  const [responseObject, setResponseObject] = useState({});
  const [showResults, setShowResults] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const addToResponses = (answer: string) => {
    // delete object when start over
    if (page.slug === 'head-initial-1-cont') setResponseObject({});
    if (
      answer !== 'Continue'
      && answer !== 'Next'
      && answer !== 'Start'
      && page.slug !== 'head-start-3-cont'
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
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <IndividualPageHead
        title="Check the Eligibility to Vacate your Misdemeanor or Felony conviction"
        metaContent="Determine if your misdemeanor or felony is eligible to vacate in Washington State with our eligibility calculator."
      />

      <CalcHeader page={page} />

      <Container
        ref={contentRef}
        component={Container}
        maxWidth="md"
        sx={{
          minHeight: '35rem',
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
                calculatorConfig={calculatorConfig}
              />
              <Box
                maxWidth="60ch"
                textAlign="center"
                id="legal-disclaimer-container"
              >
                <Typography variant="caption" data-cy="legal-disclaimer" sx={{ fontWeight: 'light' }}>
                  {calculatorConfig.legalDisclaimer}
                </Typography>
              </Box>
            </>
          )
        }

        {
          (page.isFinalPage && page.isEligible && !page.slug.startsWith('f')) && (
            <ResultsDownloadContainer
              handleCloseResults={handleCloseResults}
              setShowResults={setShowResults}
            />
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

    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params = {} } = ctx;
  const slug = params.slug as string || '';

  const [page, calculatorConfig] = await Promise.all([
    getAllPagesBySlug({ slug }),
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
  const paths = await getAllPagePaths();

  return {
    paths: paths?.map((slug) => `/calculator/${slug}`) || [],
    fallback: false,
  };
};
