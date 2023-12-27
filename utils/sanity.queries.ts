import { groq } from 'next-sanity';

// `calculatorInfoPage` is the name of the Sanity MISDEMEANOR page, where the visual "title" for
// Sanity Studio is "Calculator Misdemeanor Page"

export const calculatorMisdemeanorPagePaths = groq`
  *[_type == 'calculatorInfoPage' && slug.current != null].slug.current
`;

export const calculatorMisdemeanorPagesBySlugQuery = groq`
  *[_type == "calculatorInfoPage" && slug.current == $slug][0] {
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

export const calculatorFelonyPagePaths = groq`
  *[_type == 'calculatorFelonyPage' && slug.current != null].slug.current
`;

export const calculatorFelonyPagesBySlugQuery = groq`
  *[_type == "calculatorFelonyPage" && slug.current == $slug][0] {
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
