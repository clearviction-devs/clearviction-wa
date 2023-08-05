import { Button, ButtonGroup, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Script from 'next/script';
import React from 'react';

import externalLinks from '../components/functional/ExternalLinks.tsx';
import MailchimpForm from '../components/functional/MailchimpForm.tsx';
import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import AccordionBuilder from '../components/layout/AccordionBuilder.tsx';
import GridItemCard from '../components/layout/GridItem.tsx';
import HeroBanner from '../components/layout/HeroBanner.tsx';
import PaperSection from '../components/layout/PaperSection.tsx';
import ResearchBanner from '../components/layout/ResearchBanner.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/home.ts';

export default function Home() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  externalLinks();

  return (
    <>
      <div>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* https://nextjs.org/docs/messages/next-script-for-ga */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QNGJLGP9B3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QNGJLGP9B3');
        `}
        </Script>
        {/* <!-- End Google Analytics --> */}
      </div>

      <IndividualPageHead
        title="Clearing Criminal Records in Washington State"
        metaContent="Washington Law allows for vacation of select criminal records. Clearviction's free tools help individuals assess their eligibility for a fresh start."
      />

      <main>
        <HeroBanner {...content.heroBanner} />
        <SectionContainer>
          <ButtonGroup
            variant="text"
            fullWidth
            orientation={matchesXS ? 'vertical' : 'horizontal'}
          >
            {content.sectionNavs.map((nav) => (
              <Button key={nav.href} href={nav.href}>
                {nav.label}
              </Button>
            ))}
          </ButtonGroup>
        </SectionContainer>
        {content.gridSections.map((section) => (
          <SectionContainer key={section.id} id={section.id}>
            <PaperSection
              title={section.title}
              ctaLink={section.ctaLink}
              ctaText={section.ctaText}
            >
              <Grid container spacing={4}>
                {section.items.map((item) => (
                  <GridItemCard
                    key={item.id}
                    xs={12}
                    md={section.items.length % 2 ? 4 : 6}
                    title={item.title}
                    body={item.body}
                    imgsrc={item.imgsrc}
                  />
                ))}
              </Grid>
            </PaperSection>
          </SectionContainer>
        ))}
        <SectionContainer id="faq">
          <PaperSection title="FAQ">
            {content.faqs.map((faq) => (
              <AccordionBuilder key={faq.id} {...faq} />
            ))}
          </PaperSection>
        </SectionContainer>
        <ResearchBanner />
        <MailchimpForm mobileMarginZero />
      </main>
    </>
  );
}
