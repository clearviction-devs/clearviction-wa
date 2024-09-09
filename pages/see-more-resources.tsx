import {
  Box,
  Container, ContainerProps, List, ListItem, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import Link from 'next/link';
import React from 'react';

import { DarkButton, TextButtonGreen } from '../components/CustomButtons.tsx';
import externalLinks from '../components/ExternalLinks.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import whyVacateContent from '../content/why-vacate.ts';
import theme from '../styles/themes/theme.tsx';

function SMRContainer({
  children,
  id,
  sx,
  ...props
}: ContainerProps) {
  externalLinks();
  return (
    <Container
      component="section"
      id={id}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: {
          md: '936px',
        },
        padding: {
          xs: '52px 24px',
          sm: '52px 24px',
          md: '52px 32px',
          lg: '52px 32px',
          xl: '52px 32px',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}

const vocationalProgramsForOccupationalLicensesMarkdown = `
Some vocational programs have restrictions based on your criminal record. \n
If you are prevented from getting an  occupational license, you might be eligible for a Certificate of Restoration of Opportunity (CROP).  \n
This certificate can prevent most licensed professions from denying you if you meet all other requirements. \n
For more information about a CROP, visit [https://www.washingtonlawhelp.org/resource/certificate-of-restoration-of-opportunity-crop](https://www.washingtonlawhelp.org/resource/certificate-of-restoration-of-opportunity-crop) \n
Here is a packet to help file for a CROP: [https://www.washingtonlawhelp.org/resource/filing-a-petition-for-certificate-of-restoration-of-opportunity-crop](https://www.washingtonlawhelp.org/resource/filing-a-petition-for-certificate-of-restoration-of-opportunity-crop) \n
`;

export default function SeeMoreResources() {
  return (
    <>
      <SMRContainer>
        <Typography variant="h2" sx={{ mb: 0 }}>
          Useful Links and Resources
        </Typography>
      </SMRContainer>
      <SMRContainer sx={{
        gap: '16px',
        padding: { xs: '32px 24px' },
      }}
      >
        <Typography variant="h3" sx={{ lineHeight: '32px' }}>
          Information to support those impacted by the justice system
        </Typography>
        <Typography variant="body1">
          Explore multiple guides that answer common questions and list organizations, services, and resources covering topics from re-entry services to employment.
        </Typography>
        <Link
          href="https://civilsurvival.org/guides/"
          passHref
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '44px',
            color: theme.palette.link.main,
            wordBreak: 'break-all',
            width: 'fit-content',
          }}
        >
          <Typography variant="body1" sx={{ mb: 0 }}>
            https://civilsurvival.org/guides/
          </Typography>
        </Link>
        <Link
          href="https://civilsurvival.org/guides/occupational-guides/"
          passHref
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '44px',
            color: theme.palette.link.main,
            wordBreak: 'break-all',
            width: 'fit-content',
          }}
        >
          <Typography variant="body1" sx={{ mb: 0 }}>
            https://civilsurvival.org/guides/occupational-guides/
          </Typography>
        </Link>
      </SMRContainer>
      <SMRContainer sx={{
        gap: '24px',
      }}
      >
        <Typography variant="h3">
          What if my conviction is not yet eligible?
        </Typography>
        <Box>
          <Typography variant="body1">
            Once all pending charges are resolved, and/or your LFO’s are paid, you can:
          </Typography>
          <List sx={{ padding: 0 }}>
            <ListItem sx={{ py: 0 }}>1. Revisit our calculator to get the most up-to-date result.</ListItem>
            <ListItem sx={{ py: 0 }}>2. If your conviction qualifies for vacation later, follow the step-by-step process on our website to petition the court to vacate.</ListItem>
          </List>
        </Box>
        <DarkButton
          text="Steps for filing with the court"
          href="/get-started/file-with-the-court"
        />
      </SMRContainer>
      <SMRContainer sx={{
        gap: '24px',
      }}
      >
        <Typography variant="h3">
          What if my conviction is eligible?
        </Typography>
        <Typography variant="body1">
          Revisit our “general guidelines” for the step by step process of filing with the court to vacate your conviction and enjoy your new opportunities!
        </Typography>
        <DarkButton
          text="Steps for filing with the court"
          href="/get-started/file-with-the-court"
        />
      </SMRContainer>
      <SMRContainer sx={{
        gap: '24px',
      }}
      >
        <Typography variant="h3">
          Review our helpful employment, housing, and education resources on our website.
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
        >
          {[['Employment resources', '/why-vacate/employment-resources'], ['Housing resources', '/why-vacate/housing-resources'], ['Education resources', '/why-vacate/education-resources']].map(([text, href]) => (
            <TextButtonGreen key={text} text={text} href={href} />
          ))}
        </Box>
      </SMRContainer>
      <SMRContainer sx={{
        padding: {
          xs: '52px 24px 28px 24px',
        },
      }}
      >
        <Typography variant="h3" sx={{ mb: '24px' }}>
          Employment resources
        </Typography>
        <Box sx={{ mt: '16px' }}>
          {
            whyVacateContent.cards[0].accordianItems.map((item) => (
              <AccordionBuilder
                key={item.id}
                id={item.id}
                summary={item.summary}
                details={item.details}
              />
            ))
        }
        </Box>
      </SMRContainer>
      <SMRContainer sx={{ gap: '24' }}>
        {/* <Box> */}
        <Typography variant="h3" sx={{ mb: '24px' }}>
          Vocational programs for occupational licensing
        </Typography>
        {/* </Box> */}
        <MuiMarkdown overrides={{
          p: {
            component: Typography,
            props: {
              variant: 'body1',
              style: {
                marginBottom: '7px',
              },
            },
          },
          a: {
            component: Link,
            props: {
              style: {
                color: theme.palette.link.main,
                wordBreak: 'break-all',
              },
            },
          },
        }}
        >
          {vocationalProgramsForOccupationalLicensesMarkdown}
        </MuiMarkdown>
      </SMRContainer>
      <SMRContainer sx={{
        padding: {
          xs: '52px 24px 28px 24px',
        },
      }}
      >
        <Typography variant="h3" sx={{ mb: '24px' }}>
          Housing resources
        </Typography>
        <Box sx={{ mt: '16px' }}>
          {
            whyVacateContent.cards[1].accordianItems.map((item) => (
              <AccordionBuilder
                key={item.id}
                id={item.id}
                summary={item.summary}
                details={item.details}
              />
            ))
        }
        </Box>
      </SMRContainer>
      <SMRContainer sx={{
        padding: {
          xs: '52px 24px 88px 24px',
        },
      }}
      >
        <Typography variant="h3" sx={{ mb: '24px' }}>
          Educational resources
        </Typography>
        <Box sx={{ mt: '16px' }}>
          {
            whyVacateContent.cards[2].accordianItems.map((item) => (
              <AccordionBuilder
                key={item.id}
                id={item.id}
                summary={item.summary}
                details={item.details}
              />
            ))
        }
        </Box>
      </SMRContainer>
    </>
  );
}
