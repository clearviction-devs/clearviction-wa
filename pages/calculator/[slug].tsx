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
import RCWLinkInfo from '../../components/calculator/RCWLinkInfo.tsx';
import externalLinks from '../../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../../components/helper/IndividualPageHead.tsx';
import StaticCalcProps from '../../utils/calculator.props.ts';
import {
  getAllPagePaths,
  getAllPagesBySlug,
  getCalculatorConfig,
} from '../../utils/sanity.client.ts';

export default function CalculatorSlugRoute({ page, calculatorConfig }: StaticCalcProps) {
  const [openNotSurePopup, setOpenNotSurePopup] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

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

      {/* Stepper */}
      <CalcHeader page={page} />

      <Container
        ref={contentRef}
        component={Container}
        sx={{
          minHeight: '35rem',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '724px',
        }}
        id="calculator-container-outer"
        tabIndex={-1}
      >
        {/* Sanity content */}
        <QandAContainer
          page={page}
          calculatorConfig={calculatorConfig}
          setOpenNotSurePopup={setOpenNotSurePopup}
        />

        {/* RCW Link Infographic - !! remove test page */}
        {(page.slug === 'head-initial-1-cont' || page.slug === 'start-page-test') && (
          <RCWLinkInfo />
        )}

        {/* Link to more resources & check another conviction */}
        {
          (page.isFinalPage) && (
            <FinalPageLinksContainer
              calculatorConfig={calculatorConfig}
            />
          )
        }

        {/* Legal disclaimer */}
        {
          (page.isFinalPage) && (
          <Box
            maxWidth="md"
            id="legal-disclaimer-container"
            marginBottom="24px"
          >
            <Typography variant="caption" data-cy="legal-disclaimer">
              {calculatorConfig.legalDisclaimer}
            </Typography>
          </Box>
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
