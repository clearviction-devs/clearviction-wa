import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
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
            (item) => item.text !== 'Access Calculator' && item.text !== 'Donate',
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
          color="neutral"
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
        <Button
          href="/donate"
          variant="contained"
          size="small"
          className="donate-btn"
          sx={{
            whiteSpace: 'nowrap', bgcolor: 'success.main', py: 1, width: '80%', mt: 2,
          }}
        >
          <Typography variant="body2" sx={{ fontSize: '12px' }}>
            Donate
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
  );
}
