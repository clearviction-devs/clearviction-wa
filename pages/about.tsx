import {
  HourglassEmpty,
  LocalAtmOutlined,
  PanToolOutlined,
} from "@mui/icons-material";
import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

import externalLinks from "../components/externalLinks";
import HeroBanner from "../components/HeroBanner";
import { PaperSection } from "../components/PaperSection";
import SectionContainer from "../components/SectionContainer";
import aboutImage from "../public/illustrations/checklist1.svg";

export default function AboutPage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  externalLinks();

  return (
    <>
      <HeroBanner
        heading="About Us"
        subheading="We are a civic-tech open-source project working to make the conviction vacation process in Washington easier and more straightforward, starting with an eligibility calculator."
        imgsrc="illustrations/map.svg"
      />
      <SectionContainer>
        <ButtonGroup
          variant="text"
          fullWidth
          orientation={matchesXS ? "vertical" : "horizontal"}
        >
          <Button href="#our-story">Our Story</Button>
          <Button href="#our-team">Our Team</Button>
        </ButtonGroup>
      </SectionContainer>

      <SectionContainer id="our-story">
        <Typography variant="h2" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="h3" gutterBottom>
          Those with a criminal record in Washington face significant barriers
          to daily life after completing their prison terms
        </Typography>

        <Box>
          <PaperSection title="" sx={{ p: 8, my: 8 }}>
            <Grid container spacing={4}>
              <Typography variant="subtitle1" gutterBottom>
                <Button
                  href="https://app.leg.wa.gov/billsummary?BillNumber=2890&Year=2017"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="New Hope Act"
                >
                  {"Washington State's New Hope Act"}
                </Button>
                makes it easier for people with past criminal records to have
                their convictions vacated. Even then, the process of vacating a
                conviction is very convoluted, making it difficult for most
                people to navigate:
              </Typography>
              <Grid item md={4} sx={{ textAlign: "center", mb: "2em" }}>
                <HourglassEmpty sx={{ color: "#FFD200" }} />
                <Typography>
                  {
                    "It has a number of steps that require time and know-how increasing the barrier of entry for applicants"
                  }
                </Typography>
              </Grid>
              <Grid item md={4} sx={{ textAlign: "center" }}>
                <LocalAtmOutlined sx={{ color: "#FFD200" }} />
                <Typography>
                  {
                    "While hiring an attorney can help simplify the process, it's unaffordable for most"
                  }
                </Typography>
              </Grid>
              <Grid item md={4} sx={{ textAlign: "center" }}>
                <PanToolOutlined sx={{ color: "#FFD200" }} />
                <Typography>
                  {
                    "Volunteer services are available, but they are often inaccessible and don't cover all steps"
                  }
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Button
                href="/get-started"
                aria-label="to Get Started"
                variant="contained"
                sx={{
                  mt: 4,
                  px: "2em",
                  "&:hover": {
                    color: theme.palette.primary.dark,
                    backgroundColor: "#FFD200",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </PaperSection>
        </Box>
        <Box style={{ width: "90%", margin: "0 auto" }}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Image src={aboutImage} alt="about-image" />
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Our mission is to benefit individuals with criminal convictions
                in Washington and decrease life-long collateral consequences.
              </Typography>
              <Typography variant="subtitle1" component="p">
                To support this mission, we first focused on creating a&nbsp;
                <a
                  href="https://www.clearviction.org/calculator/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Conviction Eligibility Calculator"
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  }}
                >
                  Conviction Eligibility Calculator{" "}
                </a>
                to help people determine if they are eligible to vacate their
                conviction.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </SectionContainer>
      <SectionContainer id="our-team">
        <Typography variant="h2" gutterBottom>
          Our Team
        </Typography>
        <Grid container>
          <iframe
            id="our-team-embed-airtable"
            title="our-team"
            className="airtable-embed"
            src="https://airtable.com/embed/shrUcTsNW8KLw3hyp"
            width="100%"
            height="1048"
            style={{
              background: "transparent",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
        </Grid>
      </SectionContainer>
    </>
  );
}
