import {
  Button,
  Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';
import StaticCalcProps from '../../utils/calculator.props.ts';
import portableTextComponent from '../../utils/portableTextComponents.tsx';

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
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          backgroundColor: 'secondary.dark',
          color: 'text.light',
          fontFamily: theme.typography.h3.fontFamily,
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
        <Button onClick={() => setOpenNotSurePopup(false)} data-cy="not-sure-pop-up-close" sx={{ backgroundColor: 'secondary.dark' }}>
          {calculatorConfig.notSureAnswer.closeText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
