import { NavItem } from './content.types.ts';
import navItems from './navItems.ts';

export const footerContent = {
  mission:
        'Clearviction is reducing barriers faced by formerly incarcerated individuals by streamlining the process of vacating eligible convictions in Washington state.',
  address: {
    name:
        'Clearviction c/o Seamus Brugh',
    street:
        '107 Spring St',
    city:
        'Seattle, WA 98104',
  },
  warning:
        'The content on this website should not be treated as legal advice',
  information:
        'Clearviction is a registered 501(c)3 nonprofit organization, EIN#88-3187952.  All donations are tax deductible in full or in part. ',
};

export const footerNavItems: NavItem[] = navItems
  .filter(
    (item) => ['Get Started', 'Get Involved', 'About Us', 'Contact'].includes(item.text),
  )
  .sort((a, b) => {
    const order = ['Get Started', 'About Us', 'Get Involved', 'Contact'];
    return order.indexOf(a.text) - order.indexOf(b.text);
  })
  .map((item) => (item.text === 'About Us'
    ? { ...item, text: 'About' }
    : item));
