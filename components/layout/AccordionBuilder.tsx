import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  SxProps,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import MuiMarkdown from 'mui-markdown';
import React, { useState } from 'react';

import theme from '../../styles/themes/theme.tsx';

interface InfoDropdownProps {
  id: string;
  summary: string;
  details: string;
  sx?: SxProps;
}

export default function InfoDropdown({
  id,
  summary,
  details,
  sx,
}: InfoDropdownProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === id}
      onChange={handleChange(id)}
      sx={{ textAlign: 'left', mb: 1, boxShadow: 'none' }}
    >
      <AccordionSummary
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        expandIcon={expanded === id ? <RemoveIcon /> : <AddIcon />}
        sx={{ ...sx }}
      >
        <MuiMarkdown overrides={{
          span: {
            component: Typography,
            props: {
              variant: 'headingCalculator',
              sx: { my: 2 },
            },
          },
        }}
        >
          {summary}
        </MuiMarkdown>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: grey[50], border: '4px solid', borderColor: theme.palette.primary.light }}>
        <Box px={2} sx={{ '& p': { my: 2 } }}>
          <MuiMarkdown overrides={{
            p: {
              component: Typography,
              props: {
                variant: 'body2',
              },
            },
            li: {
              component: Typography,
              props: {
                variant: 'body2',
                component: 'li',
              },
            },
          }}
          >
            {details}
          </MuiMarkdown>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
