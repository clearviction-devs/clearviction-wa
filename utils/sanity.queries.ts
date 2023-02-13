import { groq } from "next-sanity";

export const calculatorPagePaths = groq`
  *[_type == 'calculatorInfoPage' && slug.current != null].slug.current
`;

export const calculatorPagesBySlugQuery = groq`
  *[_type == "calculatorInfoPage" && slug.current == $slug][0] {
    _id,
    title,
    content,
    isQuestion,
    isFinalPage,
    isEligible,
    "choices": choices[]{url, isExternalLink, label, linkTo->{slug}},
    "slug": slug.current,
  }
`;
