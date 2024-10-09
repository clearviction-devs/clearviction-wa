import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import React from 'react';

import theme from '../styles/themes/theme.tsx';

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
        padding: '10px 16px',
        width: '191px',
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
      }}
    >
      Check eligibility
      <ArrowForwardIcon sx={{
        stroke: theme.palette.text.secondary,
        fontSize: '18px',
      }}
      />
    </Button>
  );
}

export function CalculatorButton({
  href, hasArrow, children, dataCy, handleClick,
}: {
  href?: string,
  hasArrow?: boolean,
  children?: React.ReactNode,
  dataCy?: string,
  handleClick?: () => void,
}) {
  return (
    <Button
      href={href}
      className="calc-btn"
      variant="contained"
      size="small"
      data-cy={dataCy}
      sx={{
        minWidth: '140px',
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
        '&:hover .icon': {
          stroke: theme.palette.text.primary,
        },
        boxShadow: 'none',
      }}
      onClick={handleClick}
    >
      {children}
      {hasArrow && (
        <ArrowForwardIcon
          className="icon"
          sx={{
            stroke: theme.palette.text.light,
            strokeWidth: 0.5,
            transition: 'stroke 0.3s ease',
          }}
        />
      )}
    </Button>
  );
}

export function TextButtonGreen({ text, href }: { text: string, href: string }) {
  return (
    <Button
      href={href}
      variant="text"
      aria-label={text}
      sx={{
        color: theme.palette.secondary.dark,
        textDecoration: 'underline',
        '&:hover': {
          backgroundColor: theme.palette.secondary.light,
          textDecoration: 'underline',
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
      <ArrowForwardIcon sx={{
        stroke: theme.palette.secondary.dark,
        strokeWidth: 0.5,
      }}
      />
    </Button>
  );
}

export function DarkButton({ text, href }: { text: string, href: string }) {
  return (
    <Button
      href={href}
      variant="contained"
      aria-label={text}
      sx={{
        color: theme.palette.text.light,
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.secondary,
        },
        '&:active': {
          backgroundColor: '#002138',
        },
        '&:focus': {
          boxShadow: '0 0 0 4px #0000EE99',
        },
        '&:hover .icon': {
          stroke: theme.palette.text.secondary,
        },
      }}
    >
      {text}
      <ArrowForwardIcon
        className="icon"
        sx={{
          stroke: theme.palette.text.light,
          strokeWidth: 0.5,
          transition: 'stroke 0.3s ease',
        }}
      />
    </Button>
  );
}

export function LightButton({ text, href }: { text: string, href: string }) {
  return (
    <Button
      href={href}
      variant="contained"
      size="small"
      aria-label={text}
      sx={{
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.text.light,
        '&:hover': {
          backgroundColor: theme.palette.primary.light,
          '&:active': {
            backgroundColor: '#E9E9E9',
          },
          '&:focus': {
            boxShadow: '0 0 0 4px #0000EE99',
          },
        },
      }}
    >
      {text}
      <ArrowForwardIcon sx={{
        color: theme.palette.text.secondary,
        stroke: theme.palette.text.secondary,
        strokeWidth: 0.5,
      }}
      />
    </Button>
  );
}
