import {
  Header, MetaPageHead,
} from './content.types.ts';

interface NotFoundPageContent {
  meta: MetaPageHead;
  page: Header;
}

const donateContent: NotFoundPageContent = {
  meta: {
    title: 'Page Not Found',
    content: 'You have reached a page route that does not exist. Please check the URL and try again.',
  },
  page: {
    id: 'not-found',
    header: 'Error 404: Page Not Found',
    body: 'Oops! The page you\'re looking for cannot be found. Please check the URL or navigate back to the homepage',
    ctaText: 'Return to Homepage',
    ctaLink: '/',
    imgsrc: 'illustrations/not-found.svg',
  },
};

export default donateContent;
