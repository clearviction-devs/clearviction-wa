import {
  Button,
  Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import React from 'react';

import { SharedCalcProps, StaticCalcProps } from '../../utils/calculator.props.ts';
import portableTextComponent from '../../utils/portableTextComponents.tsx';

export default function NotSurePopup({ calculatorConfig, openNotSurePopup, setOpenNotSurePopup }: {
    calculatorConfig: StaticCalcProps['calculatorConfig'],
    openNotSurePopup: SharedCalcProps['openNotSurePopup'],
    setOpenNotSurePopup: SharedCalcProps['setOpenNotSurePopup'],
  }) {
  return (
    <Dialog
      open={openNotSurePopup}
      onClose={() => setOpenNotSurePopup(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      data-cy="not-sure-popup"
    >
      <DialogTitle id="alert-dialog-title">
        {calculatorConfig.notSureAnswer.header}
      </DialogTitle>
      <DialogContent>
        <PortableText
          value={calculatorConfig.notSureAnswer.content}
          components={portableTextComponent}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenNotSurePopup(false)} data-cy="not-sure-pop-up-close" sx={{ backgroundColor: 'secondary.dark' }}>
          {calculatorConfig.notSureAnswer.closeText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
