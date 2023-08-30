import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import React from 'react';

import { SharedCalcProps } from '../../../utils/calculator.props.ts';

export default function ResultsDownloadContainer({ handleCloseResults, setShowResults }: {
    handleCloseResults: SharedCalcProps['handleCloseResults'],
    setShowResults: SharedCalcProps['setShowResults'],
  }) {
  const saveAsPDF = async () => {
    /* eslint new-cap: ["error", { "newIsCap": false }] */
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    const data1 = await html2canvas(document.querySelector('#firstPage')!);
    const img1 = data1.toDataURL('image/png');
    const imgProperties1 = pdf.getImageProperties(img1);
    const pdfWidth1 = pdf.internal.pageSize.getWidth();
    const pdfHeight1 = (imgProperties1.height * pdfWidth1) / imgProperties1.width;

    const data2 = await html2canvas(document.querySelector('#results-page')!);
    const img2 = data2.toDataURL('image/png');
    const imgProperties2 = pdf.getImageProperties(img2);
    const pdfWidth2 = pdf.internal.pageSize.getWidth();
    const pdfHeight2 = (imgProperties2.height * pdfWidth2) / imgProperties2.width;

    pdf.addImage(img1, 'PNG', 0, 0, pdfWidth1, pdfHeight1);
    pdf.addPage('a4', 'portrait');
    pdf.addImage(img2, 'PNG', 0, 0, pdfWidth2, pdfHeight2);

    pdf.save('clearviction_calc_results.pdf');
    if (window.innerWidth < 901) handleCloseResults();
  };

  const handleDownloadClick = () => {
    // print section must be on the page before save as pdf will work
    setShowResults(true);
    setTimeout(() => { saveAsPDF(); }, 500);
  };

  return (
    <Button
      onClick={() => handleDownloadClick()}
    >
      Download responses
    </Button>
  );
}
