import { ButtonBase } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function NavigationLogo({ fullSize = false }) {
  return (
    <ButtonBase href="/" sx={{ py: fullSize ? 2 : 1, height: '100%' }}>
      {fullSize ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/cv_logo_inline.svg" height="100%" alt="Clearviction logo" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/cv_logo_small.svg" height="100%" alt="Clearviction logo" />
      )}
    </ButtonBase>
  );
}

NavigationLogo.propTypes = {
  fullSize: PropTypes.bool,
};
