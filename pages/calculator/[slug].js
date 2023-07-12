import HistoryIcon from '@mui/icons-material/History';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import CalcStepper from '../../components/functional/CalcStepper.tsx';
import externalLinks from '../../components/functional/ExternalLinks.tsx';
import MailchimpForm from '../../components/functional/MailchimpForm.tsx';
import IndividualPageHead from '../../components/helper/IndividualPageHead.tsx';
import portableTextComponents from '../../utils/portableTextComponents';
import {
  getCalculatorConfig,
  getCalculatorPageBySlug,
  getCalculatorPagePaths,
} from '../../utils/sanity.client.ts';

export default function CalculatorSlugRoute({ page, calculatorConfig }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isPageIncludedInStepper = () => {
    const excludedPageSlug = 'head';
    const isPartOfHead = page.slug.includes(excludedPageSlug); // exclude
    const { isFinalPage } = page; // exclude
    return !(isFinalPage || isPartOfHead);
  };

  const isFirstPage = () => page.slug === 'head-initial-1-cont';

  externalLinks();

  return (
    <>
      <IndividualPageHead
        title="Check the eligibility to vacate your misdemeanor"
        metaContent="Determine if your misdemeanor or gross misdemeanor is eligible to vacate in Washington State with Clearviction's eligibility calculator."
      />
      <Container id="stepper-container" sx={{ marginTop: '2rem' }}>
        {!isFirstPage(page) && (
          <Button
            type="button"
            id="back-button"
            onClick={() => router.back()}
            sx={{
              marginLeft: 0,
              fontWeight: 'normal',
              fontSize: '14px',
              color: 'primary',
            }}
          >
            <SvgIcon
              sx={{ marginRight: '10px' }}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
            >
              <path
                d="M11.8341 1.8701L10.0541 0.100098L0.164062 10.0001L10.0641 19.9001L11.8341 18.1301L3.70406 10.0001L11.8341 1.8701Z"
                fill="#4e6c99"
              />
            </SvgIcon>
            previous
          </Button>
        )}
        {isPageIncludedInStepper(page) && <CalcStepper />}
      </Container>
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="calculator-container-outer"
      >
        <Box mb={4}>
          <PortableText
            value={page.content}
            components={portableTextComponents}
          />
        </Box>
        <Container maxWidth="xs" sx={{ mb: 4 }}>
          <Stack gap={2}>
            {page.choices
              && page.choices.map((choice) => {
                const linkTo = choice.linkTo
                  ? `/calculator/${choice.linkTo.slug.current}`
                  : '#';
                const href = choice.isExternalLink ? choice.url : linkTo;
                return (
                  <Button
                    key={choice._key}
                    variant="contained"
                    color="primary"
                    href={href}
                    sx={{ width: '100%' }}
                  >
                    {choice.label}
                  </Button>
                );
              })}
            {page.isQuestion && (
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: '100%' }}
                onClick={() => setOpen(true)}
              >
                {calculatorConfig.notSureAnswer.promptText}
              </Button>
            )}
            {page.isFinalPage && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  href={
                    page.isUndetermined
                      ? calculatorConfig.feedback.isUndeterminedUrl
                      : calculatorConfig.feedback.allOtherFeedbackUrl
                  }
                >
                  {calculatorConfig.feedback.linkText}
                </Button>
                <Link
                  sx={{ textAlign: 'center' }}
                  href={
                    calculatorConfig.checkAnotherConviction.linkTo.slug.current
                  }
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <HistoryIcon />
                    {calculatorConfig.checkAnotherConviction.linkText}
                  </Box>
                </Link>
              </>
            )}
          </Stack>
        </Container>
        {page.isFinalPage && (
          <Box maxWidth="60ch" textAlign="center">
            <Typography variant="caption" sx={{ fontWeight: 'light' }}>
              {calculatorConfig.legalDisclaimer}
            </Typography>
          </Box>
        )}
        {page.isEligible && <MailchimpForm />}
      </Container>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {calculatorConfig.notSureAnswer.header}
        </DialogTitle>
        <DialogContent>
          <PortableText
            value={calculatorConfig.notSureAnswer.content}
            components={portableTextComponents}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            {calculatorConfig.notSureAnswer.closeText}
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          textAlign: 'center',
          mb: '30px',
          color: 'black',
          fontWeight: 500,
          fontSize: '16px',
        }}
      >
        <Link
          href={calculatorConfig.errorReportingForm.errorReportingFormUrl}
          sx={{
            color: 'text.primary',
            textDecoration: 'none',
            '&:hover': {
              color: 'primary.main',
              textDecoration: 'underline',
            },
          }}
        >
          {calculatorConfig.errorReportingForm.linkText}
          {' '}
        </Link>
      </Box>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { params = {} } = ctx;

  const [page, calculatorConfig] = await Promise.all([
    getCalculatorPageBySlug({ slug: params.slug }),
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
}

export async function getStaticPaths() {
  const paths = await getCalculatorPagePaths();

  return {
    paths: paths?.map((slug) => `/calculator/${slug}`) || [],
    fallback: false,
  };
}

CalculatorSlugRoute.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.shape({
      current: PropTypes.string.isRequired,
      includes: PropTypes.func.isRequired,
    }).isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        _key: PropTypes.string.isRequired,
        _type: PropTypes.string.isRequired,
      }),
    ).isRequired,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        _key: PropTypes.string.isRequired,
        _type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        linkTo: PropTypes.shape({
          slug: PropTypes.shape({
            current: PropTypes.string.isRequired,
          }).isRequired,
        }),
        isExternalLink: PropTypes.bool,
        url: PropTypes.string,
      }),
    ),
    isQuestion: PropTypes.bool,
    isFinalPage: PropTypes.bool,
    isEligible: PropTypes.bool,
    isUndetermined: PropTypes.bool,
  }).isRequired,
  calculatorConfig: PropTypes.shape({
    legalDisclaimer: PropTypes.string.isRequired,
    feedback: PropTypes.shape({
      linkText: PropTypes.string.isRequired,
      allOtherFeedbackUrl: PropTypes.string.isRequired,
      isUndeterminedUrl: PropTypes.string.isRequired,
    }).isRequired,
    checkAnotherConviction: PropTypes.shape({
      linkText: PropTypes.string.isRequired,
      linkTo: PropTypes.shape({
        slug: PropTypes.shape({
          current: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    errorReportingForm: PropTypes.shape({
      linkText: PropTypes.string.isRequired,
      errorReportingFormUrl: PropTypes.string.isRequired,
    }).isRequired,
    notSureAnswer: PropTypes.shape({
      header: PropTypes.string.isRequired,
      promptText: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          _key: PropTypes.string.isRequired,
          _type: PropTypes.string.isRequired,
        }),
      ).isRequired,
      closeText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
