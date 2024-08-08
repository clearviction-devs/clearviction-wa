import '@mui/material';
import '@mui/material/styles';

import { TypographyStyleOptions } from '@mui/material/styles/createTypography';


declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    light?: string
    focus?: string
  }

  interface TypeBackground {
    dark?: string
    alternative?: string
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    link: true;
    tertiary: true;
  }
}

declare module '@mui/material/styles' {
  interface PaletteOptions {
    link?: PaletteOptions['primary'];
    tertiary?: PaletteOptions['primary'];
  }

  interface Palette {
    link: Palette['primary'];
    tertiary: Palette['primary'];
  }

  interface TypographyVariants {
    button2: TypographyStyleOptions;
    headingCalculator: TypographyStyleOptions;
    footerTitle: TypographyStyleOptions;
    footerCaption: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    button2?: TypographyStyleOptions;
    headingCalculator?: TypographyStyleOptions;
    footerTitle?: TypographyStyleOptions;
    footerCaption?: TypographyStyleOptions;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headingCalculator: true;
    footerTitle: true;
    footerCaption: true;
  }
}