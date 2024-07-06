import {
  Box, Button, Container, Stack,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import React, { useMemo } from 'react';

import theme from '../../styles/themes/theme.tsx';
import StaticCalcProps from '../../utils/calculator.props.ts';
import portableTextComponent from '../../utils/portableTextComponents.tsx';
import { CalculatorButton } from '../helper/EligibilityButton.tsx';
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
  page, calculatorConfig, setOpenNotSurePopup,
}: StaticCalcProps &{
      setOpenNotSurePopup: React.Dispatch<React.SetStateAction<boolean>>}) {
  const contextValue = useMemo(() => ({
    isFinalPage: page.isFinalPage,
  }), [page.isFinalPage]);

  const isPartOfHead = page.slug.includes('head');

  const linkToPage = (choice: Choice) => {
    if (choice.linkTo) {
      return `/calculator/${choice.linkTo.slug.current}`;
    }
    if (choice.linkToOtherPageType) {
      return `/calculator/${choice.linkToOtherPageType.slug.current}`;
    }
    return '#';
  };

  const useColumnForChoices = isPartOfHead || (page.choices && page.choices.length > 3);

  return (
    <>
      <Box>
        <PageContext.Provider value={contextValue}>
          <Box data-cy="calc-block-of-content" mb={6}>
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
      </Box>
      <Box>
        <Container
          id="choices-container"
          sx={{
            width: {
              xs: '100%',
              sm: '360px',
            },
            mt: 2,
            mx: 0,
            display: 'flex',
            flexDirection: 'column',

          }}
        >

          {(page.choices || page.isQuestion) && (

          <Stack
            gap={2}
            role="group"
            aria-label="Choice options"
            direction={useColumnForChoices ? 'column' : 'row'}
            sx={{
              justifyContent: {
                xs: 'space-between',
                sm: 'normal',
              },
            }}
          >
            {page.choices
                && page.choices.map((choice, index) => {
                  const linkTo = linkToPage(choice);
                  const href = choice.isExternalLink ? choice.url : linkTo;
                  const arrow = choice.label === 'Check my eligibility' || choice.label === 'Continue' || false;

                  return (
                    <CalculatorButton
                      key={choice._key}
                      href={href}
                      data-cy={`calc-choice-${index}`}
                      hasArrow={arrow}
                    >
                      {choice.label}
                    </CalculatorButton>
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
    </>
  );
}
