import NavigateBefore from "@mui/icons-material/NavigateBefore";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";

export default function page() {
  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box mb={4}>
          <Button startIcon={<NavigateBefore />}>Previous</Button>
        </Box>
        <Box textAlign="center">
          <MuiMarkdown
            overrides={{
              p: {
                component: Typography,
                props: {
                  variant: "body1",
                  sx: { my: 4 },
                },
              },
              h2: {
                component: "h2",
                props: {
                  style: { textAlign: "center" },
                },
              },
            }}
          >
            **Was this offense a misdemeanor or gross misdemeanor in Washington
            state?**
          </MuiMarkdown>
        </Box>
        <Stack
          spacing={2}
          direction={{ xs: "column", md: "row" }}
          sx={{ my: 5 }}
        >
          <Button variant="contained" fullWidth>
            Yes
          </Button>
          <Button variant="contained" fullWidth>
            No
          </Button>
          <Button variant="outlined" fullWidth>
            I&apos;m not sure
          </Button>
        </Stack>
      </Container>
    </>
  );
}
