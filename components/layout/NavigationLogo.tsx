import { ButtonBase } from '@mui/material';
import React from 'react';

import ImageContainer from './ImageContainer.tsx';

interface NavigationLogoProps {
  fullSize?: boolean;
}

export default function NavigationLogo({ fullSize = false }: NavigationLogoProps) {
  // images are misnamed
  const imgSrc = fullSize ? '/cv_logo_small.svg' : '/cv_logo_inline.svg';
  const imgWidth = fullSize ? 50 : 273;
  return (
    <ButtonBase className="nav-logo" href="/" sx={{ py: fullSize ? 2 : 1, height: '100%' }}>
      <ImageContainer src={imgSrc} height={43} width={imgWidth} alt="Clearviction" />
    </ButtonBase>
  );
}
