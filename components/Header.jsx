import { AppBar, Container, ButtonBase, Toolbar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <AppBar color='transparent' position='sticky'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters sx={{ height: 64 }}>
            <ButtonBase
              component={Link}
              href='/'
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
                width: 70,
                height: 56,
                p: 1,
              }}
            >
              <Image
                src='/openseattle_logotype_-med.png'
                alt=''
                fill
                style={{ objectFit: 'contain' }}
              />
            </ButtonBase>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
