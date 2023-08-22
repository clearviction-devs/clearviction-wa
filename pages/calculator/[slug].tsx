import CloseIcon from '@mui/icons-material/Close';
import HistoryIcon from '@mui/icons-material/History';
import IosShareIcon from '@mui/icons-material/IosShare';
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
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import CalcStepper from '../../components/functional/CalcStepper.tsx';
import externalLinks from '../../components/functional/ExternalLinks.tsx';
import MailchimpForm from '../../components/functional/MailchimpForm.tsx';
import IndividualPageHead from '../../components/helper/IndividualPageHead.tsx';
import Results from '../../components/helper/Results.tsx';
import ShareButtons from '../../components/helper/ShareButtons.tsx';
import { SharedCalcProps, StaticCalcProps } from '../../utils/calculator.props.ts';
import { portableTextComponent } from '../../utils/portableTextComponents.tsx';
import {
  getCalculatorConfig,
  getCalculatorPageBySlug,
  getCalculatorPagePaths,
} from '../../utils/sanity.client.ts';

function CalcHeader({ page, isFirstPage }:
  { page: StaticCalcProps['page'],
    isFirstPage: SharedCalcProps['isFirstPage']
  }) {
  const router = useRouter();

  const isPageIncludedInStepper = () => {
    const excludedPageSlug = 'head';
    const isPartOfHead = page.slug.includes(excludedPageSlug); // exclude
    const { isFinalPage } = page; // exclude
    return !(isFinalPage || isPartOfHead);
  };

  return (
    <Container id="calc-head-container" sx={{ marginTop: '2rem' }}>

      {!isFirstPage() && (
        <Button
          type="button"
          id="back-button"
          onClick={() => {
            router.back();
          }}
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

      {isPageIncludedInStepper() && <CalcStepper />}

    </Container>
  );
}

function QandAContainer({
  page, calculatorConfig, addToResponses, setOpenNotSurePopup,
}: StaticCalcProps &{
    addToResponses: SharedCalcProps['addToResponses'],
    setOpenNotSurePopup: SharedCalcProps['setOpenNotSurePopup']}) {
  return (
    <>
      <Box mb={4}>
        <PortableText
          value={page.content}
          components={portableTextComponent}
        />
      </Box>

      <Container id="choices-container" maxWidth="xs" sx={{ mb: 4 }}>
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
                onClick={() => addToResponses(choice.label)}
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
            onClick={() => setOpenNotSurePopup(true)}
          >
            {calculatorConfig.notSureAnswer.promptText}
          </Button>
          )}

        </Stack>
      </Container>
    </>
  );
}

function CheckAnotherConviction({ calculatorConfig }: {
  calculatorConfig: StaticCalcProps['calculatorConfig']
  }) {
  return (
    <Box id="check-another-conviction-container">
      <Link
        sx={{
          textAlign: 'center', whiteSpace: 'nowrap', display: 'flex', gap: 1,
        }}
        href={
          calculatorConfig.checkAnotherConviction.linkTo.slug.current
        }
      >
        <HistoryIcon />
        {calculatorConfig.checkAnotherConviction.linkText}
      </Link>
    </Box>
  );
}

function FeedbackContainer({ page, calculatorConfig }: StaticCalcProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      href={
        page.isUndetermined
          ? calculatorConfig.feedback.isUndeterminedUrl
          : calculatorConfig.feedback.allOtherFeedbackUrl
            }
      sx={{ ml: 0, mr: 0 }}
    >
      {calculatorConfig.feedback.linkText}
    </Button>
  );
}

function ShareCalcContainer({ setOpenSharePopup, calcFirstPageUrl, justify }: {
  setOpenSharePopup: SharedCalcProps['setOpenSharePopup'],
  calcFirstPageUrl: SharedCalcProps['calcFirstPageUrl'],
  justify?: boolean,
}) {
  return (
    <Box
      id="share-calc-container"
      sx={{
        display: 'flex',
        gap: 1,
        justifyContent: justify ? 'center' : 'flex-start',
      }}
    >
      <Link
        href={calcFirstPageUrl}
        onClick={(event) => {
          event.preventDefault();
          setOpenSharePopup(true);
        }}
        sx={{
          display: 'flex',
          gap: 1,
        }}
      >
        <IosShareIcon />
        Share the calculator
      </Link>
    </Box>
  );
}

function FinalPageLinksContainer({
  page, calculatorConfig, setOpenSharePopup, calcFirstPageUrl,
}: StaticCalcProps &{
  setOpenSharePopup: SharedCalcProps['setOpenSharePopup'],
  calcFirstPageUrl: SharedCalcProps['calcFirstPageUrl'],
}) {
  return (
    <Box
      id="finalpage-links-container"
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', md: 'row',
        },
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        mb: 4,
        gap: 2,
      }}
    >
      <FeedbackContainer page={page} calculatorConfig={calculatorConfig} />
      <Box>
        <CheckAnotherConviction calculatorConfig={calculatorConfig} />
        <ShareCalcContainer
          setOpenSharePopup={setOpenSharePopup}
          calcFirstPageUrl={calcFirstPageUrl}
        />
      </Box>
    </Box>
  );
}

