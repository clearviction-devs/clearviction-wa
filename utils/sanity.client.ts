import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from './sanity.api.ts';
import {
  calculatorConfigQuery,
  calculatorPagePaths,
  calculatorPagesBySlugQuery,
} from './sanity.queries.ts';

const sanityClient = (token?: string) => {
  const createClientCall = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
  });
  return projectId ? createClientCall : null;
};

export async function getCalculatorPageBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string;
}) {
  return sanityClient(token)?.fetch(calculatorPagesBySlugQuery, { slug });
}

export async function getCalculatorPagePaths(): Promise<string[] | undefined> {
  return sanityClient()?.fetch(calculatorPagePaths);
}

export async function getCalculatorConfig() {
  return sanityClient()?.fetch(calculatorConfigQuery);
}
