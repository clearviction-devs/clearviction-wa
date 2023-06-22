import { ButtonBase } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface NavigationLogoProps {
  fullSize?: boolean;
}

export default function NavigationLogo({ fullSize = false }: NavigationLogoProps) {
  // images are misnamed
  const imgSrc = fullSize ? '/cv_logo_small.svg' : '/cv_logo_inline.svg';
  const imgWidth = fullSize ? 50 : 273;
  return (
    <ButtonBase className="nav-logo" href="/" sx={{ py: fullSize ? 2 : 1, height: '100%' }}>
      <Image src={imgSrc} height={43} width={imgWidth} alt="Clearviction logo" />
    </ButtonBase>
  );
}
