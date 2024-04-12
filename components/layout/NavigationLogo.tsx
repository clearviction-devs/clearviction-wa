import { ButtonBase } from '@mui/material';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';

interface NavigationLogoProps {
  fullSize?: boolean;
}

export default function NavigationLogo({ fullSize = false }: NavigationLogoProps) {
  const imgSrc = fullSize ? '/cvlogo-sm.svg' : '/cvlogo-lg.svg';
  const imgWidth = fullSize ? 50 : 275;
  return (
    <ButtonBase className="nav-logo" href="/" sx={{ py: fullSize ? 2 : 1, height: '100%' }}>
      <ImageContainer src={imgSrc} height={100} width={imgWidth} alt="Clearing Convictions" />
    </ButtonBase>
  );
}
