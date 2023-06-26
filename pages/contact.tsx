import {
  Box, Button, MenuItem, TextField, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React, { useState } from 'react';

import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';

export default function ContactPage() {
  const contactTypes = [
    {
      value: 'volunteer',
      label: 'Prospective Volunteer',
    },
    {
      value: 'benefactor',
      label: 'Prospective Benefactor',
    },
    {
      value: 'attorney',
      label: 'Attorney',
    },
    {
      value: 'partner',
      label: 'Prospective Partner',
    },
    {
      value: 'other',
      label: 'Other Individual/Organization',
    },
  ];

  const [toSend, setToSend] = useState({
    name: '',
    _replyto: '',
    contact_type: '',
    message: '',
  });

  const [emailError, setEmailError] = useState({
    errorStatus: false,
    errorMessage: '',
  });

  const validateEmail = (email: string) => {
    const validEmail = /\S+@\S+\.\S+/;
    if (validEmail.test(email)) {
      setEmailError({ errorStatus: false, errorMessage: '' });
    } else {
      setEmailError({
        errorStatus: true,
        errorMessage: 'Please enter a valid email',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    setToSend({
      ...toSend,
      [(e.target as HTMLInputElement).name]: e.target.value,
    });
    if (e.target.name === '_replyto') {
      validateEmail(e.target.value);
    }
  };

  return (
    <>
      <IndividualPageHead
        title="Contact Us - Reach Out for Support and Information"
        metaContent="Have questions or concerns? Contact our team, and we'll respond within 24 hours."
      />
      <SectionContainer sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Get in contact with us
        </Typography>
        <MuiMarkdown>
          **Have questions? Send us a message and we'll get back to you within
          24 hours.**
        </MuiMarkdown>
      </SectionContainer>
      <SectionContainer
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        }}
      >
        <Box
          component="form"
          name="contact-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/mqkopnee"
          method="post"
          sx={{
            mx: 'auto',
            my: 4,
            width: { xs: '85%', sm: '70%', md: '40%' },
            '& .MuiTextField-root': { m: 1 },
          }}
        >
          <TextField
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Enter Your Full Name"
            required
            value={toSend.name}
            onChange={handleChange}
            fullWidth
            aria-label="your full name"
            label="Name"
          />
          <TextField
            id="email"
            name="_replyto"
            autoComplete="email"
            type="email"
            placeholder="example@example.com"
            error={emailError.errorStatus}
            helperText={emailError.errorMessage}
            required
            value={toSend._replyto}
            onChange={handleChange}
            fullWidth
            aria-label="your email address"
            label="Email"
          />
          <TextField
            id="contact_type"
            name="contact_type"
            select
            placeholder="Please Select An Option"
            label="I am a(n)"
            required
            fullWidth
            value={toSend.contact_type}
            onChange={handleChange}
            aria-label="choose your contact type"
          >
            {contactTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="message"
            name="message"
            multiline
            minRows={4}
            maxRows={10}
            value={toSend.message}
            required
            fullWidth
            onChange={handleChange}
            type="text"
            placeholder="Type Your Message Here"
            aria-label="your message"
          />

          <Button
            sx={{ margin: '30px auto 50px', minWidth: '240px' }}
            type="submit"
            variant="contained"
          >
            Send message
          </Button>
        </Box>

        <Box
          component="img"
          alt=""
          src="/illustrations/new_message.svg"
          sx={{
            maxWidth: '600px',
            margin: 2,
            display: { xs: 'none', md: 'block' },
          }}
        />
      </SectionContainer>
    </>
  );
}
