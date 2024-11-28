import { NavItem } from './content.types.ts';

const navItems: NavItem[] = [
  {
    href: '/',
    text: 'Home',
    width: '109px',
  },
  {
    href: '/get-started',
    text: 'Get started',
    width: '153px',
    sublist: [
      {
        href: '/get-started/gather-your-documentation',
        text: 'Gather your documentation',
      },
      {
        href: '/get-started/determine-your-eligibility',
        text: 'Determine your eligibility',
      },
      {
        href: '/get-started/file-with-the-court',
        text: 'File with the court',
      }],
  },
  {
    href: '/why-vacate',
    text: 'Why vacate',
    width: '159px',
    sublist: [
      {
        href: '/why-vacate/employment-benefits',
        text: 'Employment benefits',
      },
      {
        href: '/why-vacate/housing-benefits',
        text: 'Housing benefits',
      },
      {
        href: '/why-vacate/educational-benefits',
        text: 'Educational benefits',
      }],
  },
];

export default navItems;
