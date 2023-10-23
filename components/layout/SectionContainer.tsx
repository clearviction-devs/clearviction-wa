import { Container, ContainerProps } from '@mui/material';
import React from 'react';

export default function SectionContainer({
  children,
  id,
  ...props
}: ContainerProps) {
  return (
    <Container
      component="section"
      id={id}
      maxWidth="lg"
      disableGutters
      sx={{ my: 8, px: 3, scrollMarginTop: 64 }}
      {...props}
    >
      {children}
    </Container>
  );
}
