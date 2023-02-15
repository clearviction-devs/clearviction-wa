import { Box, Grid, GridProps, Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";
interface GridItemCardProps extends GridProps {
  title?: string;
  body: string;
  imgsrc?: string;
}

export function GridItemCard({
  title,
  body,
  imgsrc,
  ...props
}: GridItemCardProps) {
  return (
    <Grid item {...props} sx={{ mb: 4 }}>
      <Box textAlign="center">
        {imgsrc && (
          <Box
            component="img"
            src={imgsrc}
            alt=""
            sx={{
              maxWidth: "250px",
              height: "200px",
              objectFit: "contain",
              textAlign: "center",
            }}
          ></Box>
        )}
        <Typography variant="subtitle1">{title}</Typography>
        <Box textAlign="left">
          <MuiMarkdown>{body}</MuiMarkdown>
        </Box>
      </Box>
    </Grid>
  );
}
