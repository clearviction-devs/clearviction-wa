import HistoryIcon from "@mui/icons-material/History";
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
} from "@mui/material";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  getCalculatorConfig,
  getCalculatorPageBySlug,
  getCalculatorPagePaths,
} from "utils/sanity.client";

import externalLinks from "../../components/externalLinks";
import portableTextComponents from "../../utils/portableTextComponents";

export default function CalculatorSlugRoute({ page, calculatorConfig }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  externalLinks();

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          minHeight: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="calculator-container-outer"
      >
        <Button
          type="button"
          onClick={() => router.back()}
          sx={{ marginLeft: 0, fontWeight: "lighter", fontSize: "14px" }}
        >
          <SvgIcon
            sx={{ marginRight: "10px" }}
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
          {/* remove previous once progress bar is in */}
          Previous
        </Button>
        <Box mb={4}>
          <PortableText
            value={page.content}
            components={portableTextComponents}
          />
        </Box>
        <Container maxWidth="xs" sx={{ mb: 4 }}>
          <Stack gap={2}>
            {page.choices &&
              page.choices.map((choice) => {
                const linkTo = choice.linkTo
                  ? `/calculator/${choice.linkTo.slug.current}`
                  : "#";
                const href = choice.isExternalLink ? choice.url : linkTo;
                return (
                  <Button
                    key={choice._key}
                    variant="contained"
                    color="primary"
                    href={href}
                    sx={{ width: "100%" }}
                  >
                    {choice.label}
                  </Button>
                );
              })}
            {page.isQuestion && (
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: "100%" }}
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
                  sx={{ textAlign: "center" }}
                  href={
                    calculatorConfig.checkAnotherConviction.linkTo.slug.current
                  }
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
            <Typography variant="caption" sx={{ fontWeight: "light" }}>
              {calculatorConfig.legalDisclaimer}
            </Typography>
          </Box>
        )}
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
          textAlign: "center",
          mb: "30px",
          color: "black",
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        <Link
          href={calculatorConfig.errorReportingForm.errorReportingFormUrl}
          sx={{
            color: "text.primary",
            textDecoration: "none",
            "&:hover": {
              color: "primary.main",
              textDecoration: "underline",
            },
          }}
        >
          {calculatorConfig.errorReportingForm.linkText}{" "}
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
