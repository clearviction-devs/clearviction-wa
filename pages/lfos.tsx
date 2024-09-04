import { Typography } from '@mui/material';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import content from '../content/get-started.ts';
import { GSContainer } from './get-started/index.tsx';

export default function Lfos() {
  externalLinks();
  return (
    <>
      <GSContainer>
        <Typography variant="h1">
          What are "Legal Financial Obligations"?
        </Typography>
        <Typography variant="body2">
          LFOs (or Legal Financial Obligations) are the fines, fees, costs and restitution imposed by the court on top of a criminal sentence. Almost every person convicted in a Washington court receives a bill for LFOs at sentencing.
        </Typography>
        <Typography variant="body2">
          Unpaid LFOs can prevent you from vacating a conviction record.
        </Typography>
      </GSContainer>
      <GSContainer>
        <Typography variant="h3">
          Legal Financial Obligations FAQs
        </Typography>
        {content.LFOFAQs.map((item) => (
          <AccordionBuilder
            key={item.id}
            id={item.id}
            summary={item.summary}
            details={item.details}
          />
        ))}

      </GSContainer>
    </>
  );
}
