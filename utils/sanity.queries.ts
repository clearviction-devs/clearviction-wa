import { groq } from 'next-sanity';

export const basePagePathsQuery = groq`
  *[slug.current != null].slug.current
`;

export const basePagesBySlugQuery = groq`
*[slug.current == $slug][0] {
  _id,
  title,
  content,
  isQuestion,
  isFinalPage,
  isEligible,
  "choices": choices[]{_key, url, isExternalLink, label, linkTo->{slug}, linkToOtherPageType->{slug}},
  "slug": slug.current,
}
`;

export const calculatorConfigQuery = groq`
  *[_type == "calculatorConfig"][0] {
    notSureAnswer,
    feedback,
    checkAnotherConviction{..., "linkTo": reference->{slug}},
    legalDisclaimer
  }
`;
