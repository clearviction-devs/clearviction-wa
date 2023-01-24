import {
  Roboto,
  Open_Sans,
  Oswald,
  Lato,
  League_Gothic,
} from '@next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const leagueGothic = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: 'normal',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1F73B7',
    },
    secondary: {
      main: '#E3655B',
    },
  },
  typography: {
    fontFamily: lato.style.fontFamily,
    h1: {
      fontFamily: leagueGothic.style.fontFamily,
    },
    h2: {
      fontFamily: leagueGothic.style.fontFamily,
      fontWeight: '500',
    },
    h3: {
      fontFamily: leagueGothic.style.fontFamily,
    },
    h4: {
      fontFamily: leagueGothic.style.fontFamily,
    },
    h5: {
      fontFamily: leagueGothic.style.fontFamily,
    },
    h6: {
      fontFamily: leagueGothic.style.fontFamily,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
