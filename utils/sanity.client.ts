import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from './sanity.api.ts';
import {
  calculatorConfigQuery,
  calculatorFelonyPagePaths,
  calculatorFelonyPagesBySlugQuery,
  calculatorMisdemeanorPagePaths,
  calculatorMisdemeanorPagesBySlugQuery,
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

export async function getCalculatorMisdemeanorPageBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string;
}) {
  return sanityClient(token)?.fetch(calculatorMisdemeanorPagesBySlugQuery, { slug });
}

export async function getCalculatorMisdemeanorPagePaths(): Promise<string[] | undefined> {
  return sanityClient()?.fetch(calculatorMisdemeanorPagePaths);
}

export async function getCalculatorFelonyPageBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string;
}) {
  return sanityClient(token)?.fetch(calculatorFelonyPagesBySlugQuery, { slug });
}

export async function getCalculatorFelonyPagePaths(): Promise<string[] | undefined> {
  return sanityClient()?.fetch(calculatorFelonyPagePaths);
}

export async function getCalculatorConfig() {
  return sanityClient()?.fetch(calculatorConfigQuery);
}
