import { Box, Button, Grid, SxProps, Typography } from "@mui/material";

import SectionContainer from "./SectionContainer";

const researchBannerStyles: SxProps = {
  backgroundColor: "primary.main",
  color: "primary.contrastText",
  py: 4,
};

const researchFormLink: string = "https://airtable.com/shrVse6WfDrWfLOhO";

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
              href={researchFormLink}
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
            <Box
              component="img"
              src="/illustrations/checklist1.svg"
              alt=""
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </SectionContainer>
    </Box>
  );
}
