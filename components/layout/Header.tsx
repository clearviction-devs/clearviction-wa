import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import React, { useState } from 'react';

import navItems from '../../content/navItems.ts';
import NavigationLogo from './NavigationLogo.tsx';

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ flexGrow: 1 }}>
      <Grid item xs={12} sx={{ textAlign: 'right', mr: 0.5 }}>
        <IconButton
          color="inherit"
          aria-label="Close navigation"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Grid>
      <List className="nav-mobile" sx={{ transform: 'translateY(-20px)' }}>
        {navItems
          .filter(
            (item) => item.text !== 'Access Calculator',
          )
          .map((item) => (
            <ListItem key={item.text}>
              <ListItemButton
                component={Link}
                href={item.href}
                sx={{ textAlign: 'center', px: 5 }}
              >
                <ListItemText primary={item.text} sx={{ my: 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        <Button
          href="/calculator/head-initial-1-cont"
          variant="contained"
          color="tertiary"
          size="small"
          className="calc-btn"
          sx={{
            whiteSpace: 'nowrap', py: 1, width: '80%', mt: 3,
          }}
          aria-label="Access our eligibility calculator"
        >
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            Access Calculator
          </Typography>
        </Button>
        <ListItem key="disclaimer">
          <Typography
            variant="caption"
            sx={{
              mt: 3, mb: 2, px: 2, textAlign: 'center',
            }}
          >
            The information on this site is not, nor should it be considered
            legal advice.
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar id="main-header" className="nav-desktop" color="primary" elevation={0} component="nav" position="sticky">
      <Box
        sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Box component="nav">
          <Drawer
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              textAlign: 'center',
            }}
            anchor="right"
          >
            {drawer}
          </Drawer>
          {!matches && (
            <Box
              className="desktop-nav-list"
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                py: 1,
                px: { md: 3, lg: 4 },
                maxWidth: '1100px',
              }}
            >
              {navItems
                .filter(
                  (item) => item.text !== 'Access Calculator' && item.text !== 'Donate',
                )
                .map((item) => (
                  <Button
                    key={item.text}
                    href={item.href}
                    aria-label={`${item.text.toLowerCase()}`}
                    size="small"
                    className="nav-list__item"
                    sx={{
                      whiteSpace: 'nowrap',
                      marginLeft: { md: 0 },
                      px: { md: 2, lg: 3 },
                      py: 1,
                      '&:hover': {
                        color: theme.palette.text.secondary,
                        backgroundColor: theme.palette.primary.main,
                      },
                      '&:active': {
                        color: theme.palette.text.light,
                        backgroundColor: '#002138',
                      },
                      '&:focus': {
                        color: theme.palette.text.light,
                        backgroundColor: theme.palette.primary.dark,
                        boxShadow: '0 0 0 4px #0000EE99',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
            </Box>
          )}
        </Box>
        <NavigationLogo />
        <Button
          href="/calculator/head-initial-1-cont"
          variant="contained"
          color="tertiary"
          size="small"
          className="calc-btn"
          aria-label="Access our eligibility calculator"
          sx={{
            whiteSpace: 'nowrap',
            py: 1,
            px: 3,
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: 'tertiary.light',
            },
            '&:active': {
              backgroundColor: '#FF5F40',
            },
            '&:focus': {
              backgroundColor: 'tertiary',
              boxShadow: '0 0 0 4px #0000EE99',
            },
          }}
        >
          Check Eligibility
        </Button>
      </Box>
    </AppBar>
  );
}
