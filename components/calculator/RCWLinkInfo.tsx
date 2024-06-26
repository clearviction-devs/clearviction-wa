import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import theme from '../../styles/themes/theme.tsx';

const md = 'Throughout the calculator, you may need to view the [RCW links](https://app.leg.wa.gov/RCW/default.aspx) provided for each question to determine your answers.';

export default function RCWLinkInfo() {
  return (
    <Box
      mb={8}
      padding="32px 24px"
      sx={{
        display: 'flex',
        gap: '8px',
      }}
    >
      <InfoOutlinedIcon style={{
        color: theme.palette.secondary.dark,
        fontSize: '24px',

      }}
      />
      <MuiMarkdown overrides={{
        span: {
          component: Typography,
          props: {
            variant: 'body2',
          },
        },
        a: {
          component: 'a',
          props: {
            target: '_blank',
            rel: 'noopener noreferrer',
            style: {
              color: theme.palette.secondary.dark,
              fontWeight: 'bold',
            },
          },
        },
      }}
      >
        {md}
      </MuiMarkdown>
    </Box>
  );
}
