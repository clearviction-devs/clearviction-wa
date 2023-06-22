import { Button, ButtonProps, SxProps } from '@mui/material';
import React from 'react';

const styles: SxProps = {
  position: 'fixed',
  ':not(:focus)': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  },
};

interface Props extends ButtonProps {
  skipTo?: string;
}

export default function SkipLink({ skipTo }: Props) {
  return (
    <Button sx={styles} href={skipTo} variant="contained" color="neutral">
      Skip to Content
    </Button>
  );
}

SkipLink.defaultProps = {
  skipTo: '#main',
};
