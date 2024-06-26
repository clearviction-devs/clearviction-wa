import { Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

// This block is needed to override the sanity cms built in styling for the calculator
// using the available typography options on Sanity

function BlockTypeComponent(props:any) {
  const theme = useTheme();
  const { node, children } = props;

  // H1 = Heading 1
  if (node.style === 'h1') {
    return (<Typography variant="h1" style={theme.typography.h1}>{children}</Typography>);
  }

  // H2 = Heading 2
  if (node.style === 'h2') {
    return (<Typography variant="h2" style={theme.typography.h2}>{children}</Typography>);
  }

  // H3 = Heading 3
  if (node.style === 'h3') {
    return (<Typography variant="h3" style={theme.typography.h3}>{children}</Typography>);
  }

  // H4 = Heading Calc
  if (node.style === 'h4') {
    return (<Typography style={theme.typography.headingCalculator}>{children}</Typography>);
  }

  // H5 = Body 1
  if (node.style === 'h5') {
    return (<Typography variant="body1" style={theme.typography.body1}>{children}</Typography>);
  }

  // H6 = Body 2
  if (node.style === 'h6') {
    return (<Typography style={theme.typography.body2}>{children}</Typography>);
  }

  // Normal = Caption
  if (node.style === 'normal') {
    return (<Typography style={theme.typography.caption}>{children}</Typography>);
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
