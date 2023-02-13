import "@mui/material";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral?: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    neutral;
  }
}
