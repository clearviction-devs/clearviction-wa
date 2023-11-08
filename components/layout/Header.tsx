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
import SkipLink from '../helper/SkipLink.tsx';
// import GivingTuesdayBanner from '../GivingTuesdayBanner.tsx';
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
      <List className="nav-mobile" sx={{ my: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.text}>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{ textAlign: 'center', px: 5 }}
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
      <AppBar id="main-header" className="nav-desktop" color="primary" elevation={0} component="nav" position="sticky">
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
                className="test"
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
                  className="calc-btn"
                  sx={{ whiteSpace: 'nowrap', py: 1, px: 3 }}
                  aria-label="Access our eligibility calculator"
                >
                  Access Calculator
                </Button>
                <Button
                  href="/donate"
                  variant="contained"
                  size="small"
                  className="donate-btn"
                  sx={{
                    whiteSpace: 'nowrap', bgcolor: 'success.main', py: 1, px: 4,
                  }}
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
                    variant="text"
                    color="neutral"
                    size="small"
                    className="nav-list__item"
                    sx={{
                      whiteSpace: 'nowrap', marginLeft: { md: 0 }, px: { md: 2, lg: 3 }, py: 1,
                    }}
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
