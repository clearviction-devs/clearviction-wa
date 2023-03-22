import { Button, Paper, PaperProps, Typography } from "@mui/material";

import ExternalButton from "./ExternalButton";

interface PaperSectionProps extends PaperProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function PaperSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  children,
  ...props
}: PaperSectionProps) {
  return (
    <Paper sx={{ textAlign: "center", p: 4 }} {...props}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          {subtitle}
        </Typography>
      )}
      {children}
      {ctaText && ctaLink && (
        <Button href={ctaLink} variant="contained" sx={{ mt: 4, px: 8 }}>
          {ctaText}
        </Button>
      )}
    </Paper>
  );
}
