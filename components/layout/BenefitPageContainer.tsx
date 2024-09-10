import { Container, ContainerProps } from '@mui/material';
import React from 'react';

export default function BenefitPageContainer({
  children,
  id,
  sx,
  ...props
}: ContainerProps) {
  return (
    <Container
      component="section"
      id={id}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: {
          md: '936px',
        },
        padding: {
          xs: '72px 24px',
          sm: '72px 64px',
          md: '112px 32px',
          lg: '112px 32px',
          xl: '112px 32px',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}

export function BenefitCardsContainer({
  children,
  id,
  sx,
  ...props
}: ContainerProps) {
  return (
    <Container
      component="section"
      id={id}
      disableGutters
      sx={{
        maxWidth: {
          md: '936px',
        },
        padding: {
          xs: '0px 0px',
          sm: '0px 0px',
          md: '0px 32px',
          lg: '0px 32px',
          xl: '0px 32px',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
}
