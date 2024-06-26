import {
  Box, Button, Container, Stack,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import React, { useMemo } from 'react';

import theme from '../../styles/themes/theme.tsx';
import { SharedCalcProps, StaticCalcProps } from '../../utils/calculator.props.ts';
import portableTextComponent from '../../utils/portableTextComponents.tsx';
import { PageContext } from '../helper/PageContext.tsx';

interface Choice {
  _key?: string;
  label: string;
  isExternalLink: boolean;
  url?: string;
  linkTo?: {
    _ref?: string;
    _type?: string;
    slug: {
      current: string;
    };
  };
  linkToOtherPageType?: {
    _ref?: string;
    _type?: string;
    slug: {
      current: string;
    };
  };
}

export default function QandAContainer({
  page, calculatorConfig, addToResponses, setOpenNotSurePopup,
}: StaticCalcProps &{
      addToResponses: SharedCalcProps['addToResponses'],
      setOpenNotSurePopup: SharedCalcProps['setOpenNotSurePopup']}) {
  const contextValue = useMemo(() => ({
    isFinalPage: page.isFinalPage,
  }), [page.isFinalPage]);

  const linkToPage = (choice: Choice) => {
    if (choice.linkTo) {
      return `/calculator/${choice.linkTo.slug.current}`;
    }
    if (choice.linkToOtherPageType) {
      return `/calculator/${choice.linkToOtherPageType.slug.current}`;
    }
    return '#';
  };

  const useColumnForChoices = page.choices && page.choices.length > 3;

  return (
    <Box>
      <PageContext.Provider value={contextValue}>
        <Box data-cy="calc-block-of-content" sx={{ marginBottom: '100px' }}>
          {
            page.content && (
            <PortableText
              value={page.content}
              components={portableTextComponent}
            />
            )
          }

        </Box>
      </PageContext.Provider>

      <Container
        id="choices-container"
        maxWidth="xs"
        sx={{
          mb: 4, display: 'flex', flexDirection: 'column',
        }}
      >

        {(page.choices || page.isQuestion) && (

        <Stack
          gap={2}
          role="group"
          aria-label="Choice options"
          direction={useColumnForChoices ? 'column' : 'row'}
        >
          {page.choices
                && page.choices.map((choice, index) => {
                  const linkTo = linkToPage(choice);
                  const href = choice.isExternalLink ? choice.url : linkTo;
                  return (
                    <Button
                      key={choice._key}
                      variant="contained"
                      href={href}
                      data-cy={`calc-choice-${index}`}
                      sx={{ backgroundColor: theme.palette.secondary.dark, width: '50%' }}
                      onClick={() => addToResponses(choice.label)}
                    >
                      {choice.label}
                    </Button>
                  );
                })}
        </Stack>
        )}

        {page.isQuestion && (
          <Button
            data-cy="not-sure-button"
            sx={{
              width: '100%', backgroundColor: 'inherit', color: theme.palette.secondary.dark, textDecoration: 'underline',
            }}
            onClick={() => setOpenNotSurePopup(true)}
          >
            {calculatorConfig.notSureAnswer.promptText}
          </Button>
        )}

      </Container>
    </Box>
  );
}
