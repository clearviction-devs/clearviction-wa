import { Link, Typography } from '@mui/material';
import React from 'react';

import theme from '../styles/themes/theme.tsx';

const portableTextComponent = {
  block: {
    headingCalculator: ({ children }: any) => <Typography style={theme.typography.headingCalculator}>{children}</Typography>,
    body1: ({ children }: any) => <Typography variant="body1" style={theme.typography.body1}>{children}</Typography>,
    body2: ({ children }: any) => <Typography variant="body2" style={theme.typography.body2}>{children}</Typography>,
  },
  marks: {
    link: ({ children, value }: any) => {
      if (!value.href) return children;
      return <Link href={value.href} role="link" target={value.blank ? '_blank' : '_self'} rel="noopener no referrer">{children}</Link>;
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
