import { Box } from '@mui/material';
import React from 'react';

export default function InterceptSurveyForm({ children }: { children: React.ReactElement }) {
  const handleMouseLeave = () => {
    const formId = 'w47j6r';
    window.Tally.openPopup(formId, {
      width: 600,
      showOnce: true,
    });
  };

  return (
    <Box onMouseLeave={handleMouseLeave}>
      {children}
    </Box>
  );
}
