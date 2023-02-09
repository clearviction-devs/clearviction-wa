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
        <Box>
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
            {`##Quick Start Guide\nTime expectation: 10 minutes\n\nThe calculator can be used for one conviction. If you have two or more convictions, use the calculator for however many convictions you have.\n\nYou will need to know:\n- The date and violation of your misdemeanor or gross misdemeanor conviction in Washington state.\n- If and when you completed the terms of your sentence.\n- Pending charges and/or new convictions.\n- Any court orders against you.\n\nCourt orders include:\n- Domestic violence protection order\n- No-contact order\n- Anti-harassment order\n- Civil restraining order`}
          </MuiMarkdown>
        </Box>
        <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
          <Button variant="contained" fullWidth href={"/calculator/landing-2"}>
            Start
          </Button>
        </Stack>
      </Container>
    </>
  );
}
