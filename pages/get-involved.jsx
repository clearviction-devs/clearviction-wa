import { Box, Container, Divider, Grid } from "@mui/material";

import { Fact } from "../components/Fact";
import Volunteer from "../pages/volunter";
import HeroBanner from "../components/HeroBanner";
import ImageContentCard from "../components/ImageContentCard";
import content from "../content/get-involved";

export default function GetInvolvedPage() {
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
        <Grid container sx={{ maxWidth: "1200px", margin: "auto" }}>
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
        <Divider maxWidth="md" sx={{ mt: "64px", mb: "64px", scrollMarginTop: "4em" }}/>
      </Container>
    </>
  );
}
