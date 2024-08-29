import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';

export function EligibilityButton() {
  return (
    <Button
      href="/calculator/head-initial-1-cont"
      variant="contained"
      color="tertiary"
      size="small"
      className="calc-btn"
      aria-label="Access our eligibility calculator"
      sx={{
        whiteSpace: 'nowrap',
        py: 1,
        px: 3,
        color: 'text.secondary',
        '&:hover': {
          backgroundColor: 'tertiary.light',
        },
        '&:active': {
          backgroundColor: '#FF5F40',
        },
        '&:focus': {
          backgroundColor: 'tertiary',
          boxShadow: '0 0 0 4px #0000EE99',
        },
        margin: '.625rem auto',
      }}
    >
      Check eligibility
      <ArrowForwardIcon sx={{
        stroke: theme.palette.text.secondary,
        strokeWidth: 0.5,
      }}
      />
    </Button>
  );
}

export function CalculatorButton({
  href, hasArrow, children, handleClick,
}: {
  href?: string,
  hasArrow?: boolean,
  children?: React.ReactNode,
  handleClick?: () => void,
}) {
  const [strokeColor, setStrokeColor] = React.useState(theme.palette.text.light);

  return (
    <Button
      href={href}
      variant="contained"
      size="small"
      sx={{
        whiteSpace: 'nowrap',
        py: 1,
        px: 3,
        color: 'text.light',
        backgroundColor: 'secondary.dark',
        '&:hover': {
          color: 'text.secondary',
          backgroundColor: 'secondary.main',
        },
        '&:active': {
          backgroundColor: 'secondary.variant',
        },
        '&:focus': {
          boxShadow: '0 0 0 4px #0000EE99',
        },
        boxShadow: 'none',
      }}
      onClick={handleClick}
      onMouseEnter={() => setStrokeColor(theme.palette.text.primary!)}
      onMouseLeave={() => setStrokeColor(theme.palette.text.light!)}
    >
      {children}
      {hasArrow && (
      <ArrowForwardIcon sx={{
        stroke: strokeColor,
        strokeWidth: 0.5,
      }}
      />
      )}
    </Button>
  );
}

export function StepsForFilingButton() {
  return (
    <Button
      href="/get-started/file-with-the-court"
      variant="contained"
      aria-label="steps for filing with the court"
      sx={{
        whiteSpace: 'nowrap',
        py: 1,
        margin: '.625rem 0',
        letterSpacing: 0,
        color: theme.palette.text.light,
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
        },
        '&:active': {
          backgroundColor: '#002183',
        },
        '&:focus': {
          backgroundColor: theme.palette.primary.dark,
          boxShadow: '0 0 0 4px #0000EE99',
        },
      }}
    >
      Steps for filing with the court
      <ArrowForwardIcon />
    </Button>
  );
}

export function ResourcesButton({ text, href }: {text: string, href: string}) {
  return (
    <Button
      href={href}
      variant="text"
      aria-label={text}
      sx={{
        whiteSpace: 'nowrap',
        py: 1,
        margin: '.625rem 0',
        letterSpacing: 0,
        color: theme.palette.secondary.dark,
        textDecoration: 'underline',
        '&:hover': {
          backgroundColor: theme.palette.secondary.light,
        },
        '&:active': {
          backgroundColor: '#E9E9E9',
        },
        '&:focus': {
          boxShadow: '0 0 0 4px #0000EE99',
        },
      }}
    >
      {text}
      <ArrowForwardIcon />
    </Button>
  );
}
