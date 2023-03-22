import {
  Box,
  Button,
  SxProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import MuiMarkdown from "mui-markdown";

import SectionContainer from "./SectionContainer";

interface HeroBannerProps {
  heading: string;
  smallHeading?: string;
  subheading: string;
  imgsrc?: string;
  ctaText?: string;
  ctaLink?: string;
  children?: JSX.Element;
}

const heroStyles: SxProps = {
  backgroundColor: "primary.dark",
  color: "primary.contrastText",
  py: 8,
};

export default function HeroBanner({
  heading,
  smallHeading = heading,
  subheading,
  imgsrc,
  ctaText,
  ctaLink,
  children,
}: HeroBannerProps) {
  return (
    <Box sx={heroStyles} textAlign={{ xs: "center", md: "left" }}>
      <SectionContainer>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {heading}
        </Typography>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          {smallHeading}
        </Typography>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ mb: 4 }}>
              <MuiMarkdown
                overrides={{
                  p: {
                    component: Typography,
                    props: {
                      variant: "subtitle1",
                      gutterBottom: true,
                    } as TypographyProps,
                  },
                  span: {
                    component: Typography,
                    props: { variant: "subtitle1" } as TypographyProps,
                  },
                }}
              >
                {subheading}
              </MuiMarkdown>
            </Box>
            {ctaText && ctaLink && (
              <Button
                variant="contained"
                color="primary"
                href={ctaLink}
                sx={{ px: 8 }}
              >
                {ctaText}
              </Button>
            )}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: { md: "flex" },
              flex: 1,
              justifyContent: "center",
            }}
          >
            {imgsrc ? (
              <Box component="img" src={imgsrc} alt="" sx={{ flex: 1 }} />
            ) : (
              children
            )}
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
}
