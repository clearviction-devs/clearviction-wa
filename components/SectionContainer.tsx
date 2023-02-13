import { Container, ContainerProps } from "@mui/material";

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
      sx={{ my: 8, scrollMarginTop: 64 }}
      {...props}
    >
      {children}
    </Container>
  );
}
