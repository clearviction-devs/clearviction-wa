import { ButtonBase } from '@mui/material';
import Link from 'next/link';

export default function NavigationLogo({ fullSize = false }) {
  return (
    <ButtonBase href='/' sx={{ py: fullSize ? 2 : 1, height: '100%' }}>
      {fullSize ? (
        <img src='/cv_logo_inline.svg' height={'100%'} />
      ) : (
        <img src='/cv_logo_small.svg' height={'100%'} />
      )}
    </ButtonBase>
  );
}
