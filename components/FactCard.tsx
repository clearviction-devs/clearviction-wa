import { Box, Grid, GridProps, Paper, Typography } from "@mui/material";

interface FactCardProps extends GridProps {
  body: string;
}

export function FactCard({ body, children, ...props }: FactCardProps) {
  return (
    <Grid item {...props}>
      <Paper
        sx={{
          maxWidth: "200",
          minHeight: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box pt={3} pb={1} px={3}>
          {children}
        </Box>
        <Box pb={3} px={3}>
          <Typography sx={{ textAlign: "center" }}>{body}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
