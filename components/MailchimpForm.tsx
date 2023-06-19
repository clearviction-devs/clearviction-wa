import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React, { ChangeEvent, useState } from 'react';

export default function MailchimpForm({
  mobileMarginZero,
}: {
  mobileMarginZero?: boolean;
}) {
  const [email, setEmail] = useState<string>('');
  const [botInputValue, setBotValue] = useState<string>('');

  return (
    <Grid
      container
      id="mc_embed_signup"
      sx={(theme) => ({
        justifyContent: 'center',
        background: theme.palette.primary.dark,
        padding: theme.spacing(4, 2),
        fontFamily: theme.typography.fontFamily,
        marginY: mobileMarginZero ? 0 : theme.spacing(9),
      })}
    >
      <Grid item xs={12} md={8}>
        <Box
          className="formContent"
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(2),
          })}
        >
          <Box
            id="important"
            sx={{
              gap: '0.75rem',
              marginBottom: { xs: '2rem', sm: '4rem' },
            }}
          >
            <Typography
              variant="h5"
              sx={(theme) => ({
                ...theme.typography.h5,
                color: 'white',
                textAlign: { sm: 'center' },
              })}
            >
              Sign up for our quarterly newsletter!
            </Typography>
            <Typography
              sx={(theme) => ({
                ...theme.typography.caption,
                color: theme.palette.primary.light,
                textAlign: { xs: 'left', sm: 'center' },
                margin: 0,
              })}
            >
              Receive important legal news, ways to get involved, interviews
              with team members, and more.
            </Typography>
          </Box>

          <Box
            component="form"
            action="https://clearviction.us14.list-manage.com/subscribe/post?u=3649bfb6bbcebf017b8ea851a&amp;id=77eea4b433&amp;f_id=00da8be0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
            sx={{
              background: 'white',
              minHeight: '10rem',
              maxWidth: '29.6875rem',
            }}
          >
            <Box
              id="mc_embed_signup_scroll"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingX: '0.625rem',
              }}
            >
              <Box className="indicates-required" sx={{ marginLeft: 'auto' }}>
                <Typography
                  className="asterik"
                  component="span"
                  sx={(theme) => ({
                    ...theme.typography.caption,
                    fontSize: '0.583rem',
                  })}
                >
                  <span style={{ color: 'red' }}>*</span>
                  {' '}
                  indicates required
                </Typography>
              </Box>
              <Box className="mc-field-group">
                <Typography
                  component="label"
                  htmlFor="mce-EMAIL"
                  sx={(theme) => ({
                    ...theme.typography.caption,
                    float: 'left',
                  })}
                >
                  Email Address
                  {' '}
                  <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  type="email"
                  value={email}
                  name="EMAIL"
                  required
                  fullWidth
                  id="mce-EMAIL"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </Box>
              <Box
                className="optionalParent"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Box className="clear foot">
                  <Button
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    sx={(theme) => ({
                      background: theme.palette.primary.main,
                      fontSize: '0.75rem',
                      color: 'white',
                      borderRadius: '0.325rem',
                      width: '2.5rem',
                      height: '2.5rem',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    })}
                  >
                    Subscribe
                  </Button>
                </Box>
                <Box className="brandingLogo">
                  <NextLink href="http://eepurl.com/iqvIR2" passHref>
                    <Avatar
                      src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                      alt="Mailchimp logo"
                      title="Mailchimp - email marketing made easy and fun"
                      sx={{
                        width: 'auto',
                        height: 'auto',
                      }}
                    />
                  </NextLink>
                </Box>
              </Box>
              <Box
                id="mce-responses"
                className="clear foot"
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  className="response"
                  id="mce-error-response"
                  sx={{ display: 'none' }}
                />
                <Box
                  className="response"
                  id="mce-success-response"
                  sx={{ display: 'none' }}
                />
              </Box>
              {/* real people should not fill this in and expect good things -
              do not remove this or risk form bot signups */}
              <Box
                id="bot"
                sx={{ position: 'absolute', left: '-312.5rem' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_3649bfb6bbcebf017b8ea851a_77eea4b433"
                  tabIndex={-1}
                  value={botInputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBotValue(e.target.value)}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
