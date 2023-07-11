import { ButtonBase } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import Image from './Image.tsx';

export default function NavigationLogo({ fullSize = false }) {
  // images are misnamed
  const imgSrc = fullSize ? '/cv_logo_small.svg' : '/cv_logo_inline.svg';
  const imgWidth = fullSize ? 50 : 273;
  return (
    <ButtonBase className="nav-logo" href="/" sx={{ py: fullSize ? 2 : 1, height: '100%' }}>
      <Image src={imgSrc} height={43} width={imgWidth} alt="Clearviction logo" />
    </ButtonBase>
  );
}

NavigationLogo.propTypes = {
  fullSize: PropTypes.bool,
};
