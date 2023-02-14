import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Box,
  SxProps,
} from "@mui/material";
import { grey } from "@mui/material/colors";
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
      <AccordionDetails sx={{ backgroundColor: grey[50] }}>
        <Box px={2}>
          <MuiMarkdown>{details}</MuiMarkdown>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
