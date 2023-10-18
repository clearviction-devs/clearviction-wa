import {
  Box, Button, FormHelperText, MenuItem, TextField, Typography,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React, { useState } from 'react';

import IndividualPageHead from '../components/helper/IndividualPageHead.tsx';
import ImageContainer from '../components/layout/ImageContainer.tsx';
import SectionContainer from '../components/layout/SectionContainer.tsx';
import content from '../content/contact.ts';

export default function ContactPage() {
  interface FormData {
    name: string;
    _replyto: string;
    contact_type: string;
    message: string;
}

  const initialState: FormData = {
    name: '',
    _replyto: '',
    contact_type: '',
    message: '',
  };

  const [toSend, setToSend] = useState<FormData>(initialState);
  const [formError, setFormError] = useState<string>('');
  const [formErrors, setFormErrors] = useState<FormData>(initialState);

  const validateField = (key: keyof FormData, value: string): boolean => {
    let error = '';

    switch (key) {
      case 'name':
        if (!value.trim()) error = 'Name field is required';
        else if (value.trim().split(' ').filter(Boolean).length < 2) { error = 'Please enter your first and last name'; }
        break;
      case '_replyto': {
        const validEmail: RegExp = /\S+@\S+\.\S+/;
        if (!validEmail.test(value)) error = 'Please enter a valid email, example: example@example.com';
        break; }
      case 'contact_type':
        if (!value) error = 'Please select a contact type';
        break;
      case 'message':
        if (!value.trim()) error = 'Message cannot be empty.';
        break;
      default:
        break;
    }

    setFormErrors({ ...formErrors, [key]: error });
    return !error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setToSend({ ...toSend, [name]: value });
    validateField(name as keyof FormData, value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: string[] = [];

    Object.entries(toSend).forEach(([key, value]) => {
      if (!validateField(key as keyof FormData, value)) {
        errors.push(`${key}: ${formErrors[key as keyof FormData]}`);
      }
    });

    if (errors.length) {
      setFormError(`Please correct the following issues before submitting: ${errors.join(', ')}`);
    } else {
      setFormError('');
      (e.target as HTMLFormElement).submit();
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
          acceptCharset="utf-8"
          action="https://formspree.io/f/xdorykgj"
          method="post"
          sx={{
            mx: 'auto',
            my: 4,
            width: { xs: '85%', sm: '70%', md: '40%' },
            '& .MuiTextField-root': { m: 1 },
          }}
          onSubmit={handleSubmit}
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
            aria-required="true"
            onBlur={() => validateField('name', toSend.name)}
            error={Boolean(formErrors.name)}
            aria-invalid={Boolean(formErrors.name)}
            aria-labelledby="name"
            aria-describedby="name-helper-text"
          />
          <FormHelperText id="name-helper-text" error={Boolean(formErrors.name)} aria-live="assertive">
            {formErrors.name}
          </FormHelperText>
          <TextField
            id="email"
            name="_replyto"
            autoComplete="email"
            type="email"
            placeholder={content.form.placeholders.email}
            error={Boolean(formErrors._replyto)}
            required
            value={toSend._replyto}
            onChange={handleChange}
            onBlur={() => validateField('_replyto', toSend._replyto)}
            fullWidth
            aria-label={content.form.ariaLabels.email}
            label={content.form.labels.email}
            aria-required="true"
            aria-describedby="email-helper-text"
            aria-invalid={Boolean(formErrors._replyto)}
          />
          <FormHelperText id="email-helper-text" error aria-live="polite">
            {formErrors._replyto}
          </FormHelperText>
          <TextField
            id="contact_type"
            name="contact_type"
            select
            size="medium"
            placeholder={content.form.placeholders.contactType}
            label={content.form.labels.contactType}
            required
            fullWidth
            value={toSend.contact_type}
            onChange={handleChange}
            aria-label={content.form.ariaLabels.contactType}
            error={Boolean(formErrors.contact_type)}
            aria-required="true"
            aria-invalid={Boolean(formErrors.contact_type)}
            aria-describedby="contact-helper-text"
            onBlur={() => validateField('contact_type', toSend.contact_type)}
          >

            {content.contactTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}

          </TextField>
          <FormHelperText id="contact-helper-text" error aria-live="polite">
            {formErrors.contact_type}
          </FormHelperText>
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
            error={Boolean(formErrors.message)}
            placeholder={content.form.placeholders.message}
            aria-label={content.form.ariaLabels.message}
            label={content.form.labels.message}
            aria-required="true"
            aria-describedby="message-helper-text"
            aria-invalid={Boolean(formErrors.message)}
            onBlur={() => validateField('message', toSend.message)}
          />
          <FormHelperText id="message-helper-text" error aria-live="polite">
            {formErrors.message}
          </FormHelperText>
          {formError && (
          <FormHelperText id="formError" error aria-live="assertive">
            {formError}
          </FormHelperText>
          )}
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
            priority
          />
        </Box>
      </SectionContainer>
    </>
  );
}
