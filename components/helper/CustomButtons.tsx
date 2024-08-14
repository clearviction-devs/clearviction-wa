import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import React from 'react';

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
      <ArrowForwardIcon />
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
    >
      {children}
      {hasArrow && <ArrowForwardIcon />}
    </Button>
  );
}
