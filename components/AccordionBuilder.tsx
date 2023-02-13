import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  SxProps,
} from "@mui/material";
import MuiMarkdown from "mui-markdown";

interface InfoDropdownProps {
  id: string;
  summary: string;
  details: string;
  sx?: SxProps;
}

export default function InfoDropdown({
  id,
  summary,
  details,
  sx,
}: InfoDropdownProps) {
  return (
    <Accordion sx={{ textAlign: "left" }}>
      <AccordionSummary
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        expandIcon={<ExpandMore />}
        sx={{ ...sx }}
      >
        <MuiMarkdown>{summary}</MuiMarkdown>
      </AccordionSummary>
      <AccordionDetails>
        <MuiMarkdown>{details}</MuiMarkdown>
      </AccordionDetails>
    </Accordion>
  );
}
