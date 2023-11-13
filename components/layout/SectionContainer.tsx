import { Container, ContainerProps, SxProps } from '@mui/material';
import React from 'react';

export const sectionContainerSxProps: SxProps = {
  my: 8, px: 3, scrollMarginTop: 64,
};

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
      sx={{ ...sectionContainerSxProps }}
      {...props}
    >
      {children}
    </Container>
  );
}
