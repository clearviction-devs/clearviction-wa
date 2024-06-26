import { NavItem } from './content.types.ts';

const navItems: NavItem[] = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/get-started',
    text: 'Get Started',
    sublist: ['Gather your documentation', 'Determine your eligibility', 'File with the court'],
  },
  {
    href: '/why-vacate',
    text: 'Why Vacate',
    sublist: ['Employment benefits', 'Housing benefits', 'Education benefits'],
  },
];

export default navItems;
