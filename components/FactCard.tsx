import { 
  Grid,
  GridProps,
  Paper,
  Typography} from "@mui/material";

interface FactCardProps extends GridProps {
  body: string;
}

export function FactCard({
  body,
  ...props
}: FactCardProps) {
  return (
    <Grid item {...props}>
      <Paper 
          sx={{
            display: 'flex',
            height: '200px',
            textAlign: 'center',
            alignItems: 'center',
            p: 4 
          }}>
            <Typography>{body}</Typography>
      </Paper>
    </Grid>
  );
}