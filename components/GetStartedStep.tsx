import {
  Box,
  Button,
  Grid,
  GridProps,
  Paper,
  PaperProps,
  Typography,
} from "@mui/material";
import { ReactHTMLElement } from "react";

import SectionContainer from "./SectionContainer";

interface GetStartedStepProps extends PaperProps {
  title?: string;
  bodyText?: string;
  ctaText?: string;
  ctaLink?: string;
}

// interface HomeCardItemProps extends GridProps {
//   title?: string;
//   body: string;
//   imgsrc?: string;
// }

// export function HomeCardItem({
//   title,
//   body,
//   imgsrc,
//   ...props
// }: HomeCardItemProps) {
//   return (
//     <Grid item {...props} sx={{ mb: 4 }}>
//       <Box>
//         {imgsrc && (
//           <Box
//             component="img"
//             src={imgsrc}
//             alt=""
//             sx={{
//               maxWidth: "250px",
//               height: "200px",
//               objectFit: "contain",
//             }}
//           ></Box>
//         )}
//         <Typography variant="subtitle1">{title}</Typography>
//         <Typography variant="body1">{body}</Typography>
//       </Box>
//     </Grid>
//   );
// }

export function GetStartedStep({
  title,
  bodyText,
  ctaText,
  ctaLink,
  children,
  ...props
}: GetStartedStepProps) {
  return (
    <Paper sx={{ textAlign: "center", p: 4 }} {...props}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        {title}
      </Typography>
      {bodyText && (
        <Typography variant="body1" sx={{ mb: 4 }}>
          {bodyText}
        </Typography>
      )}
      <SectionContainer
        sx={{
          textAlign:"left",
        }}
      >
        {children}
      </SectionContainer>

      {ctaText && ctaLink && (
        <Button href={ctaLink} variant="contained" sx={{ mt: 4 }}>
          {ctaText}
        </Button>
      )}
    </Paper>
  );
}