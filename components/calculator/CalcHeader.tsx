import { Container } from '@mui/material';
import React from 'react';

import { StaticCalcProps } from '../../utils/calculator.props.ts';
import CalcStepper from './CalcStepper.tsx';

export default function CalcHeader({ page }:
    { page: StaticCalcProps['page']
    }) {
  const isPageIncludedInStepper = () => {
    const excludedPageSlugs = ['start', 'head'];
    const isPartOfHead = excludedPageSlugs.some((slug) => page.slug.includes(slug));
    const { isFinalPage } = page;
    return !(isFinalPage || isPartOfHead);
  };

  return (
    <Container id="calc-head-container" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>

      {isPageIncludedInStepper() && <CalcStepper />}

    </Container>
  );
}
