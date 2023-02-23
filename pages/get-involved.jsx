import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import { Fact } from "../components/Fact";
import HeroBanner from "../components/HeroBanner";
import ImageContentCard from "../components/ImageContentCard";
import content from "../content/get-involved";

export default function GetInvolvedPage() {
  return (
    <>
      <Box sx={{ color: "#ffffff", pb: "128px", pt: "34px", pl: "24px", pr: "24px", bgcolor: "#2f3554" }} >
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
      <Container component="section" id="volunteer" maxWidth="md" sx={{ mt: "64px", mb: "64px", scrollMarginTop: "4em"}}>
        <Typography sx={{ mt: "64px", mb: "64px"}} variant="h2">
            {content.volunteerPage.header}
        </Typography>
        {
          content.volunteerPage.body.map((text, idx) => (
            <Typography key={`volunteerText-${idx}`} variant="body1" sx={{ mt: "24px", mb: "24px" }}>
              {text}
            </Typography>
          ))
        }
        <Grid container>
          {
            content.volunteerPage.facts.map(fact => (
              <Grid key={fact.id} item xs={12} sm={4} md={4} lg={4}>
                <Fact 
                  text={fact.text}
                  icon={fact.icon}
                />
              </Grid>
            ))
          }
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Divider maxWidth="md" sx={{ mt: "64px", mb: "64px", scrollMarginTop: "4em"}} />
      </Container>
      
    </>
  );
}
