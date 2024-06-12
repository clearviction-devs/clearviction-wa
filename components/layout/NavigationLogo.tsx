import { ButtonBase } from '@mui/material';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';

interface NavigationLogoProps {
  sx?: object;
  fullSize?: boolean;
}

export default function NavigationLogo({ sx, fullSize = false }: NavigationLogoProps) {
  const imgSrc = '/cv-logo1.svg';
  const imgWidth = fullSize ? 50 : 28;
  return (
    <ButtonBase className="nav-logo" href="/" sx={{ py: fullSize ? 2 : 1, height: '100%', ...sx }}>
      <ImageContainer src={imgSrc} height={100} width={imgWidth} alt="Clearing Convictions" />
    </ButtonBase>
  );
}
