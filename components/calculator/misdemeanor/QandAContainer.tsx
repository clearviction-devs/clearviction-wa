import {
  Box, Button, Container, Stack,
} from '@mui/material';
import BlockContent from '@sanity/block-content-to-react';
import React, { useMemo } from 'react';

import { SharedCalcProps, StaticCalcProps } from '../../../utils/calculator.props.ts';
import portableTextComponent from '../../../utils/portableTextComponents.tsx';
import { PageContext } from '../../helper/PageContext.tsx';

export default function QandAContainer({
  page, calculatorConfig, addToResponses, setOpenNotSurePopup,
}: StaticCalcProps &{
      addToResponses: SharedCalcProps['addToResponses'],
      setOpenNotSurePopup: SharedCalcProps['setOpenNotSurePopup']}) {
  const contextValue = useMemo(() => ({
    isFinalPage: page.isFinalPage,
  }), [page.isFinalPage]);

  return (
    <>
      <PageContext.Provider value={contextValue}>
        <Box mb={4}>
          {
            page.content && (
            <BlockContent
              blocks={page.content}
              serializers={portableTextComponent}
            />
            )
          }

        </Box>
      </PageContext.Provider>
      <Container id="choices-container" maxWidth="xs" sx={{ mb: 4 }}>
        <Stack gap={2}>

          {page.choices
            && page.choices.map((choice) => {
              const linkTo = choice.linkTo
                ? `/calculator/${choice.linkTo.slug.current}`
                : '#';
              const href = choice.isExternalLink ? choice.url : linkTo;
              return (
                <Button
                  key={choice._key}
                  variant="contained"
                  href={href}
                  sx={{ width: '100%' }}
                  onClick={() => addToResponses(choice.label)}
                >
                  {choice.label}
                </Button>
              );
            })}

          {page.isQuestion && (
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: '100%' }}
              onClick={() => setOpenNotSurePopup(true)}
            >
              {calculatorConfig.notSureAnswer.promptText}
            </Button>
          )}

        </Stack>
      </Container>
    </>
  );
}
