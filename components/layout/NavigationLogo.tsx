import { ButtonBase } from '@mui/material';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';

export default function NavigationLogo() {
  const imgSrc = '/newlogo.svg';
  return (
    <ButtonBase className="nav-logo" href="/" sx={{ py: 1, height: '100%' }}>
      <ImageContainer src={imgSrc} height={43} width={50} alt="Clearing Convictions" />
    </ButtonBase>
  );
}
