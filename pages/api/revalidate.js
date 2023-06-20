import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'; //

// see the links below for documentation on Sanity.io webhook docs
// https://github.com/sanity-io/webhook-toolkit
// https://www.sanity.io/docs/webhooks

export const config = {
  api: {
    bodyParser: false,
  },
};

const revalidateLookup = {
  // keys are sourced from clearviction-sanity's repo --> schema folder --> file --> name
  calculatorInfoPage(body) {
    return `/calculator/${body.slug.current}`;
  },
  calculatorConfig() {
    return '/calculator/';
  },
  calculatorPage() {
    return '/calculator/';
  },
  choiceButton() {
    return '/calculator/';
  },
};

// https://www.sanity.io/docs/webhooks
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
async function readBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export default async function handler(req, res) {
  // eslint-disable-next-line no-console
  console.log('update request received');
  try {
    const secret = process.env.NEXT_REVALIDATE || 'false';
    const signature = req?.headers?.[SIGNATURE_HEADER_NAME];
    const body = await readBody(req); // Read the body into a string

    if (!isValidSignature(body, signature, secret)) {
      res.status(401).json({ success: false, msg: 'Invalid signature' }); // 400 status codes tell sanity there is an error, and not to retry
      return;
    }

    const jsonBody = JSON.parse(body);
    const updateType = jsonBody._type;
    const updateFunction = revalidateLookup[updateType];
    const updateURL = updateFunction(jsonBody);
    await res.revalidate(updateURL);

    // eslint-disable-next-line no-console
    console.log(' successfully revalidated: ', updateURL);

    res.json({ revalidated: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('revalidate error', err);

    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    res.status(500).json({ msg: 'internal server error' }); // 500-range will be retried using an exponential back-off pattern
  }
}
