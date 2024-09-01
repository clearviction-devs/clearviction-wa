import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Card, CardContent, Dialog, Grid, IconButton, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import MuiMarkdown from 'mui-markdown';
import React, { useState } from 'react';

import theme from '../../styles/themes/theme.tsx';
import { CalculatorButton } from '../helper/CustomButtons.tsx';

const details1 = '**RCW** stands for “Revised Code of Washington,” which is the collection of all permanent laws. ';
const details2 = 'The RCW links throughout the calculator send you to the online version of the RCW on the [state legislature website](https://app.leg.wa.gov/rcw/).';
const details3 = 'Your WATCH report should list the crime name, degree of the offense, and the **RCW** law that was violated.';

export default function RCWLinkInfo() {
  const [RCWPopup, setRCWPopup] = useState(false);

  return (
    <>
      <Box
        padding="32px 0px"
        minHeight="124px"
        sx={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <IconButton
          onClick={() => setRCWPopup(!RCWPopup)}
          sx={{
            color: theme.palette.secondary.dark,
            '&:hover': {
              backgroundColor: 'transparent',
            },
            padding: 0,
          }}
        >
          <InfoOutlinedIcon style={{
            color: theme.palette.secondary.dark,
            fontSize: '24px',
            alignSelf: 'flex-start',
            marginTop: '4px',
          }}
          />
        </IconButton>

        <Box>
          <Typography variant="body2" sx={{ color: theme.palette.text.primary, display: 'inline' }}>
            Throughout the calculator, you may need to view the
            {' '}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.secondary.dark,
              fontWeight: 'bold',
              display: 'inline',
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'none' },
            }}
            onClick={() => setRCWPopup(true)}
          >
            RCW links
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.primary, display: 'inline' }}> provided for each question to determine your answers.</Typography>
        </Box>

      </Box>

      <Dialog
        open={RCWPopup}
        onClose={() => setRCWPopup(false)}
      >
        <Card
          sx={{
            width: '312px',
            minHeight: '394px',
            bgcolor: 'secondary.dark',
            color: 'text.light',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Grid container direction="column" justifyContent="space-between" sx={{ flexGrow: 1 }}>
              <Grid item>
                <Typography variant="h3" sx={{ textTransform: 'none', mb: 0 }}>What is an RCW?</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  mt: 2, display: 'flex', flexDirection: 'column',
                }}
              >
                <Typography variant="body2">
                  <MuiMarkdown>{details1}</MuiMarkdown>
                </Typography>
                <Typography variant="body2">
                  <MuiMarkdown>{details2}</MuiMarkdown>
                </Typography>
                <Typography variant="body2">
                  <MuiMarkdown>{details3}</MuiMarkdown>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Box sx={{ display: 'flex' }}>
            <Grid item sx={{ width: '50%' }} />
            <CalculatorButton
              handleClick={() => setRCWPopup(false)}
              hasArrow
            >
              Okay
            </CalculatorButton>
          </Box>
        </Card>
      </Dialog>
    </>
  );
}
