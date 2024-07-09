import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import MuiMarkdown from 'mui-markdown';
import React, { useState } from 'react';

interface InfoDropdownProps {
  id: string;
  summary: string;
  details: string;
}

export default function InfoDropdown({
  id,
  summary,
  details,
}: InfoDropdownProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === id}
      onChange={handleChange(id)}
      sx={{ textAlign: 'left', mb: 1 }}
    >
      <AccordionSummary
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        expandIcon={expanded === id ? <RemoveIcon /> : <AddIcon />}
        sx={{ backgroundColor: '#D0E4FF' }}
      >
        <MuiMarkdown overrides={{
          span: {
            component: Typography,
            props: {
              variant: 'headingCalculator',
              sx: { margin: 0 },
            },
          },
        }}
        >
          {summary}
        </MuiMarkdown>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: grey[50] }}>
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
