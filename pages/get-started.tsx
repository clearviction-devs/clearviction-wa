/* eslint-disable react/no-danger */
import {
  Button, ButtonGroup, Grid, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

import useScroll from '../components/functional/CustomScroll.tsx';
import externalLinks from '../components/functional/ExternalLinks.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import FactCard from '../components/layout/FactCard.tsx';
import GetStartedStep from '../components/layout/GetStartedStep.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/get-started.ts';

export default function GetStartedPage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));
  const { handleLinkClick } = useScroll();

  externalLinks();

  return (
    <>
      <IndividualPageHead
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <HeroBanner
        header={content.hero.header}
        subheading={content.hero.subheading}
        imgsrc={content.hero.imgsrc}
        ctaLink={content.hero.ctaLink}
        ctaText={content.hero.ctaText}
        priority
      />

      <SectionContainer>
        <ButtonGroup
          variant="text"
          fullWidth
          orientation={matchesXS ? 'vertical' : 'horizontal'}
        >
          {
            content.buttons.map((button) => (
              <Button
                key={button.href}
                data-href={button.href}
                onClick={handleLinkClick}
              >
                {button.name}
              </Button>
            ))
          }
        </ButtonGroup>
      </SectionContainer>

      <SectionContainer id="step-1">
        <GetStartedStep
          title={content.steps[0].title}
          bodyText={content.steps[0].body}
        >

          <SectionContainer>
            <MuiMarkdown>{content.steps[0].data[0]}</MuiMarkdown>
            <Grid container spacing={8} sx={{ my: 1 }}>
              {content.needToKnowFacts.map((fact) => (
                <FactCard
                  key={fact.id}
                  details={fact.details}
                  icon={fact.icon}
                  border={false}
                />
              ))}
            </Grid>
          </SectionContainer>

          <SectionContainer>
            <Typography variant="h3">
              {content.steps[0].data[1]}
            </Typography>
            <MuiMarkdown>
              {content.steps[0].data[2]}
            </MuiMarkdown>
            <Grid container spacing={2} sx={{ my: 3 }}>
              {content.CHRIMethods.map((method) => (
                <Grid key={method.id} item xs={12} md={6}>
                  <AccordionBuilder
                    id={method.id}
                    summary={method.summary}
                    details={method.details}
                    sx={{ py: 2, height: '6em' }}
                  />
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

        </GetStartedStep>
      </SectionContainer>

      <SectionContainer id="step-2">
        <GetStartedStep
          title={content.steps[1].title}
          bodyText={content.steps[1].body}
          ctaText={content.steps[1].ctaText}
          ctaLink={content.steps[1].ctaLink}
        >

          <SectionContainer>
            <Grid container sx={{ alignItems: 'center' }}>
              <ImageContainer
                alt=""
                src="/quickstart.svg"
                style={{ padding: '1em', width: '100%' }}
                width={862}
                height={410}
                useImageDimensions
              />
            </Grid>
          </SectionContainer>

        </GetStartedStep>
      </SectionContainer>

      <SectionContainer id="step-3">
        <GetStartedStep
          title={content.steps[2].title}
          bodyText={content.steps[2].body}
        >
          <MuiMarkdown>
            {content.steps[2].data[0]}
          </MuiMarkdown>
          <Grid container spacing={8} sx={{ my: 1 }}>
            {content.rejectionReasons.map((fact) => (
              <FactCard
                className="fact-card"
                key={fact.id}
                icon="none"
                details={fact.details}
              />
            ))}
          </Grid>
        </GetStartedStep>
      </SectionContainer>

      <SectionContainer id="step-4">
        <GetStartedStep
          title={content.steps[3].title}
          bodyText={content.steps[3].body}
        >

          <SectionContainer>
            <MuiMarkdown>{content.stepFourSectionNames[0]}</MuiMarkdown>
            <Typography
              dangerouslySetInnerHTML={{ __html: content.steps[3].data[0] }}
            />
            <ul>
              <li>{content.steps[3].data[1]}</li>
              <li>{content.steps[3].data[2]}</li>
              <li dangerouslySetInnerHTML={{ __html: content.steps[3].data[3] }} />
            </ul>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{content.steps[3].data[4]}</Typography>
            <Typography variant="body2" sx={{ my: 2 }}>
              {content.steps[3].data[5]}
            </Typography>
            <Grid container spacing={2} sx={{ my: 3 }}>
              {content.legalAidForms.map((legalForm) => (
                <Grid key={legalForm.id} item xs={12} sm={6} md={4}>
                  <AccordionBuilder
                    id={legalForm.id}
                    summary={legalForm.summary}
                    details={legalForm.details}
                    sx={{ py: 2, height: '6em' }}
                  />
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

          <SectionContainer>
            <MuiMarkdown>{content.stepFourSectionNames[1]}</MuiMarkdown>
            <Grid container spacing={2} sx={{ my: 1 }}>
              {content.financialAidForms.map((financialForm) => (
                <Grid key={financialForm.id} item xs={12} sm={6} md={4}>
                  <AccordionBuilder
                    id={financialForm.id}
                    summary={financialForm.summary}
                    details={financialForm.details}
                    sx={{ py: 2, height: '6em' }}
                  />
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

          <SectionContainer>
            <MuiMarkdown>{content.stepFourSectionNames[2]}</MuiMarkdown>
            <Grid container spacing={2} sx={{ my: 1 }}>
              {content.eligibilityForms.map((eligibilityForm) => (
                <Grid key={eligibilityForm.id} item xs={12} sm={6} md={4}>
                  <AccordionBuilder
                    id={eligibilityForm.id}
                    summary={eligibilityForm.summary}
                    details={eligibilityForm.details}
                    sx={{ py: 2, height: '6em' }}
                  />
                </Grid>
              ))}
            </Grid>
          </SectionContainer>

        </GetStartedStep>
      </SectionContainer>
    </>
  );
}