function ResultsDownloadContainer({ handleCloseResults, setShowResults }: {
  handleCloseResults: SharedCalcProps['handleCloseResults'],
  setShowResults: SharedCalcProps['setShowResults'],
}) {
  const saveAsPDF = async () => {
    /* eslint new-cap: ["error", { "newIsCap": false }] */
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    const data1 = await html2canvas(document.querySelector('#firstPage')!);
    const img1 = data1.toDataURL('image/png');
    const imgProperties1 = pdf.getImageProperties(img1);
    const pdfWidth1 = pdf.internal.pageSize.getWidth();
    const pdfHeight1 = (imgProperties1.height * pdfWidth1) / imgProperties1.width;

    const data2 = await html2canvas(document.querySelector('#results-page')!);
    const img2 = data2.toDataURL('image/png');
    const imgProperties2 = pdf.getImageProperties(img2);
    const pdfWidth2 = pdf.internal.pageSize.getWidth();
    const pdfHeight2 = (imgProperties2.height * pdfWidth2) / imgProperties2.width;

    pdf.addImage(img1, 'PNG', 0, 0, pdfWidth1, pdfHeight1);
    pdf.addPage('a4', 'portrait');
    pdf.addImage(img2, 'PNG', 0, 0, pdfWidth2, pdfHeight2);

    pdf.save('clearviction_calc_results.pdf');
    if (window.innerWidth < 901) handleCloseResults();
  };

  const handleDownloadClick = () => {
    // print section must be on the page before save as pdf will work
    setShowResults(true);
    setTimeout(() => { saveAsPDF(); }, 500);
  };

  return (
    <Button
      sx={{ display: 'block' }}
      onClick={() => handleDownloadClick()}
    >
      Download responses
    </Button>
  );
}

function ErrorReportContainer({ calculatorConfig }: {
    calculatorConfig: StaticCalcProps['calculatorConfig']
  }) {
  return (
    <Box
      id="error-report-container"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '.8rem',
        gap: 1,
        fontSize: '1rem',
        fontWeight: 500,
      }}
    >
      <Link
        href={calculatorConfig.errorReportingForm.errorReportingFormUrl}
        sx={{
          textAlign: 'center',
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
  );
}

function NotSurePopup({ calculatorConfig, openNotSurePopup, setOpenNotSurePopup }: {
  calculatorConfig: StaticCalcProps['calculatorConfig'],
  openNotSurePopup: SharedCalcProps['openNotSurePopup'],
  setOpenNotSurePopup: SharedCalcProps['setOpenNotSurePopup'],
}) {
  return (
    <Dialog
      open={openNotSurePopup}
      onClose={() => setOpenNotSurePopup(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {calculatorConfig.notSureAnswer.header}
      </DialogTitle>
      <DialogContent>
        <PortableText
          value={calculatorConfig.notSureAnswer.content}
          components={portableTextComponent}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenNotSurePopup(false)}>
          {calculatorConfig.notSureAnswer.closeText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ShareCalculatorPopup({ openSharePopup, setOpenSharePopup }: {
  openSharePopup: SharedCalcProps['openSharePopup'],
  setOpenSharePopup: SharedCalcProps['setOpenSharePopup'],
}) {
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const popup = true;

  const closeDialog = () => {
    setTimeout(() => {
      setOpenSharePopup(false);
    }, 10);

    setTimeout(() => {
      setShareLinkCopied(false);
    }, 350);
  };

  return (
    <Dialog
      open={openSharePopup}
      onClose={() => closeDialog()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <CloseIcon
        color="inherit"
        onClick={() => closeDialog()}
        aria-label="close"
        style={{
          position: 'absolute', top: '.625rem', right: '.625rem',
        }}
      />
      <ShareButtons
        popup={popup}
        setShareLinkCopied={setShareLinkCopied}
        shareLinkCopied={shareLinkCopied}
      />
    </Dialog>
  );
}

export default function CalculatorSlugRoute({ page, calculatorConfig }: StaticCalcProps) {
  // all state and functions here are shared between multiple secondary components
  const [openNotSurePopup, setOpenNotSurePopup] = useState(false);
  const [openSharePopup, setOpenSharePopup] = useState(false);
  const [responseObject, setResponseObject] = useState({});
  const [showResults, setShowResults] = useState(false);

  const calcFirstPageUrl = 'https://clearviction.org/calculator/head-initial-1-cont';
  const isFirstPage = () => page.slug === 'head-initial-1-cont';

  const addToResponses = (answer: string) => {
    // delete object when start over
    if (page.slug === 'head-initial-1-cont') setResponseObject({});
    if (answer !== 'Continue' && answer !== 'Next' && answer !== 'Start' && page.slug !== 'head-mis-3-cont') {
      setResponseObject({ ...responseObject, [page.slug]: answer });
    }
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  externalLinks();

  return (
    <>
      <IndividualPageHead
        title="Check the eligibility to vacate your misdemeanor"
        metaContent="Determine if your misdemeanor or gross misdemeanor is eligible to vacate in Washington State with Clearviction's eligibility calculator."
      />

      <CalcHeader page={page} isFirstPage={isFirstPage} />

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
              <Box maxWidth="60ch" textAlign="center" id="legal-disclaimer-container">
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
            <Results responseObject={responseObject} handleCloseResults={handleCloseResults} />
          )
        }

      </Container>

      <NotSurePopup
        calculatorConfig={calculatorConfig}
        openNotSurePopup={openNotSurePopup}
        setOpenNotSurePopup={setOpenNotSurePopup}
      />

      <ShareCalculatorPopup openSharePopup={openSharePopup} setOpenSharePopup={setOpenSharePopup} />

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
