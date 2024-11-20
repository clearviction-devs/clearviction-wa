import {
  Header, MetaPageHead,
} from './content.types.ts';

interface NotFoundPageContent {
  meta: MetaPageHead;
  page: Header;
}

const donateContent: NotFoundPageContent = {
  meta: {
    title: 'Clearviction | Oops! Error - We Can’t Find That Page',
    content: 'Sorry, the page you’re looking for can’t be found. Explore resources to clear criminal convictions in WA or return to the homepage for more help.',
  },
  page: {
    id: 'not-found',
    header: 'Error 404: Page Not Found',
    body: 'Oops! The page you\'re looking for cannot be found. Please check the URL or navigate back to the homepage.',
    ctaText: 'Return to homepage',
    ctaLink: '/',
  },
};

export default donateContent;
