import { Button, Paper, PaperProps, Typography } from "@mui/material";

interface PaperSectionProps extends PaperProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  isNewTab?: boolean;
}

interface CustomButtonProps {
  href: string;
  variant: "contained";
  sx: { mt: 4 };
  target?: "_blank";
  rel?: "noopener";
}

export function PaperSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  children,
  isNewTab,
  ...props
}: PaperSectionProps) {
  const button = (buttonProps: CustomButtonProps) => {
    if (isNewTab) {
      return (
        <Button {...buttonProps} target="_blank" rel="noopener">
          {ctaText}
        </Button>
      );
    }
    return <Button {...buttonProps}>{ctaText}</Button>;
  };

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
      {ctaText &&
        ctaLink &&
        button({ href: ctaLink, variant: "contained", sx: { mt: 4 } })}
    </Paper>
  );
}
