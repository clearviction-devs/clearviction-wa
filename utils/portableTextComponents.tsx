import { Link } from '@mui/material';
import React, { ReactNode } from 'react';

type LinkMarkProps = {
  children: ReactNode;
  value: {
    href: string;
  }
}
// eslint-disable-next-line import/prefer-default-export
export const portableTextComponent = {
  marks: {
    linkEl: ({ children, value }: LinkMarkProps) => (
      <Link href={value.href}>
        {children}
      </Link>
    ),
  },
};
