import {
  Card, CardContent, Typography,
} from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import React from 'react';

// interface GridItemSize {
//   xs?: number;
//   sm?: number;
//   md?: number;
//   lg?: number;
// }

interface PlayCardProps {
  // overline?: string;
  // title?: string;
  // details: string;
  // icon?: string;
  // className?: string;
  textColor: string;
  backgroundColor: string;
}

export default function PlayCard({
  textColor, backgroundColor,
}: PlayCardProps) {
  // const theme = useTheme();

  return (
    <Card
      sx={{
        minWidth: 274,
        maxWidth: 360,
        bgcolor: `${backgroundColor}`,
        color: `${textColor}`,
      }}
    >
      <CardContent>
        <Typography>Hi</Typography>
      </CardContent>
    </Card>
  );
}
