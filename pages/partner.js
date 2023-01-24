import { useForm } from 'react-hook-form';
import { Container, Box, Stack, Button, Typography } from '@mui/material';
import {
  FormContainer,
  TextFieldElement,
  RadioButtonGroup,
} from 'react-hook-form-mui';

export default function Projects() {
  const formContext = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      organizationType: null,
      website: '',
      projectTitle: '',
      projectDetails: '',
    },
  });

  const { reset } = formContext;
  return (
    <main>
      <Container maxWidth='xl' sx={{ mt: 8 }}>
        <Box></Box>
        <Typography variant='h2'>Partner</Typography>
        <Typography gutterBottom>
          Thank you for your interest in Open Seattle! We&apos;d love to learn
          more about your needs to determine if we can lend a hand.
        </Typography>
        <FormContainer
          onSuccess={(data) => console.log(data)}
          formContext={formContext}
        >
          <Stack gap={2}>
            <Box component='fieldset' sx={{ border: 'none', p: 0, m: 0 }}>
              <Typography fontSize={20} component='legend' gutterBottom>
                Contact Details
              </Typography>
              <Stack gap={2}>
                <TextFieldElement name='name' label='Name' required />
                <TextFieldElement name='email' label='Email' required />
                <TextFieldElement
                  name='phone'
                  label='Phone Number'
                  helperText='For those rare times when other communication channels break down.'
                  required
                />
                <TextFieldElement
                  name='organization'
                  label='Organization'
                  helperText='What organization do you represent?'
                  required
                />
                <Box px={'14px'}>
                  <RadioButtonGroup
                    name='organizationType'
                    label='Organization Type'
                    options={[
                      { label: 'Government Agency', id: 'government' },
                      { label: 'Nonprofit', id: 'nonprofit' },
                      { label: 'Community Organization', id: 'community' },
                      { label: 'For-profit Company', id: 'for-profit' },
                      { label: 'Other', id: 'other' },
                    ]}
                    row
                    required
                  />
                </Box>

                <TextFieldElement
                  name='website'
                  label='Website'
                  helperText='Where can we find your organization online?'
                />
              </Stack>
            </Box>
            <Box component='fieldset' sx={{ border: 'none', p: 0, m: 0 }}>
              <Typography fontSize={20} component='legend' gutterBottom>
                Project
              </Typography>
              <Stack gap={2}>
                <TextFieldElement
                  name='projectTitle'
                  label='Project Title'
                  helperText="What is the name of the project? It's okay if this is just a working title!"
                  required
                />
                <TextFieldElement
                  name='projectDetails'
                  label='Project Details'
                  helperText='Tell us a little about the project.'
                  required
                />
              </Stack>
            </Box>
            <Button type='reset' variant='contained' onClick={reset}>
              Reset
            </Button>
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </Stack>
        </FormContainer>
      </Container>
    </main>
  );
}
