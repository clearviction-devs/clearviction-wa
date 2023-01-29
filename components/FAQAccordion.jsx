import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

export default function FAQAccordion({ faqs }) {
  return (
    <>
      {faqs.map((faq) => (
        <Accordion key={faq.title} sx={{ textAlign: 'left' }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{faq.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {Array.isArray(faq.body) ? (
              faq.body.map((paragraph, index) => (
                <Typography key={index} sx={{ mb: 1, maxWidth: '60ch' }}>
                  {paragraph}
                </Typography>
              ))
            ) : (
              <Typography>{faq.body}</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
