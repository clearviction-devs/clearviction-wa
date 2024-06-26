import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';

import navItems from '../../content/navItems.ts';
import EligibilityButton from '../helper/EligibilityButton.tsx';
import NavigationLogo from './NavigationLogo.tsx';

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar id="main-header" className="nav-desktop" color="primary" elevation={0} component="nav" position="sticky">
      <Box
        sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px', position: 'relative', px: 10.5,
        }}
      >
        <Box component="nav" sx={{ width: '100%' }}>
          {matches && (
            <Box id="box1" sx={{ display: 'flex', width: '100%' }}>
              <MenuIcon
                sx={{
                  color: theme.palette.text.light, marginLeft: 'auto',
                }}
                fontSize="large"
                onClick={handleDrawerToggle}
              />
            </Box>
          )}
          {!matches && (
            <Box
              className="desktop-nav-list"
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '450px',
                paddingRight: '32px',
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
        <NavigationLogo sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 0)' }} />
        {!matches && (
          <Box>
            <EligibilityButton />
          </Box>
        )}
      </Box>
    </AppBar>
  );
}
