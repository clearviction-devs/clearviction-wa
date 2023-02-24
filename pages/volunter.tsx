import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Fact } from "../components/Fact";
import content from "../content/get-involved";

export default function Volunteer() {
  const theme = useTheme();

  return (
    <>
      <Container
        component="section"
        id="volunteer"
        maxWidth="md"
        sx={{
          mt: theme.spacing(8),
          mb: theme.spacing(8),
          scrollMarginTop: "4em",
        }}
      >
        <Typography
          sx={{ mt: theme.spacing(8), mb: theme.spacing(8) }}
          variant="h2"
        >
          {content.volunteerPage.header}
        </Typography>
        {content.volunteerPage.body.map((text, idx) => (
          <Typography
            key={`volunteerText-${idx}`}
            variant="body1"
            sx={{ mt: theme.spacing(3), mb: theme.spacing(3) }}
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
      <Container
        maxWidth="md"
        sx={{
          mt: theme.spacing(8),
          mb: theme.spacing(8),
          scrollMarginTop: "4em",
        }}
      >
        <Typography
          sx={{ mt: theme.spacing(8), mb: theme.spacing(8) }}
          variant="h2"
        >
          {content.volunteerPage.openRole.title}
        </Typography>
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
  );
}
