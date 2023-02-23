import { Box, Grid } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import ImageContentCard from "../components/ImageContentCard";
import content from "../content/get-involved";

export default function GetInvolvedPage() {
  return (
    <>
    <Box sx={{ color: "#ffffff",  paddingBottom: "128px", paddingTop: "34px", bgcolor: "#2f3554"}}>
      <HeroBanner
        heading="Get Involved"
        subheading="There are many ways to participate with the Clearviction team, and we appreciate all of them!"
      />
      <Grid container sx={{ maxWidth: "1200px", margin: "auto" }}>
          {
            content.waysToParticipate.map(card => (
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
            ))
          }
      </Grid>
    </Box>
    </>
  );
}
