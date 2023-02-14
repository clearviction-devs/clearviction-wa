import { Box } from "@mui/material";

import InfoCard from "../components/InfoCard";
import SectionContainer from "../components/SectionContainer";

export default function CardTestPage() {
  return (
    <>
      <SectionContainer>
        <InfoCard
          title="Card"
          body="Cards can be used to convey information and an optional call to action"
          imgsrc="/illustrations/city-buildings.svg"
          maxWidth="50%"
          ctaLink="#"
          ctaText="Click me"
        />
        <Box display="flex" mt={4} gap={4}>
          <InfoCard
            title="Card 1"
            body={`Cards also accept markdown strings.\n- item 1\n- item 2\n\n#####Hello Card`}
            imgsrc="/illustrations/checklist.svg"
            maxWidth="100%"
          />
          <InfoCard
            title="Card 2"
            body={`Cards also accept markdown strings.\n* item 1\n* item 2\n\n#####Hello Card`}
            imgsrc="/illustrations/graduation.svg"
            maxWidth="100%"
          />
          <InfoCard
            title="Card 3"
            body={`Cards also accept markdown strings.\n- item 1\n- item 2\n\n#####Hello Card`}
            imgsrc="/illustrations/washington.svg"
            maxWidth="100%"
          />
          <InfoCard
            title="Card 4"
            body={`Cards also accept markdown strings.\n- item 1\n- item 2\n\n#####Hello Card`}
            imgsrc="/illustrations/washington.svg"
            maxWidth="100%"
          />
        </Box>
      </SectionContainer>
    </>
  );
}
