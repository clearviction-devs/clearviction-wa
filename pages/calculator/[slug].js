import { Box, Button, Container, Stack } from "@mui/material";
import { PortableText } from "@portabletext/react";
import {
  getCalculatorPageBySlug,
  getCalculatorPagePaths,
} from "utils/sanity.client";

export default function CalculatorSlugRoute({ page }) {
  console.log(page);
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box mb={4}>
        <PortableText value={page.content} />
      </Box>
      <Container maxWidth="xs" sx={{ mb: 4 }}>
        <Stack gap={2}>
          {page.choices.map((choice, index) => {
            const linkTo = choice.linkTo
              ? `/calculator/${choice.linkTo.slug.current}`
              : "#";
            const href = choice.isExternalLink ? choice.url : linkTo;
            return (
              <Button
                key={index}
                variant="contained"
                color="primary"
                href={href}
              >
                {choice.label}
              </Button>
            );
          })}
          {page.isQuestion && (
            <Button variant="outlined" color="primary">{`I'm not sure`}</Button>
          )}
        </Stack>
      </Container>
    </Container>
  );
}

export async function getStaticProps(ctx) {
  const { params = {} } = ctx;

  const [page] = await Promise.all([
    getCalculatorPageBySlug({ slug: params.slug }),
  ]);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getCalculatorPagePaths();

  return {
    paths: paths?.map((slug) => `/calculator/${slug}`) || [],
    fallback: false,
  };
}
