import { ContactType, FormInfo, MetaPageHead } from './content.types.ts';

interface ContactContent {
    meta: MetaPageHead;
    title: string;
    subtitle: string;
    sendButtonText: string;
    contactTypes: ContactType[];
    form: {
        placeholders: FormInfo;
        labels: FormInfo;
        ariaLabels: FormInfo;
    }
}

const contactContent: ContactContent = {
  meta: {
    title: 'Clearviction | Contact Us - Reach Out for Support and Information',
    content: 'Have questions or concerns? Contact our team, and we\'ll respond within 24 hours.',
  },
  title: 'Get in contact with us',
  subtitle: 'Have questions? Send us a message and we\'ll get back to you within 24 hours.',
  sendButtonText: 'Send message',
  contactTypes: [
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
  ],
  form: {
    placeholders: {
      name: 'Enter Your Full Name',
      email: 'example@example.com',
      contactType: 'Please Select An Option',
      message: 'Type your message here',
    },
    labels: {
      name: 'FIRST/LAST NAME',
      email: 'EMAIL',
      contactType: 'YOUR TITLE/ROLE',
      message: 'YOUR MESSAGE',
    },
    ariaLabels: {
      name: 'Enter your full name',
      email: 'Enter your email address',
      contactType: 'Please select an option',
      message: 'Type your message here',
    },
  },
};

export default contactContent;
