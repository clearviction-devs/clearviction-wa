import { 
  Box,
  Card, 
  CardContent, 
  Grid,
  Paper, 
  PaperProps,
  Typography} from "@mui/material";

interface FactCardProps extends PaperProps {
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
            maxWidth: '250px',
            height: '200px',
            objectFit: 'contain',
          }}
          >{body}
          </CardContent>
        </Card>
    </Box>
  </Grid>
  );
}