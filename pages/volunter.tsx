import { Box, Container, Grid, Typography } from "@mui/material";

import { Fact } from "../components/Fact";
import content from "../content/get-involved";

export default function Volunteer(){
  return (
    <>
          <Container
        component="section"
        id="volunteer"
        maxWidth="md"
        sx={{ mt: "64px", mb: "64px", scrollMarginTop: "4em" }}
      >
        <Typography sx={{ mt: "64px", mb: "64px" }} variant="h2">
          {content.volunteerPage.header}
        </Typography>
        {content.volunteerPage.body.map((text, idx) => (
          <Typography
            key={`volunteerText-${idx}`}
            variant="body1"
            sx={{ mt: "24px", mb: "24px" }}
          >
            {text}
          </Typography>
        ))}
        <Grid container>
          {content.volunteerPage.facts.map((fact) => (
            <Grid key={fact.id} item xs={12} sm={4} md={4} lg={4}>
              <Fact text={fact.text} icon={fact.icon} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="md"sx={{ mt: "64px", mb: "64px", scrollMarginTop: "4em" }}>
        <Typography sx={{ mt: "64px", mb: "64px" }} variant="h2">{content.volunteerPage.openRole.title}</Typography>
        <iframe 
          id={content.volunteerPage.openRole.id}
          src={content.volunteerPage.openRole.src}
          width="100%"
          height="548"
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            borderRadius: "6px",
        }}
        />
      </Container>
    </>
  )
}