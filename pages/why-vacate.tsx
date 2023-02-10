import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AccordionBuilder from "../components/AccordionBuilder";
import HeroBanner from "../components/HeroBanner";
import SectionContainer from "../components/SectionContainer";
import { HomeCardItem, HomeCardSection } from "../components/HomeCardSection";
import content from "../content/why-vacate";

export default function WhyVacatePage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <HeroBanner
        heading="Why Vacate"
        subheading="The process of vacating a conviction in Washington is convoluted, but it’s needed to avoid barriers in employment, housing and education."
        subheading2="Find out why it’s important to vacate your conviction and get resources to help you while you work your way to it."
        imgsrc="/illustrations/team-building.svg"
      />
      <SectionContainer>
        <ButtonGroup
          variant="text"
          fullWidth
          orientation={matchesXS ? "vertical" : "horizontal"}
        >
          {content.buttons.map((button: any) => {
            return <Button href={button.href}>{button.name}</Button>;
          })}
        </ButtonGroup>
        {content.cards.map((card: any) => {
          return (
            <SectionContainer id={card.sectionId}>
              <HomeCardSection
                title={card.title}
                subtitle={card.subtitle}
                sx={{ textAlign: "left", p: 4 }}
              >
                <Grid container spacing={2}>
                  {card.cardItems.map((cardItem: any) => {
                    return (
                      <HomeCardItem
                        xs={12}
                        sm={6}
                        title={cardItem.title}
                        body={cardItem.body}
                        imgsrc={cardItem.imgRef}
                      />
                    );
                  })}
                </Grid>
                <Typography variant={"h3"}>Resources</Typography>
                <Grid container spacing={2}>
                  {card.accordianItems.map((accordianItem: any) => (
                    <Grid
                      key={accordianItem.id}
                      spacing={2}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                    >
                      <AccordionBuilder
                        id={accordianItem.id}
                        summary={accordianItem.summary}
                        details={accordianItem.details}
                        sx={{ my: 1, mx: 4, py: 2 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </HomeCardSection>
            </SectionContainer>
          );
        })}
      </SectionContainer>
    </>
  );
}
