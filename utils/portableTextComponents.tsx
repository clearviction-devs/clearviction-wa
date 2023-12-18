import { Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Inter } from 'next/font/google';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
function BlockTypeComponent(props:any) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { node, children } = props;

  if (node.style === 'li') {
    const isOrderedList = node.listItem !== 'bullet'; // Check if it's an ordered list
    const liStyle = isOrderedList ? { textDecoration: 'none' } : {};
    return (
      <Typography style={{ marginBottom: isSmallScreen ? '1rem' : '0', ...liStyle }}>{children}</Typography>
    );
  }
  if (node.style === 'h1') {
    const h1Styles = isSmallScreen
      ? {
        fontSize: '2rem', lineHeight: '3.375rem', letterSpacing: '0.11rem', fontStyle: 'normal', fontWeight: '700', fontFamily: inter.style.fontFamily,
      } // smaller font size for small screen
      : {
        fontSize: '2.5rem', lineHeight: '3.75rem', letterSpacing: '0.05rem', fontStyle: 'normal', fontWeight: '600', fontFamily: inter.style.fontFamily,
      };
    return (<Typography variant="h1" style={h1Styles}>{children}</Typography>);
  }
  if (node.style === 'h3') {
    const h3Styles = isSmallScreen
      ? {
        fontSize: '1.188rem', lineHeight: '2.438rem', letterSpacing: '0', fontStyle: 'normal', fontWeight: '400', fontFamily: inter.style.fontFamily,
      } // smaller font size for small screen
      : {
        fontSize: '1.25rem', lineHeight: '1.875rem,', letterSpacing: '0.00625rem', fontStyle: 'normal', fontWeight: '400', fontFamily: inter.style.fontFamily,
      };
    return (<Typography variant="h3" style={h3Styles}>{children}</Typography>);
  }
  if (node.style === 'h6') {
    const normalStyles = isSmallScreen
      ? {
        fontSize: '0.75rem', lineHeight: '1.1875rem', letterSpacing: '0.0375', fontStyle: 'normal', fontWeight: '600', fontFamily: inter.style.fontFamily,
      } // smaller font size for small screen
      : {
        fontSize: '0.875rem', lineHeight: 'normal', letterSpacing: '0.0175rem', fontStyle: 'normal', fontWeight: '600', fontFamily: inter.style.fontFamily,
      };
    return (<Typography variant="body1" style={normalStyles}>{children}</Typography>);
  }
  if (node.style === 'normal') {
    const normalStyles = isSmallScreen
      ? {
        fontSize: '1.125rem', lineHeight: '1.625rem', letterSpacing: '0.03775', fontStyle: 'normal', fontWeight: '600', fontFamily: inter.style.fontFamily, marginBottom: '1rem',
      } // smaller font size for small screen
      : {
        fontSize: '1.25rem', lineHeight: '1.625rem', letterSpacing: '0.03125rem', fontStyle: 'normal', fontWeight: '600', fontFamily: inter.style.fontFamily,
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
      return <Link href={mark.href} role="link" target={mark.blank ? '_blank' : '_self'} rel="noopener no referrer">{children}</Link>;
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
