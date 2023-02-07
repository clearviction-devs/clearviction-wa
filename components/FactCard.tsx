import { 
  Box,
  Card, 
  CardContent, 
  CardProps,
  Grid,
  Typography} from "@mui/material";

interface FactCardProps extends CardProps {
  body: string;
}

export function FactCard({
  body,
  ...props
}: FactCardProps) {
  return (
    <Grid item {...props} sx={{ mb: 4 }}>
      <Box>
          <Card
            sx={{
              maxWidth: '250px',
              height: '200px',
              objectFit: 'contain',
            }}
          >
            <CardContent
            sx={{
              justifyContent: 'center'
            }}
            >
              <Typography>{body}</Typography>
            </CardContent>
          </Card>
      </Box>
  </Grid>
  );
}