import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from './sanity.api.ts';
import {
  basePagePathsQuery,
  basePagesBySlugQuery,
  calculatorConfigQuery,
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

interface CalcPageBySlugParams {
  slug: string;
  token?: string;
}

// `calculatorInfoPage` is the id/name of the Sanity MISDEMEANOR page however,
// the visual "title" for Sanity Studio is "Calculator Misdemeanor Page"

export async function getMisdemeanorPageBySlug({ slug, token }: CalcPageBySlugParams) {
  return sanityClient(token)?.fetch(
    basePagesBySlugQuery,
    { slug, pageType: 'calculatorInfoPage' },
  );
}

export async function getMisdemeanorPagePaths(): Promise<string[] | undefined> {
  return sanityClient()?.fetch(
    basePagePathsQuery,
    { pageType: 'calculatorInfoPage' },
  );
}

export async function getFelonyPageBySlug({ slug, token }: CalcPageBySlugParams) {
  return sanityClient(token)?.fetch(
    basePagesBySlugQuery,
    { slug, pageType: 'calculatorFelonyPage' },
  );
}

export async function getFelonyPagePaths(): Promise<string[] | undefined> {
  return sanityClient()?.fetch(
    basePagePathsQuery,
    { pageType: 'calculatorFelonyPage' },
  );
}

export async function getCalculatorConfig() {
  return sanityClient()?.fetch(calculatorConfigQuery);
}
