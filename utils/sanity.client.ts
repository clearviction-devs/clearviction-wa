import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";
import {
  calculatorPagePaths,
  calculatorPagesBySlugQuery,
} from "./sanity.queries";

const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null;
};

export async function getCalculatorPageBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string;
}) {
  return await sanityClient(token)?.fetch(calculatorPagesBySlugQuery, { slug });
}

export async function getCalculatorPagePaths(): Promise<string[] | undefined> {
  return await sanityClient()?.fetch(calculatorPagePaths);
}
