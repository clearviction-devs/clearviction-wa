import { createClient } from 'next-sanity';
import Head from 'next/head';

import { Stack } from '@mui/material';

import { useNextSanityImage } from 'next-sanity-image';
import Section from '../components/Section';
import Footer from '../components/Footer';

export default function Home({ content, footerContent }) {
  return (
    <>
      <Head>
        <title>Open Seattle</title>
        <meta name='description' content={content[0].tagline} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Stack>
          {content.map((section, index) => {
            return (
              <Section
                key={index}
                index={index}
                sanityClient={client}
                section={section}
              />
            );
          })}
        </Stack>
      </main>
      <Footer content={footerContent[0]} />
    </>
  );
}

const client = createClient({
  projectId: 'c0yyoz8w',
  dataset: 'production',
  apiVersion: '2022-12-22',
  useCdn: false,
});

export async function getStaticProps() {
  const landingPage = await client.fetch('*[_type == "landing-page"]');
  const footerContent = await client.fetch('*[_type == "footer"]');
  const content = landingPage[0].pageBuilder;
  return {
    props: {
      content,
      footerContent,
    },
  };
}
