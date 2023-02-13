import { Box, Button, SxProps, Typography } from "@mui/material";

import SectionContainer from "./SectionContainer";

interface HeroBannerProps {
  heading: string;
  smallHeading?: string;
  subheading: string;
  imgsrc: string;
  ctaText?: string;
  ctaLink?: string;
}

const heroStyles: SxProps = {
  backgroundColor: "primary.dark",
  color: "primary.contrastText",
  py: 4,
};

export default function HeroBanner({
  heading,
  smallHeading = heading,
  subheading,
  imgsrc,
  ctaText,
  ctaLink,
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
            <Typography variant="subtitle1" sx={{ mb: 4 }}>
              {subheading}
            </Typography>
            {ctaText && ctaLink && (
              <Button variant="contained" color="neutral" href={ctaLink}>
                {ctaText}
              </Button>
            )}
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flex: 1,
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgsrc} alt="" />
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
}
