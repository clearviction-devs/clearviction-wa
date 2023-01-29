export interface navItem {
  href: string;
  text: string;
}

const navItems: navItem[] = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: 'get-started',
    text: 'Get Started',
  },
  {
    href: 'get-involved',
    text: 'Get Involved',
  },
  {
    href: 'why-vacate',
    text: 'Why Vacate',
  },
  {
    href: 'donate',
    text: 'Donate',
  },
  {
    href: 'contact',
    text: 'Contact',
  },
];

export default navItems;
