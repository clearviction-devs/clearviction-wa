import { ArrowForwardIos, ChevronRight, Menu } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
import { EligibilityButton } from '../CustomButtons.tsx';
import SkipLink from '../SkipLink.tsx';
import NavigationLogo from './NavigationLogo.tsx';

interface HeaderProps {
  isCalc: boolean;
}

export default function Header({ isCalc }: HeaderProps) {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

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
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        marginTop: '2px',
        padding: '24px 16px 24px 16px',
        gap: '16px',
      }}
    >
      <Box sx={{ paddingLeft: '10px' }}>
        <IconButton
          aria-label="Close navigation"
          sx={{ padding: 0 }}
        >
          <ArrowForwardIos
            sx={{
              color: theme.palette.text.light,
            }}
          />
        </IconButton>
      </Box>

      <List className="nav-mobile" sx={{ width: '226px' }}>
        {navItems.map(({ href, text, sublist }) => (
          <React.Fragment key={text}>
            <ListItem
              disablePadding
            >
              <ListItemButton
                component={Link}
                href={href}
                sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.text.secondary,
                    borderRadius: '100px',
                    '.arrow-icon': {
                      display: 'inline-block',
                    },
                  },
                  '.arrow-icon': {
                    display: 'none',
                  },
                }}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    style:
                    {
                      fontSize: '16px',
                      fontWeight: '700',
                      fontFamily: theme.typography.button.fontFamily,
                    },
                  }}
                  sx={{ margin: 0 }}
                />
                <ArrowForwardIcon
                  className="arrow-icon"
                  sx={{
                    stroke: theme.palette.text.light,
                    strokeWidth: 1,
                  }}
                />
              </ListItemButton>
            </ListItem>
            <List sx={{ paddingTop: '0px', paddingBottom: '0px' }}>
              {sublist?.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    href={item.href}
                    component={Link}
                    sx={{
                      paddingLeft: '24px',
                      '&:hover': {
                        backgroundColor: theme.palette.text.secondary,
                        borderRadius: '100px',
                        '.arrow-icon': {
                          display: 'inline-block',
                        },
                      },
                      '.arrow-icon': {
                        display: 'none',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        style: {
                          fontSize: '16px',
                          fontWeight: '500',
                          fontFamily: theme.typography.button.fontFamily,
                        },
                      }}
                    />
                    <ArrowForwardIcon
                      className="arrow-icon"
                      sx={{
                        stroke: theme.palette.text.light,
                        strokeWidth: 0.25,
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
        paddingLeft: '16px',
      }}
      >
        <EligibilityButton />
      </Box>
    </Box>
  );

  return (
    <AppBar id="main-header" className="nav-desktop" color={isCalc ? 'secondary' : 'primary'} elevation={0} component="nav" position="sticky">
      <SkipLink />
      <Box
        component="nav"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
          position: 'relative',
          px: 2,
        }}
      >
        <Drawer
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          anchor="right"
          PaperProps={{
            sx: { width: '72%' },
          }}
        >
          {drawer}
        </Drawer>
        <Box sx={{ width: '100%' }}>
          {matchesMd && (
            <IconButton aria-label="open sidebar menu" onClick={handleDrawerToggle} sx={{ display: 'flex', width: '100%' }}>
              <Menu
                sx={{
                  color: theme.palette.text.light, marginLeft: 'auto',
                }}
                fontSize="large"
              />
            </IconButton>
          )}
          {!matchesMd && (
            <Box
              className="desktop-nav-list"
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '450px',
                paddingRight: '32px',
                paddingY: '24px',
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
                      borderRadius: '20px',
                      width: item.width,
                      px: '30px',
                      py: '8px',
                      letterSpacing: 0,
                      '&:hover': {
                        color: theme.palette.text.secondary,
                        backgroundColor: isCalc ? theme.palette.secondary.main : theme.palette.primary.main,
                      },
                      '&:active': {
                        color: theme.palette.text.light,
                        backgroundColor: '#002138',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                  {hoveredIndex === index && (
                    <Box
                      className="dropdown-content"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'absolute',
                        backgroundColor: isCalc ? theme.palette.secondary.dark : theme.palette.primary.dark,
                        width: '284px',
                        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                        zIndex: 1,
                      }}
                    >
                      {item.sublist?.map((link) => (
                        <Link key={link.text} href={link.href} passHref style={{ textDecoration: 'none' }}>
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
                              width: '260px',
                              '&:hover': {
                                backgroundColor: isCalc ? theme.palette.secondary.contrastText : theme.palette.text.secondary,
                              },
                            }}
                          >
                            {link.text}
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
        {!matchesMd && (
          <Box>
            <EligibilityButton />
          </Box>
        )}
      </Box>
    </AppBar>
  );
}
