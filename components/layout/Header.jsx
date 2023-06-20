import Menu from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import React, { useState } from 'react';

import navItems from '../../content/navItems.ts';
// import GivingTuesdayBanner from '../GivingTuesdayBanner.tsx';
import NavigationLogo from '../NavigationLogo';
import SkipLink from '../SkipLink.tsx';

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ flexGrow: 1 }}>
      <List sx={{ my: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="disclaimer">
          <Typography
            variant="caption"
            sx={{ mb: 2, px: 2, textAlign: 'center' }}
          >
            The information on this site is not, nor should it be considered
            legal advice.
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* hide until we figure out what the cta is supposed to be */}
      {/* <GivingTuesdayBanner /> */}
      <AppBar color="primary" elevation={0} component="nav" position="sticky">
        <Container maxWidth="xl" sx={{ p: 3 }}>
          <Toolbar disableGutters sx={{ height: { xs: 64 } }}>
            <SkipLink color="primary" variant="contained" />
            {/* Boxes as containers for handling layout among siblings */}
            <Box
              sx={{
                flexGrow: 1,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >

              <NavigationLogo fullSize={matches} />
            </Box>
            {!matches && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Button
                  href="/calculator/head-initial-1-cont"
                  variant="contained"
                  color="neutral"
                  size="small"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Access Calculator
                </Button>
                <Button
                  href="/donate"
                  variant="contained"
                  size="small"
                  sx={{ whiteSpace: 'nowrap', bgcolor: '#72C850' }}
                >
                  Donate
                </Button>
              </Box>
            )}
            {matches && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                sx={{ display: { xl: 'none' } }}
                onClick={handleDrawerToggle}
              >
                <Menu fontSize="large" />
              </IconButton>
            )}
          </Toolbar>
        </Container>

        <Box component="nav" sx={{ bgcolor: '#1A1D2E' }}>
          <Drawer
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', xl: 'none' },
              textAlign: 'center',
            }}
            anchor="right"
          >
            {drawer}
          </Drawer>
          {!matches && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                py: 1,
                px: 4,
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
                    variant="text"
                    color="neutral"
                    size="small"
                    sx={{ whiteSpace: 'nowrap', marginLeft: { md: 0 } }}
                  >
                    {item.text}
                  </Button>
                ))}
            </Box>
          )}
        </Box>
      </AppBar>
    </>
  );
}
