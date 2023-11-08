import { Link } from '@mui/material';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const portableTextComponent = {
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
