import { Box, Container, Divider, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import HeroBanner from "../components/HeroBanner";
import ImageContentCard from "../components/ImageContentCard";
import content from "../content/get-involved";
import Partner from "../pages/partner";
import Volunteer from "../pages/volunter";

export default function GetInvolvedPage() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          color: "#ffffff",
          pb: "128px",
          pt: "34px",
          pl: "24px",
          pr: "24px",
          bgcolor: "#2f3554",
        }}
      >
        <HeroBanner
          heading="Get Involved"
          subheading="There are many ways to participate with the Clearviction team, and we appreciate all of them!"
        />
        <Grid container sx={{ maxWidth: "1200px", m: "auto" }}>
          {content.waysToParticipate.map((card) => (
            <Grid item xs={12} sm={12} md={4} key={card.id}>
              <Box display="flex" justifyContent="center" key={card.id}>
                <ImageContentCard
                  content={card.body}
                  buttonText={card.title}
                  buttonHref={card.href}
                  image={card.imgsrc}
                  alt="card.title"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Volunteer />
      <Container maxWidth="md">
        <Divider maxWidth="md" sx={{ mt: theme.spacing(8), mb: theme.spacing(8), scrollMarginTop: "4em" }} />
      </Container>
      <Partner />
      <Container maxWidth="md">
        <Divider maxWidth="md" sx={{ mt: theme.spacing(8), mb: theme.spacing(8), scrollMarginTop: "4em" }} />
      </Container>
    </>
  );
}
