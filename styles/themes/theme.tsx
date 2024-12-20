import { LinkProps } from '@mui/material/Link';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// eslint-disable-next-line camelcase
import { Open_Sans, Poppins } from 'next/font/google';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React, { forwardRef } from 'react';

export const openSans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const LinkBehavior = forwardRef<HTMLAnchorElement, NextLinkProps>(
  (props, ref) => <NextLink ref={ref} {...props} />,
);

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 360,
      sm: 600,
      md: 1000,
      lg: 1440,
      xl: 1600,
    },
  },
  spacing: 8,
  palette: {
    mode: 'light',
    primary: {
      light: '#D0E4FF',
      main: '#9ECAFC',
      dark: '#003256',
      contrastText: '#121A33',
    },
    secondary: {
      light: '#DCFAEF',
      main: '#A5F2D3',
      dark: '#00513C',
      contrastText: '#003326',
    },
    tertiary: {
      light: '#FFD5CC',
      main: '#FF7F66',
    },
    error: {
      main: '#DF1F1F',
    },
    success: {
      main: '#2A8613',
    },
    text: {
      primary: '#121A33',
      secondary: '#121A33',
      light: '#FFFEFC',
      focus: '#6363F2',
    },
    background: {
      default: '#FFFEFC',
      dark: '#003256',
      alternative: '#FF7F66',
    },
    link: {
      main: '#1872BE',
      dark: '#08A0EC',
    },
  },
  typography: {
    h1: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: '700',
      fontSize: '36px',
      letterSpacing: '0',
    },
    h2: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: '600',
      fontSize: '32px',
      letterSpacing: '0',
    },
    h3: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: '500',
      fontSize: '24px',
      letterSpacing: '0',
    },
    overline: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: '400',
      fontSize: '20px',
      letterSpacing: '0',
    },
    body1: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '400',
      fontSize: '18px',
      letterSpacing: '0',
    },
    body2: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '400',
      fontSize: '16px',
      letterSpacing: '0',
    },
    button: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: '700',
      fontSize: '16px',
      letterSpacing: '0',
    },
    button2: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: '500',
      fontSize: '16px',
      letterSpacing: '0',
    },
    caption: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '400',
      fontSize: '14px',
      letterSpacing: '.5px',
    },
    headingCalculator: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: '600',
      fontSize: '18px',
      letterSpacing: '0',
    },
    footerTitle: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: '600',
      fontSize: '18px',
      letterSpacing: '0',
    },
    footerCaption: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: '700',
      fontSize: '14px',
      letterSpacing: '.5px',
    },
    footerDisclaimers: {
      fontFamily: poppins.style.fontFamily,
      fontWeight: '700',
      fontSize: '16px',
    },
  },
});

theme.components = {
  MuiAppBar: {
    styleOverrides: {
      colorPrimary: {
        backgroundColor: theme.palette.primary.dark,
      },
      colorSecondary: {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: theme.palette.primary.dark,
        width: '250px',
        color: 'white',
      },
    },
  },
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    } as LinkProps,
    styleOverrides: {
      root: {
        color: theme.palette.link.main,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      },
      indicator: {
        height: 0,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        backgroundColor: theme.palette.primary.light,
      },
      selected: {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
    },
    variants: [
      {
        props: { variant: 'outlined' },
        style: {
          border: `1px solid ${theme.palette.primary.light}`,
          '&$expanded': {
            margin: 0,
          },
          borderRadius: 0,
          '&:first-child': {
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          },
          '&:last-child': {
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          },
        },
      },
    ],
  },
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: LinkBehavior,
      disableRipple: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 100,
        boxShadow: 'none',
        textAlign: 'center',
        maxWidth: 'fit-content',
        padding: '10px 24px',
        height: '40px',
        gap: '8px',
        color: theme.palette.text.light,
        textTransform: 'none',
        whiteSpace: 'nowrap',
        fontFamily: theme.typography.button.fontFamily,
        fontSize: theme.typography.button.fontSize,
        fontWeight: theme.typography.button.fontWeight,
        letterSpacing: theme.typography.button.letterSpacing,
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      icon: {
        fontSize: '48px',
        color: theme.palette.primary.dark,
      },
    },
  },
};

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
