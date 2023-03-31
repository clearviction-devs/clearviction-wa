import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook"; //

// see the links below for documentation on Sanity.io webhook docs
// https://github.com/sanity-io/webhook-toolkit
// https://www.sanity.io/docs/webhooks

export const config = {
  api: {
    bodyParser: false,
  },
};

const revalidateLookup = {
  //keys are sourced from clearviction-sanity's repo --> schema folder --> file --> name
  calculatorInfoPage: function (body) {
    return `/calculator/${body.slug.current}`;
  },
  calculatorConfig: function (body) {
    return `/calculator/`;
  },
  calculatorPage: function (body) {
    return `/calculator/`;
  },
  choiceButton: function (body) {
    return `/calculator/`;
  },
};

//find _id to determine update type

async function readBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export default async function handler(req, res) {
  function wait30() {
    return new Promise((res) => {
      setTimeout(res, 30000);
    });
  }

  try {
    const secret = process.env.NEXT_REVALIDATE || "false";
    const signature = req?.headers?.[SIGNATURE_HEADER_NAME];
    const body = await readBody(req); // Read the body into a string

    if (!isValidSignature(body, signature, secret)) {
      res.status(401).json({ success: false, message: "Invalid signature" });
      return;
    }

    const jsonBody = JSON.parse(body);
    const updateType = jsonBody["_type"];
    const updateFunction = revalidateLookup[updateType];
    const updateURL = updateFunction(jsonBody);
    await wait30();
    await res.revalidate(updateURL);
    console.log(" successfully revalidated: ", updateURL);
    return res.json({ revalidated: true });
  } catch (err) {
    console.log("revalidate error", err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(`Error revalidating ${req.query.path}`);
  }
  // }
}
