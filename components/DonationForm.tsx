import { Box } from '@mui/material';

// making this a component incase we want to add the donation form anywhere else
export default function DonationForm() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: {sm: 'center', md: 'flex-end'},
        position: { xs: 'relative' },
        marginBottom: { xs: '155px', md: '-410px' },
        marginTop: { xs: '0px', md: '-422px' },
        marginRight: {sm: 'unset', md: '5%', lg: '15%' },
        top: { xs: '0px', md: '-140px' },
      }}
    >
      <iframe
        title='Clearviction Donation Form'
        src='https://donorbox.org/embed/clearviction-givingtuesday?hide_donation_meter=true'
        name='donorbox'
        // seamless='seamless'
        height='900'
        width='100%'
        style={{
            border: 'none',
            maxWidth: '425px',
            minWidth: '250px',
            maxHeight: 'none !important',
        }}
      />
    </Box>
  );
}
