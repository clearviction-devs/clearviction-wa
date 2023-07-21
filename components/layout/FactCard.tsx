// @description - This component is used to add an icon
// and text below it. Can have border to look like a card or
// no border. Example in get-involved and get-started.

import {
  AccountBalance,
  Alarm,
  CloudDone,
  DateRange,
  History,
  HourglassEmpty,
  LocalAtmOutlined,
  PanToolOutlined,
  Sync,
} from '@mui/icons-material';
import {
  Box, Grid, Paper, Typography,
} from '@mui/material';
import React from 'react';

interface FactCardProps {
  details: string;
  icon: string;
  border?: boolean;
  className?: string;
}

type Icon = {
  [key: string]: React.ReactNode;
}

const iconStyle = {
  fontSize: '3em',
  color: 'rgb(255, 210, 0)',
};

const iconEl: Icon = {
  alarm: <Alarm sx={iconStyle} />,
  cloud: <CloudDone sx={iconStyle} />,
  sync: <Sync sx={iconStyle} />,
  date: <DateRange style={iconStyle} />,
  history: <History style={iconStyle} />,
  account: <AccountBalance style={iconStyle} />,
  hourglass: <HourglassEmpty style={iconStyle} />,
  pan: <PanToolOutlined style={iconStyle} />,
  atm: <LocalAtmOutlined style={iconStyle} />,
};

export default function FactCard({
  details, icon, className, border = true,
}: FactCardProps) {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={4}
      lg={4}
      sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '250px',
      }}
      className={className || `fact-card-${icon}`}
    >
      {
        border ? (
          <Paper
            sx={{
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box pt={3} pb={1} px={3}>
              {iconEl[icon]}
            </Box>
            <Box pb={3} px={3}>
              <Typography sx={{ textAlign: 'center' }}>{details}</Typography>
            </Box>
          </Paper>
        ) : (
          <Box
            pt={3}
            pb={1}
            px={3}
            sx={{
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box pt={3} pb={1} px={3}>
              {iconEl[icon]}
            </Box>
            <Box sx={{}}>
              <Typography mt={2} sx={{ textAlign: 'center' }}>{details}</Typography>
            </Box>
          </Box>
        )
      }
    </Grid>

  );
}
