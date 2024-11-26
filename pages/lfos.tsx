import { Typography } from '@mui/material';
import React from 'react';

import externalLinks from '../components/ExternalLinks.tsx';
import IndividualPageHead from '../components/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import content from '../content/get-started.ts';
import { GSContainer } from './get-started/index.tsx';

export default function Lfos() {
  externalLinks();
  return (
    <>
      <IndividualPageHead
        title="What are Legal Financial Obligations (LFOs) in WA | Conviction Vacation Initiative"
        metaContent="Learn about Legal Financial Obligations (LFOs) in WA State, how they impact vacating criminal records, how to manage them, and their role in the court process"
      />
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
