import { Box, Button, Grid, SxProps, Typography } from "@mui/material";
import Image from "next/image";

import researchImage from "../public/illustrations/checklist1.svg";
import SectionContainer from "./SectionContainer";

const researchBannerStyles: SxProps = {
  backgroundColor: "primary.main",
  color: "primary.contrastText",
  py: 4,
};

export default function ResearchBanner() {
  return (
    <Box sx={researchBannerStyles}>
      <SectionContainer>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="h3" gutterBottom>
              Help us improve the calculator by participating in research
            </Typography>
            <Button
              fullWidth
              variant="contained"
              href="https://docs.google.com/forms/d/1KXmPrwzHeE8_EEL88RFkjOFP4S1A52Ode1vV6SJijao/viewform?edit_requested=true"
              sx={(theme) => ({
                backgroundColor: theme.palette.primary.contrastText,
                color: "black",
                "&:hover": {
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.dark,
                },
              })}
            >
              Learn more
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Image
              src={researchImage}
              alt="a cartoon of a person adding to a to do list with a life size crayon"
            />
          </Grid>
        </Grid>
      </SectionContainer>
    </Box>
  );
}
