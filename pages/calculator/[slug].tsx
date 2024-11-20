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
import externalLinks from '../../components/ExternalLinks.tsx';
import IndividualPageHead from '../../components/IndividualPageHead.tsx';
import StaticCalcProps from '../../utils/calculator.props.ts';
import {
  getAllPagePaths,
  getAllPagesBySlug,
  getCalculatorConfig,
} from '../../utils/sanity.client.ts';

export default function CalculatorSlugRoute({ page, calculatorConfig }: StaticCalcProps) {
  const [openNotSurePopup, setOpenNotSurePopup] = useState(false);
  const isPartOfHead = page.slug.includes('head');

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
        title="Clearviction | Check Eligibility to Vacate Misdemeanors & Felonies"
        metaContent="Answer a few questions using our eligibility calculator and see if your misdemeanor or felony conviction qualifies for vacation in WA State"
      />

      {/* Stepper */}
      <CalcHeader page={page} />

      <Container
        ref={contentRef}
        component={Container}
        sx={{
          minHeight: '40rem',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: {
            sm: '724px',
            md: '724px',
            lg: '724px',
          },
          justifyContent: {
            xs: isPartOfHead ? 'normal' : 'space-between',
            sm: 'normal',
          },
          marginBottom: { xs: '36px', sm: '0' },
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
        {page.slug === 'head-initial-1-cont' && (
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
