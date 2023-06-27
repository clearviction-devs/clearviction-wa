// @description - This component is used to add an icon
// and text below it. Can have border to look like a card or
// no border. Example in get-involved and get-started.

import {
  AccountBalance, Alarm, CloudDone, DateRange, History, Sync,
} from '@mui/icons-material';
import {
  Box, Grid, Paper, Typography,
} from '@mui/material';
import React from 'react';

interface FactCardProps {
  details: string;
  icon: string;
  border: boolean;
}

type Icon = {
  [key: string]: React.ReactNode;
}

const iconEl: Icon = {
  alarm: <Alarm sx={{ fontSize: '3em', color: 'rgb(255, 210, 0)' }} />,
  cloud: <CloudDone sx={{ fontSize: '3em', color: 'rgb(255, 210, 0)' }} />,
  sync: <Sync sx={{ fontSize: '3em', color: 'rgb(255, 210, 0)' }} />,
  date: <DateRange style={{ fontSize: 54 }} color="secondary" />,
  history: <History style={{ fontSize: 54 }} color="secondary" />,
  account: <AccountBalance style={{ fontSize: 54 }} color="secondary" />,
};

export default function FactCard({ details, icon, border = true }: FactCardProps) {
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
    >
      {
        border ? (
          <Paper
            sx={{
              maxWidth: '200',
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
              maxWidth: '200',
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {iconEl[icon]}
            <Box>
              <Typography mt={2} sx={{ textAlign: 'center' }}>{details}</Typography>
            </Box>
          </Box>
        )
      }
    </Grid>

  );
}
