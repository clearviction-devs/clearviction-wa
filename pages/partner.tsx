import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import content from "../content/get-involved";

export default function Partner() {
  const theme = useTheme();

  return (
    <>
      <Container
        id="partner-with-us"
        sx={{
          mt: theme.spacing(8),
          mb: theme.spacing(8),
          scrollMarginTop: "4em",
        }}
        maxWidth="md"
      >
        <Typography
          sx={{ mt: theme.spacing(8), mb: theme.spacing(8) }}
          variant="h2"
        >
          {content.partnerPage.header[0]}
        </Typography>
        <Typography
          sx={{
            mt: theme.spacing(3),
            mb: theme.spacing(3),
            padding: theme.spacing(2),
          }}
          variant="body1"
        >
          {content.partnerPage.text[0]}
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: theme.spacing(8),
            mb: theme.spacing(8),
          }}
        >
          <Button
            sx={{
              margin: "30px auto 50px",
              minWidth: "240px",
              boxShadow: "rgb(0 0 0 / 20%) 0px 2px 4px;",
            }}
            variant="contained"
            href={content.partnerPage.href}
          >
            Contact Us
          </Button>
        </Container>
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
              <Box component="img" src={content.partnerPage.imgsrc} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                mt: theme.spacing(8),
                mb: theme.spacing(8),
                scrollMarginTop: "4em",
              }}
              variant="h3"
            >
              {content.partnerPage.header[1]}
            </Typography>
            <Typography
              sx={{ mt: theme.spacing(3), mb: theme.spacing(3) }}
              variant="body1"
            >
              {content.partnerPage.text[1]}
            </Typography>
            <Typography
              sx={{ mt: theme.spacing(3), mb: theme.spacing(3) }}
              variant="body1"
            >
              {content.partnerPage.text[2]}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
