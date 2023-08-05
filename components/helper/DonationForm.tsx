import { Box } from '@mui/material';
import Script from 'next/script';
import React from 'react';

export default function DonationForm() {
  return (
    <Box
      id="donation-widget"
      sx={{ backgroundColor: '#fff', borderRadius: '10px', padding: '30px' }}
    >
      {/* embedded donation widget from give lively */}
      <Script src="https://secure.givelively.org/widgets/simple_donation/clearviction.js?show_suggested_amount_buttons=true&show_in_honor_of=true&address_required=false&has_required_custom_question=null&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250" />
      <div id="give-lively-widget" className="gl-simple-donation-widget" />
    </Box>
  );
}
