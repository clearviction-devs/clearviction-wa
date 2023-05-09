import React, { useState, ChangeEvent } from "react";
import {Box,Typography,TextField, Link,Button,useTheme,Avatar,FormHelperText} from "@mui/material";
import { mailchimpStyles } from "../styles/mailchimpStyles";


const Mailchimp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [botInputValue, setBotValue] =useState<string>("");
  const theme=useTheme() 

  return (
    <Box id="mc_embed_signup" sx={mailchimpStyles.mcEmbedSignup}>
    <Box className="formContent" sx={mailchimpStyles.formContent}>
      <Box id="important" sx={mailchimpStyles.important}>
        <Typography variant="h5" sx={mailchimpStyles.importantH5}>Sign up for our quarterly newsletter!</Typography>
        <Typography id="p" sx={mailchimpStyles.importantP}>
          Receive important legal news, ways to get involved, interviews with
          team members, and more.
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
        sx={mailchimpStyles.componentForm}
       
      >
        <Box id="mc_embed_signup_scroll" sx={mailchimpStyles.mc_embed_signup_scroll}>
          <Box className="indicates-required" sx={{ marginLeft: 'auto' }}>
            <Typography className="asterik" component="span" sx={mailchimpStyles.indicatesRequired}>
              <span style={mailchimpStyles.asterik}>*</span> indicates required
            </Typography>
          </Box>
          <Box className="mc-field-group" >
  <Typography className="label-left" component="label" htmlFor="mce-EMAIL" sx={mailchimpStyles.mcFieldGroup}>
    Email Address <span style={mailchimpStyles.asterik}>*</span>
  </Typography>
          <TextField
            type="email"
            value={email}
            name="EMAIL"
            required
            fullWidth
            id="mce-EMAIL"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            sx={mailchimpStyles.emailTextField}
          />
          <FormHelperText id="mce-EMAIL-HELPERTEXT"></FormHelperText>
    </Box>
          <Box 
  className="optionalParent" 
  sx={mailchimpStyles.optionalParent}
>
<Box 
    className="clear foot"
    sx={mailchimpStyles.centerOrderElement}
  >
    <Button 
      type="submit" 
      value="Subscribe" 
      name="subscribe" 
      id="mc-embedded-subscribe"
      sx={{
        '&:hover': {
          backgroundColor: '#2F3554'
        },
        ...mailchimpStyles.mcEmbeddedSubscribe
      }}
     
    >
      Subscribe
    </Button>
  </Box>
  <Box 
    className="brandingLogo"
    sx={mailchimpStyles.centerOrderElement}
  >
    <Link 
      href="http://eepurl.com/iqvIR2" 
      title="Mailchimp - email marketing made easy and fun"
      sx={{ width: '100%', height: '100%' }}
    >
      <Avatar
        src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
        alt="Mailchimp logo"
        sx={mailchimpStyles.avatarMailchimp}
      />
    </Link>
  </Box>

</Box>




          <Box id="mce-responses" className="clear foot" sx={{ display: 'flex', justifyContent: 'center' }}>
  <Box
    className="response"
    id="mce-error-response"
    sx={{ display: 'none' }}
  ></Box>
  <Box
    className="response"
    id="mce-success-response"
    sx={{ display: 'none' }}
  ></Box>
</Box>
{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
<Box id="bot" sx={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
  <input
    type="text"
    name="b_3649bfb6bbcebf017b8ea851a_77eea4b433"
    tabIndex="-1"
    value={botInputValue}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBotValue(e.target.value)}
  />
</Box>

      </Box>
    </Box>
        </Box>
    </Box>
  );
};

export default Mailchimp;

