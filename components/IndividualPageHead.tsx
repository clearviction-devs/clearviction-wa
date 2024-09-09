import Head from 'next/head';
import React from 'react';

type Props = {
  title: string;
  metaContent: string;
};

export default function IndividualPageHead({ title, metaContent }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaContent} key="description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
