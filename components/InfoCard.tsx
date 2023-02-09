import { Box, Button, Paper, PaperProps, Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";

interface InfoCardProps extends PaperProps {
  imgsrc?: string;
  title?: string;
  body?: string;
  ctaText?: string;
  ctaLink?: string;
  maxWidth?: number | string;
}

export default function InfoCard({
  imgsrc,
  title,
  body,
  ctaText,
  ctaLink,
  maxWidth = 200,
  ...props
}: InfoCardProps) {
  return (
    <Paper
      sx={{
        maxWidth: maxWidth,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="img" src={imgsrc} alt="" sx={{ width: "100%", mb: 2 }} />
      <Typography variant="h4">{title}</Typography>
      <Box px={2} pb={2} textAlign="center">
        <MuiMarkdown>{body}</MuiMarkdown>
      </Box>
      {ctaText && ctaLink && (
        <Box pb={2} px={2} sx={{ width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            href={ctaLink}
            fullWidth
            sx={{ minWidth: "100%" }}
          >
            {ctaText}
          </Button>
        </Box>
      )}
    </Paper>
  );
}
