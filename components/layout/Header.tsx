import { ArrowForwardIos, ChevronRight, Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import React, { useState } from 'react';

import navItems from '../../content/navItems.ts';
import { EligibilityButton } from '../helper/CustomButtons.tsx';
import NavigationLogo from './NavigationLogo.tsx';

interface HeaderProps {
  isCalc: boolean;
}

export default function Header({ isCalc }: HeaderProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-around',
      }}
    >
      <Box sx={{
        margin: '16px auto 16px 16px',
      }}
      >
        <IconButton
          aria-label="Close navigation"
        >
          <ArrowForwardIos
            fontSize="large"
            sx={{
              color: theme.palette.text.light,
            }}
          />
        </IconButton>
      </Box>
      <List className="nav-mobile" sx={{ transform: 'translateY(-60px)' }}>
        {navItems.map(({ href, text, sublist }) => (
          <React.Fragment key={text}>
            <ListItem
              sx={{ paddingBottom: 0, paddingTop: 0 }}
            >
              <ListItemButton
                component={Link}
                href={href}
                sx={{
                  paddingBottom: 0,
                  paddingTop: 0,
                }}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    style:
                    {
                      fontSize: '16px', fontWeight: '700', fontFamily: theme.typography.button.fontFamily, marginBottom: 0,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
            <List sx={{ paddingLeft: '32px' }}>
              {sublist?.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        style: {
                          fontSize: '16px', fontWeight: '500', fontFamily: theme.typography.button.fontFamily, marginBottom: 0,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        ))}
      </List>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'end', height: '128px',
      }}
      >
        <Box />
        <EligibilityButton />
      </Box>
    </Box>
  );

  return (
    <AppBar id="main-header" className="nav-desktop" color={isCalc ? 'secondary' : 'primary'} elevation={0} component="nav" position="sticky">
      <Box
        component="nav"
        sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px', position: 'relative', px: 2,
        }}
      >
        <Drawer
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          anchor="right"
        >
          {drawer}
        </Drawer>
        <Box sx={{ width: '100%' }}>
          {matches && (
            <IconButton aria-label="open sidebar menu" onClick={handleDrawerToggle} sx={{ display: 'flex', width: '100%' }}>
              <Menu
                sx={{
                  color: theme.palette.text.light, marginLeft: 'auto',
                }}
                fontSize="large"
              />
            </IconButton>
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
              {navItems.map((item, index) => (
                <Box
                  key={item.text}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Button
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
                      margin: '.625rem auto',
                    }}
                  >
                    {item.text}
                  </Button>
                  {hoveredIndex === index && (
                    <Box
                      className="dropdown-content"
                      sx={{
                        display: 'block',
                        position: 'absolute',
                        backgroundColor: theme.palette.primary.dark,
                        maxWidth: '284px',
                        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                        zIndex: 1,
                      }}
                    >
                      {item.sublist?.map((link) => (
                        <Link key={link} href="/" passHref style={{ textDecoration: 'none' }}>
                          <Box
                            sx={{
                              color: theme.palette.text.light,
                              padding: '12px 16px 12px 24px',
                              textDecoration: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              borderRadius: '125px',
                              fontSize: '16px',
                              maxWidth: '260px',
                              '&:hover': { backgroundColor: theme.palette.text.secondary },
                            }}
                          >
                            {link}
                            <ChevronRight />
                          </Box>
                        </Link>
                      ))}
                    </Box>
                  )}
                </Box>
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
