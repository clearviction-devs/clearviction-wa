import { 
  Box,
  Grid,
  GridProps,
  Paper,
  Typography} from "@mui/material";

interface FactCardProps extends GridProps {
  body: string;
}

export function FactCard({
  body,
  children,
  ...props
}: FactCardProps) {
  return (
    <Grid item {...props}>
      <Paper 
          sx={{
            display: 'flex',
            height: '10em',
            textAlign: 'center',
            alignItems: 'center',
            // flexDirection: 'column',
            p: 4 
          }}>
            {children}
            <Typography>{body}</Typography>
        </Paper>
    </Grid>
  );
}