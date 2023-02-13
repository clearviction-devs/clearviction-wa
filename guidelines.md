# Guidelines

Below are some rough guidelines for the team as we work to rebuild the Clearviction website. Please feel free to contribute to these guidelines with your own thoughts or any best practices we decide to implement.

## What we use

A list of things we use in our tech stack -

- [Next.js](https://nextjs.org/)
- [MUI](https://mui.com/)
- [Material Icons](https://mui.com/material-ui/material-icons/)

## Next.js

Since we have little, if any, dynamic content currently, our site should be able to take full advantage of Next's Static Site Generation capabilities.

Next's documentation is very extensive, and usually helpful in solving any blockers.

Keep in mind, we are **not** using the [app directory](https://beta.nextjs.org/docs/app-directory-roadmap), which is currently in beta. MUI is currently not supporting the app directory. This may change in the future.

### Routing

Next.js handles routing for us. See the [documentation](https://nextjs.org/docs/routing/introduction) for more details. Put simply, creating a new page is as easy as creating a new file in the `/pages` directory.

See the section on [Links below](#links) for information on how to link between pages.

## Examples

### Navigation Logo

```jsx
// NavigationLogo.jsx

import { ButtonBase } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function NavigationLogo() {
  const theme = useTheme();
  // Prefer the useMediaQuery hook from MUI for
  // conditionally rendering components based on screen size.
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <ButtonBase
      href="/"
      // An object of breakpoints can be passed in to
      // create responsive designs based on screen width.
      sx={{ p: { xs: 1, md: 2 }, height: "100%" }}
    >
      {matches ? (
        <img src="/cv_logo_inline.svg" height={"100%"} />
      ) : (
        <img src="/cv_logo_small.svg" height={"100%"} />
      )}
    </ButtonBase>
  );
}
```

## Components

Since we use MUI, efforts should be made to their components wherever possible in lieu of building our own custom solutions. Building a new component isn't a bad thing, however.

Wrapping an array of `<Accordion>` MUI components in a new component that takes an array of FAQ's is great. Creating a `<WiderButton>` component would be discouraged, however.

There's a fine line to walk between bloating our codebase with unnecessary components and nesting too much logic within a page.

### Styling Components

For the most part, prefer using the [`sx` prop](https://mui.com/system/getting-started/the-sx-prop/) to build styles into MUI components.

When implementing an MUI component, be sure to check the MUI docs for its API. Some have styling props built in that come in handy very often (such as [`<Container>`](https://mui.com/material-ui/api/container/) and its `maxWidth` prop, which allows you to pass in a breakpoint as a string.)

For our use-case, it is likely rare that we will need to use the [styled()](https://mui.com/system/styled/) system, since MUI provides most components we'll need out of the box.

### Buttons

For most buttons, use the [MUI Button](https://mui.com/material-ui/react-button/) component. It is already themed according to our design system. `variant` props include "text", "contained", and "outlined". Commonly used `color` props include "primary", "secondary", and "neutral". Buttons also take an optional `fullWidth` prop. If this prop is present (or true), the button will stretch to fit the width of its parent container.

If an image should be clickable (such as the header logo), use a ButtonBase component. For icon buttons, see the [Icon Button Section of the MUI Button docs](https://mui.com/material-ui/react-button/#icon-button).

### Links

The [MUI Link](https://mui.com/material-ui/react-link/) component has been altered so that it always takes advantage of [next/link](https://nextjs.org/docs/api-reference/next/link) features. To create a text link, import the `Link` component from MUI.

In addition, the [MUI ButtonBase](https://mui.com/material-ui/api/button-base/) component will also use [next/link](https://nextjs.org/docs/api-reference/next/link) if it is given an `href` prop.
