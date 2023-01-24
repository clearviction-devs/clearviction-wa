import { Box, Container, Divider, Typography, Stack } from '@mui/material';

import Link from './Link';

export default function Footer({ content, ...props }) {
  return (
    <Box component='footer' sx={{ mt: 'auto' }} {...props}>
      <Divider />
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Typography align='center' variant='body1' gutterBottom>
          {content.tagline}
        </Typography>
        <Stack
          justifyContent='center'
          gap={{ xs: 0, sm: 2 }}
          divider={
            <Divider
              orientation={{
                xs: 'horizontal',
                sm: 'vertical',
              }}
              flexItem
            />
          }
          direction={{ xs: 'column', sm: 'row' }}
        >
          {content.footerLinks.map((link) => (
            <Link
              key={link.linkText}
              align='center'
              underline='none'
              href={link.url}
              sx={{
                color: '#121212',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {link.linkText}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
