import { Box, Grid, GridProps, Typography } from "@mui/material";

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
      <Box>
        {imgsrc && (
          <Box
            component="img"
            src={imgsrc}
            alt=""
            sx={{
              maxWidth: "250px",
              height: "200px",
              objectFit: "contain",
            }}
          ></Box>
        )}
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body1">{body}</Typography>
      </Box>
    </Grid>
  );
}
