import { Button, ButtonGroup, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Head from "next/head";

import AccordionBuilder from "../components/AccordionBuilder";
import HeroBanner from "../components/HeroBanner";
import { HomeCardItem, HomeCardSection } from "../components/HomeCardSection";
import SectionContainer from "../components/SectionContainer";
import faqs from "../content/faqs";
import content from "../content/home.json";

export default function Home() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Head>
        <title>Clearviction</title>
        <meta name="description" content="Helping clear convictions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroBanner {...content.heroBanner} />
        <SectionContainer>
          <ButtonGroup
            variant="text"
            fullWidth
            orientation={matchesXS ? "vertical" : "horizontal"}
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
            <HomeCardSection
              title={section.title}
              ctaLink={section.ctaLink}
              ctaText={section.ctaText}
            >
              {section.items.map((item) => (
                <HomeCardItem
                  key={item.id}
                  xs={12}
                  md={section.items.length % 2 ? 4 : 6}
                  title={item.title}
                  body={item.body}
                  imgsrc={item.imgsrc}
                />
              ))}
            </HomeCardSection>
          </SectionContainer>
        ))}
        <SectionContainer id="faq">
          <HomeCardSection title="FAQ">
            {content.faqs.map((faq) => (
              <AccordionBuilder key={faq.id} {...faq} />
            ))}
          </HomeCardSection>
        </SectionContainer>
      </main>
    </>
  );
}
