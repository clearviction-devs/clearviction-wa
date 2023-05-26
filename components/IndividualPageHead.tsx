import Head from "next/head";

type Props = {
  title: string;
  metaContent: string;
};

export default function IndividualPageHead({ title, metaContent }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaContent} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
