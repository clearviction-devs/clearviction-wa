import {
  Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';
import StaticCalcProps from '../../utils/calculator.props.ts';
import portableTextComponent from '../../utils/portableTextComponents.tsx';
import { CalculatorButton } from '../helper/CustomButtons.tsx';

export default function NotSurePopup({ calculatorConfig, openNotSurePopup, setOpenNotSurePopup }: {
    calculatorConfig: StaticCalcProps['calculatorConfig'],
    openNotSurePopup: boolean,
    setOpenNotSurePopup: React.Dispatch<React.SetStateAction<boolean>>,
  }) {
  return (
    <Dialog
      open={openNotSurePopup}
      onClose={() => setOpenNotSurePopup(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      data-cy="not-sure-popup"
      sx={{
        width: '312px',
        minHeight: '394px',
        margin: 'auto',
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          backgroundColor: 'secondary.dark',
          color: 'text.light',
          fontFamily: theme.typography.h3.fontFamily,
          fontWeight: 600,
        }}
      >
        {calculatorConfig.notSureAnswer.header}
      </DialogTitle>
      <DialogContent sx={{
        backgroundColor: 'secondary.dark',
        color: 'text.light',
      }}
      >
        <PortableText
          value={calculatorConfig.notSureAnswer.content}
          components={portableTextComponent}
        />
      </DialogContent>
      <DialogActions sx={{
        backgroundColor: 'secondary.dark',
        color: 'text.light',
      }}
      >
        <CalculatorButton handleClick={() => setOpenNotSurePopup(false)} data-cy="not-sure-pop-up-close">
          {calculatorConfig.notSureAnswer.closeText}
        </CalculatorButton>
      </DialogActions>
    </Dialog>
  );
}
