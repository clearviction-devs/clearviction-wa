import {
  Box,
  Button,
  Divider,
  Grid,
  GridProps,
  Paper,
  PaperProps,
  Typography,
} from '@mui/material';
import { ReactHTMLElement } from 'react';

interface HomeCardSectionProps extends PaperProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface HomeCardItemProps extends GridProps {
  title?: string;
  body: string;
  imgsrc?: string;
}

export function HomeCardItem({
  title,
  body,
  imgsrc,
  ...props
}: HomeCardItemProps) {
  return (
    <Grid item {...props} sx={{ mb: 4 }}>
      <Box>
        <Box
          component='img'
          src={imgsrc}
          alt=''
          sx={{ width: '100%', maxWidth: '200px' }}
        />
        <Typography variant='subtitle1'>{title}</Typography>
        <Typography variant='body1' sx={{ maxWidth: '60ch' }}>
          {body}
        </Typography>
      </Box>
    </Grid>
  );
}

export function HomeCardSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  children,
  ...props
}: HomeCardSectionProps) {
  return (
    <Paper sx={{ textAlign: 'center', p: 4 }} {...props}>
      <Typography variant='h2' sx={{ mb: 4 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant='subtitle1' sx={{ mb: 4 }}>
          {subtitle}
        </Typography>
      )}

      {children}

      {ctaText && ctaLink && (
        <Button href={ctaLink} variant='contained' sx={{ mt: 4 }}>
          {ctaText}
        </Button>
      )}
    </Paper>
  );
}
