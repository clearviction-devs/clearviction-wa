## Examples

### Navigation Logo

```jsx
// NavigationLogo.jsx

import { ButtonBase } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function NavigationLogo() {
  const theme = useTheme();
  // Prefer the useMediaQuery hook from MUI for
  // conditionally rendering components based on screen size.
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <ButtonBase
      href='/'
      // An object of breakpoints can be passed in to
      // create responsive designs based on screen width.
      sx={{ p: { xs: 1, md: 2 }, height: '100%' }}
    >
      {matches ? (
        <img src='/cv_logo_inline.svg' height={'100%'} />
      ) : (
        <img src='/cv_logo_small.svg' height={'100%'} />
      )}
    </ButtonBase>
  );
}
```

## Buttons

For most buttons, use the [MUI Button](https://mui.com/material-ui/react-button/) component. It is already themed according to our design system. `variant` props include "text", "contained", and "outlined". Commonly used `color` props include "primary", "secondary", and "neutral". Buttons also take an optional `fullWidth` prop. If this prop is present (or true), the button will stretch to fit the width of its parent container.

If an image should be clickable (such as the header logo), use a ButtonBase component. For icon buttons, see the [Icon Button Section of the MUI Button docs](https://mui.com/material-ui/react-button/#icon-button).

## Links

The [MUI Link](https://mui.com/material-ui/react-link/) component has been altered so that it always takes advantage of [next/link](https://nextjs.org/docs/api-reference/next/link) features. To create a text link, import the `Link` component from MUI.

In addition, the [MUI ButtonBase](https://mui.com/material-ui/api/button-base/) component will also use [next/link](https://nextjs.org/docs/api-reference/next/link) if it is given an `href` prop.
