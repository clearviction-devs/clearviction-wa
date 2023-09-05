import {
  Box, Button, MenuItem, TextField, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React, { useState } from 'react';

import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/contact.ts';

export default function ContactPage() {
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
        title={content.meta.title}
        metaContent={content.meta.content}
      />

      <SectionContainer sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          {content.title}
        </Typography>
        <MuiMarkdown>
          {content.subtitle}
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
            placeholder={content.form.placeholders.name}
            required
            value={toSend.name}
            onChange={handleChange}
            fullWidth
            aria-label={content.form.ariaLabels.name}
            label={content.form.labels.name}
          />
          <TextField
            id="email"
            name="_replyto"
            autoComplete="email"
            type="email"
            placeholder={content.form.placeholders.email}
            error={emailError.errorStatus}
            helperText={emailError.errorMessage}
            required
            value={toSend._replyto}
            onChange={handleChange}
            fullWidth
            aria-label={content.form.ariaLabels.email}
            label={content.form.labels.email}
          />
          <TextField
            id="contact_type"
            name="contact_type"
            select
            placeholder={content.form.placeholders.contactType}
            label={content.form.labels.contactType}
            required
            fullWidth
            value={toSend.contact_type}
            onChange={handleChange}
            aria-label={content.form.ariaLabels.contactType}
          >

            {content.contactTypes.map((option) => (
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
            placeholder={content.form.placeholders.message}
            aria-label={content.form.ariaLabels.message}
          />

          <Button
            sx={{ margin: '30px auto 50px', minWidth: '240px' }}
            type="submit"
            variant="contained"
          >
            {content.sendButtonText}
          </Button>

        </Box>

        <Box
          sx={{
            maxWidth: '600px',
            display: { xs: 'none', md: 'flex' },
            width: '36,5%',
            height: '100%',
            justifyContent: 'center',
            my: 'auto',
            mx: 2,
          }}
        >
          <ImageContainer
            width={406}
            height={306}
            src="/illustrations/new_message.svg"
            alt=""
          />
        </Box>
      </SectionContainer>
    </>
  );
}
