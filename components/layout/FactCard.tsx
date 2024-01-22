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
  Box, Grid, Paper, SxProps, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React from 'react';

interface FactCardProps {
  title?: string;
  details: string;
  icon?: string;
  border?: boolean;
  className?: string;
  sxProps?: SxProps;
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
  icon, title, details, className, border = true, sxProps,
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
              ...sxProps,
            }}
          >
            {icon && (
            <Box pt={3} pb={1} px={3}>
              {iconEl[icon]}
            </Box>
            )}
            {title && (
              <Typography variant="h5" mt={6} mb={4}>
                {title}
              </Typography>
            )}
            <Box pb={3} px={3} textAlign="center">
              <MuiMarkdown>
                {details}
              </MuiMarkdown>
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
            {icon && (
              <Box pt={3} pb={1} px={3}>
                {iconEl[icon]}
              </Box>
            )}
            <Box sx={{}}>
              <Typography mt={2} sx={{ textAlign: 'center' }}>{details}</Typography>
            </Box>
          </Box>
        )
      }
    </Grid>

  );
}
