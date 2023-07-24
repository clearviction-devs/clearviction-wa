import { Link } from '@mui/material';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const portableTextComponent = {
  marks: {
    link: ({ children, value }: any) => <Link href={value.href}>{children}</Link>,
  },
};
