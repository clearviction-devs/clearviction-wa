// TODO:
// form submit working
// typescript error with errorMessages
// style markdown
// do we need useHistory?

import { send } from "@emailjs/browser";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import MuiMarkdown from "mui-markdown";
import { useEffect,useState } from 'react';

import SectionContainer from '../components/SectionContainer';

type Props = {
    email: string,
    errorMessages?: string,
}

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

    const validateEmail = ({email}: Props) => {
        const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (validEmail.test(email)) {
            setEmailError({ errorStatus: false, errorMessages: '' });
        } else {
            setEmailError({
                errorStatus: true,
                errorMessage: 'Please enter a valid email',
            });
        }
    }

    const handleChange = (e: React.ChangeEvent<any>) => {
        setToSend({ ...toSend, [(e.target as HTMLInputElement).name]: e.target.value });
        if (e.target.name === 'reply_to') validateEmail(e.target.value)
    }

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        contact_type: '',
        message: '',
    })
    
    const [emailError, setEmailError] = useState({
        errorStatus: false,
        errorMessage: '',
    });

    useEffect(() => { 
            const storedSender = JSON.parse(sessionStorage.getItem('toSend') || '{}' );
            if (storedSender) {
                setToSend(storedSender);
            }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('toSend', JSON.stringify(toSend));
    }, [toSend]);

    const handleFormSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        console.log('submit form')
        send(SERVICE_ID as string, TEMPLATE_ID as string, toSend, USER_ID)
            .then(response => {
                console.log('success', response.status, response.text);
                // history.push('/contact/success');
            })
            .catch(error => {
                console.log('failed', error);
                alert('error, please try again')
            })
    }

    return (
        <>
            <SectionContainer sx= {{ textAlign: 'center', mt: 5}}>
                <Typography variant='h1' sx={{ textAlign: 'left', margin: '15px auto 50px', width: '60%' }}>Contact Us</Typography>
                {/* <MuiMarkdown> variant='h5' sx={{ width: '62%', margin: '20px auto 40px', textAlign: 'left' }}>Have questions? Send us a message and well get back to you within 24 hours.</MuiMarkdown> */}
                <MuiMarkdown>{`#####Have questions? Send us a message and we'll get back to you within 24 hours.`}</MuiMarkdown>
            </SectionContainer>
            <SectionContainer 
                sx={{ 
                    textAlign: 'center', 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' } 
                    }} 
            >
                <FormControl variant='standard' required component='fieldset' 
                    sx={{ 
                        width: {xs: '85%', sm: '70%', md: '40%'}, 
                        margin: '20px auto'
                        }}
                >
                    <FormGroup sx={{ width: '100%', leftAlign: 'left', color: '#4e6c99' }}>
                        <FormControlLabel
                            label='Name*'
                            labelPlacement='top'
                            sx={{ 
                                
                                alignItems: 'flex-start', 
                                ml: 0, 
                                mb: 2, 
                                textTransform: 'uppercase'
                            }}
                            control={
                                <TextField 
                                    id='name' 
                                    autoComplete='name' 
                                    placeholder='Enter Your Full Name' 
                                    variant='standard' 
                                    required
                                    name='from_name'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                    fullWidth
                                    aria-label='your full name'
                                />
                            }
                        />
                
                        <FormControlLabel
                            label='Email*'
                            labelPlacement='top'
                            sx={{ 
                                alignItems: 'flex-start', 
                                ml: 0, 
                                mb: 2, 
                                textTransform: 'uppercase'
                            }}
                            control={
                                <TextField
                                    id='email'
                                    autoComplete='email' 
                                    placeholder='Enter Your Email Address' 
                                    required
                                    type='email'
                                    // error={emailError.errorStatus}
                                    // helperText={emailError.errorMessage}
                                    name='reply_to'
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                    variant='standard'
                                    aria-label='your email address'
                                    fullWidth
                                />
                            }
                        />
    
                        <FormControlLabel
                            label='I am a(n)*'
                            labelPlacement='top'
                            sx={{ 
                                alignItems: 'flex-start', 
                                ml: 0, 
                                mb: 2, 
                                textTransform: 'uppercase'
                            }}
                            control={
                                <TextField
                                    id='who'
                                    select
                                    placeholder='Please Select An Option'
                                    required
                                    fullWidth
                                    name='contact_type'
                                    value={toSend.contact_type}
                                    onChange={handleChange}
                                    variant='standard'
                                    aria-label='choose your contact type'
                                >
                                    {contactTypes.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }
                        />
                        
                        <FormControlLabel
                            label='Your Message*'
                            labelPlacement='top'
                            sx={{ 
                                alignItems: 'flex-start', 
                                ml: 0, 
                                mb: 2, 
                                textTransform: 'uppercase'
                            }}
                            control={
                                <TextField
                                    id='message'
                                    multiline 
                                    minRows={4}
                                    maxRows={10}
                                    value={toSend.message}
                                    required
                                    fullWidth
                                    name='message'
                                    onChange={handleChange} 
                                    type='text' 
                                    placeholder='Type Your Message Here'
                                    variant='standard'
                                    aria-label='your message'
                                />
                            }
                        />
                        <Button onClick={() => handleFormSubmit} sx={{ margin: '30px auto 50px', minWidth: '240px' }} type='submit' variant='contained'>Send message</Button>
                    </FormGroup>

                </FormControl>
                <Box
                    component='img'
                    alt=''
                    src='/illustrations/new_message.svg'
                    sx={{ 
                        maxWidth: '600px',
                        margin: '20px auto 40px',
                    }}
                />
            </SectionContainer>
        </>
    )
}