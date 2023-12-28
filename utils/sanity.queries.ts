import { groq } from 'next-sanity';

export const basePagePathsQuery = groq`
  *[_type == $pageType && slug.current != null].slug.current
`;

export const basePagesBySlugQuery = groq`
*[_type == $pageType && slug.current == $slug][0] {
  _id,
  title,
  content,
  isQuestion,
  isFinalPage,
  isEligible,
  isUndetermined,
  "choices": choices[]{_key, url, isExternalLink, label, linkTo->{slug}},
  "slug": slug.current,
}
`;

export const calculatorConfigQuery = groq`
  *[_type == "calculatorConfig"][0] {
    notSureAnswer,
    feedback,
    errorReportingForm,
    checkAnotherConviction{..., "linkTo": reference->{slug}},
    legalDisclaimer
  }
`;
