import { Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';

import { PageContext } from '../components/helper/PageContext.tsx';
import { inter, sintony } from '../styles/themes/theme.tsx';

// This block is needed to override the sanity cms built in styling for the calculator
// Only h1,h3,h6,p tags are defined because those are the only styles currently getting used.
// if additional element tags are needed then write another if statement following the logic below.

function BlockTypeComponent(props:any) {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));
  const { node, children } = props;

  const { isFinalPage } = useContext(PageContext);
  const font = isFinalPage ? sintony.style.fontFamily : inter.style.fontFamily;

  if (node.style === 'li') {
    const isOrderedList = node.listItem !== 'bullet'; // Check if it's an ordered list
    const liStyle = isOrderedList ? { textDecoration: 'none' } : {};

    return (
      <Typography sx={{ marginBottom: { sm: '1rem', md: '0' }, ...liStyle }}>{children}</Typography>
    );
  }

  if (node.style === 'h1') {
    const h1Styles = matchesXS
      ? {
        ...theme.calculatorTypography?.h1,
        fontSize: '2rem',
        lineHeight: '3.375rem',
        letterSpacing: '0.11rem',
        fontWeight: '700',
        fontFamily: font,
      }
      : {
        ...theme.calculatorTypography?.h1,
        fontFamily: font,
      };

    return (<Typography variant="h1" style={h1Styles}>{children}</Typography>);
  }

  if (node.style === 'h3') {
    const h3Styles = matchesXS
      ? {
        ...theme.calculatorTypography?.h3,
        fontSize: '1.1875rem',
        lineHeight: '2.438rem',
        letterSpacing: '0',
        fontFamily: font,
      }
      : {
        ...theme.calculatorTypography?.h3,
        fontFamily: font,
      };

    return (<Typography variant="h3" style={h3Styles}>{children}</Typography>);
  }

  if (node.style === 'h6') {
    const normalStyles = matchesXS
      ? {
        ...theme.calculatorTypography?.h6,
        fontSize: '0.75rem',
        lineHeight: '1.1875rem',
        letterSpacing: '0.0375rem',
        fontFamily: font,
      }
      : {
        ...theme.calculatorTypography?.h6,
        fontFamily: font,
      };
    return (<Typography variant="h6" style={normalStyles}>{children}</Typography>);
  }

  if (node.style === 'normal') {
    const normalStyles = matchesXS
      ? {
        ...theme.calculatorTypography?.body1,
        fontSize: '1.125rem',
        letterSpacing: '0.03775',
        fontFamily: font,
      }
      : {
        ...theme.calculatorTypography?.body1,
        fontFamily: font,
      };

    return (<Typography variant="body1" style={normalStyles}>{children}</Typography>);
  }
}

const portableTextComponent = {
  types: {
    block: BlockTypeComponent,
  },
  marks: {
    link: ({ children, mark }: any) => {
      if (!mark || typeof mark.href === 'undefined') {
        return children;
      }
      return <Link href={mark.href} role="link" target={mark.blank ? '_blank' : '_self'} rel="noopener noreferrer">{children}</Link>;
    },
  },
  annotations: [
    {
      name: 'link',
      type: 'object',
      title: 'URL',
      fields: [
        {
          title: 'URL',
          name: 'href',
          type: 'url',
        },
      ],
    },
  ],
};

export default portableTextComponent;
