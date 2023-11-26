import { grey } from '@mui/material/colors';
import { LinkProps } from '@mui/material/Link';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Inter, Sintony } from 'next/font/google';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React, { forwardRef } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    link: Palette['primary'];
  }

  interface PaletteOptions {
    link?: PaletteOptions['primary'];
  }
}

export const sintony = Sintony({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const LinkBehavior = forwardRef<HTMLAnchorElement, NextLinkProps>(
  (props, ref) => <NextLink ref={ref} {...props} />,
);

const theme = createTheme({
  spacing: 8,
  palette: {
    mode: 'light',
    primary: {
      light: '#A7B5CC',
      main: '#4E6C99',
      dark: '#2F3554',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#FFEEA3',
      main: '#FFD200',
      contrastText: '#000000',
    },
    // where did this come from?
    neutral: {
      main: '#FFFFFF',
      dark: grey[400],
      contrastText: '#2F3554',
    },
    error: {
      main: '#DF1F1F',
    },
    info: {
      main: '#007CFF',
    },
    success: {
      main: '#2A8613',
    },
    text: {
      primary: '#000000',
      secondary: '#4E6C99',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    link: {
      main: '#007CFF',
    },
  },
  typography: {
    h1: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: 'normal',
      fontSize: '5.25rem',
      letterSpacing: '-0.0938rem',
      marginBottom: '1.25rem',
    },
    h2: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: 'normal',
      fontSize: '3.5rem',
      letterSpacing: '-0.0313rem',
      marginBottom: '1.5rem',
    },
    h3: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: 'normal',
      fontSize: '2.8125rem',
      letterSpacing: '0',
      marginBottom: '.5rem',
    },
    h4: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: 'bold',
      fontSize: '2rem',
      letterSpacing: '.0156rem',
      marginBottom: '.5rem',
    },
    h5: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: 'bold',
      fontSize: '1.625rem',
      letterSpacing: '.0156rem',
      marginBottom: '.5rem',
    },
    h6: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: 'bold',
      fontSize: '1.375rem',
      letterSpacing: '.0094rem',
      marginBottom: '.5rem',
    },
    subtitle1: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: 'normal',
      fontSize: '1.375rem',
      letterSpacing: '.0094rem',
      // lineHeight: '1.5',
      marginBottom: '1.25rem',
    },
    subtitle2: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: 'normal',
      fontSize: '1.25rem',
      letterSpacing: '.0063rem',
      marginBottom: '1rem',
    },
    body1: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 'normal',
      fontSize: '1.25rem',
      letterSpacing: '.0313rem',
      marginBottom: '0',
    },
    body2: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 'normal',
      fontSize: '1.125rem',
      letterSpacing: '.0156rem',
      marginBottom: '0',
    },
    button: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 'medium',
      fontSize: '1.125rem',
      letterSpacing: '.0625rem',
    },
    caption: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 'light',
      fontSize: '.875rem',
      letterSpacing: '.0313rem',
    },
    overline: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 'normal',
      fontSize: '.75rem',
      letterSpacing: '.0938rem',
    },
  },
});

theme.components = {
  MuiAppBar: {
    styleOverrides: {
      colorPrimary: {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: theme.palette.primary.dark,
        width: '15.625rem',
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
        fontSize: '.875rem',
        backgroundColor: theme.palette.primary.light,
      },
      selected: {
        color: theme.palette.primary.dark,
        backgroundColor: 'white',
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
          border: `.0625rem solid ${theme.palette.primary.light}`,
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
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 50,
        textAlign: 'center',
        minWidth: 'max-content',
        margin: '.625rem auto',
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      icon: {
        fontSize: '3rem',
        color: theme.palette.primary.dark,
      },
    },
  },
};

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
