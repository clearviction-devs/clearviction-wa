import { Link, Typography } from '@mui/material';
import { PortableTextComponents } from 'next-sanity';
import React from 'react';

import theme from '../styles/themes/theme.tsx';

const portableTextComponent: PortableTextComponents = {
  block: {
    h1: ({ children }: any) => <Typography variant="h1" style={theme.typography.h1}>{children}</Typography>,
    h2: ({ children }: any) => <Typography variant="h2" style={theme.typography.h2}>{children}</Typography>,
    h3: ({ children }: any) => <Typography style={theme.typography.h3}>{children}</Typography>,
    // eslint-disable-next-line max-len
    headingCalculator: ({ children }: any) => <Typography style={theme.typography.headingCalculator}>{children}</Typography>,
    body1: ({ children }: any) => <Typography variant="body1" style={theme.typography.body1}>{children}</Typography>,
    body2: ({ children }: any) => <Typography variant="body2" style={theme.typography.body2}>{children}</Typography>,
    caption: ({ children }: any) => <Typography variant="caption" style={theme.typography.caption}>{children}</Typography>,
  },
  marks: {
    link: ({ children, value }: any) => <Link href={value.href} role="link" target={value.blank ? '_blank' : '_self'} rel="noopener noreferrer">{children}</Link>,
  },
};

export default portableTextComponent;
