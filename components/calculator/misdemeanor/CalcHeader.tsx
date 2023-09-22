import { Button, Container, SvgIcon } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { SharedCalcProps, StaticCalcProps } from '../../../utils/calculator.props.ts';
import CalcStepper from '../../functional/CalcStepper.tsx';

export default function CalcHeader({ page, isFirstPage }:
    { page: StaticCalcProps['page'],
      isFirstPage: SharedCalcProps['isFirstPage']
    }) {
  const router = useRouter();

  const isPageIncludedInStepper = () => {
    const excludedPageSlug = 'head';
    const isPartOfHead = page.slug.includes(excludedPageSlug);
    const { isFinalPage } = page;
    return !(isFinalPage || isPartOfHead);
  };

  return (
    <Container id="calc-head-container" sx={{ marginTop: '2rem' }}>

      {!isFirstPage() && (
      <Button
        type="button"
        id="back-button"
        onClick={() => {
          router.back();
        }}
      >
        <SvgIcon
          sx={{ marginRight: '10px' }}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
        >
          <path
            d="M11.8341 1.8701L10.0541 0.100098L0.164062 10.0001L10.0641 19.9001L11.8341 18.1301L3.70406 10.0001L11.8341 1.8701Z"
            fill="#4e6c99"
          />
        </SvgIcon>
        previous
      </Button>
      )}

      {isPageIncludedInStepper() && <CalcStepper />}

    </Container>
  );
}
