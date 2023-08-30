import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import React, { useState } from 'react';

import { SharedCalcProps, StaticCalcProps } from '../../../utils/calculator.props.ts';
import { portableTextComponent } from '../../../utils/portableTextComponents.tsx';
import ShareButtons from '../../helper/ShareButtons.tsx';

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
        <Button onClick={() => setOpenNotSurePopup(false)}>
          {calculatorConfig.notSureAnswer.closeText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export function ShareCalculatorPopup({ openSharePopup, setOpenSharePopup }: {
    openSharePopup: SharedCalcProps['openSharePopup'],
    setOpenSharePopup: SharedCalcProps['setOpenSharePopup'],
  }) {
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const popup = true;

  const closeDialog = () => {
    setTimeout(() => {
      setOpenSharePopup(false);
    }, 10);

    setTimeout(() => {
      setShareLinkCopied(false);
    }, 350);
  };

  return (
    <Dialog
      open={openSharePopup}
      onClose={() => closeDialog()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <CloseIcon
        color="inherit"
        onClick={() => closeDialog()}
        aria-label="close"
        style={{
          position: 'absolute', top: '.625rem', right: '.625rem',
        }}
      />
      <ShareButtons
        popup={popup}
        setShareLinkCopied={setShareLinkCopied}
        shareLinkCopied={shareLinkCopied}
      />
    </Dialog>
  );
}
