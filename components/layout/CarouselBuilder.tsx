import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SquareIcon from '@mui/icons-material/Square';
import {
  Box, Grid, IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

import { GetStartedStep } from '../../content/content.types.ts';
import GetStartedCard from './GetStartedCard.tsx';
import PlayCard from './PlayCard.tsx';

export interface CarouselCard {
  title: string;
  details: string;
  iconSource?: string;
  ctaButton: string;
  buttonHref: string;
}

interface CarouselBuilderProps {
  cards?: CarouselCard[];
  getStartedCards?: GetStartedStep[];
  cardWidth: number;
  cardHeight?: number;
  buttonHRef?: string;
  buttonClassName?: string;
  buttonAriaLabel?: string;
  useGetStartedCards?: boolean;
  usePlaycard?: boolean;
}

export default function CarouselBuilder({
  cards,
  getStartedCards,
  cardWidth,
  cardHeight,
  useGetStartedCards,
  usePlaycard,
}: CarouselBuilderProps) {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNumCards = () => {
    if (cards) return cards.length;
    if (getStartedCards) return getStartedCards.length;
    return 0;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === getNumCards() - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? getNumCards() - 1 : prevIndex - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        paddingLeft: {
          xs: '24px',
          sm: 'unset',
        },
      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box sx={{
          display: 'flex',
          transform: `translateX(-${currentIndex * (cardWidth + 32)}px)`,
          transition: 'transform 0.5s ease-in-out',
          gap: '32px',
          justifyContent: {
            md: 'space-between',
          },

        }}
        >
          {useGetStartedCards && getStartedCards && getStartedCards.map((card) => (
            <Box
              key={card.title}
              sx={{
                flex: '1 1 0',
                width: cardWidth,
              }}
            >
              <GetStartedCard
                title={card.title}
                overline={card.overline}
                body={card.body}
                ctaText={card.ctaText}
                ctaLink={card.ctaLink}
              />
            </Box>
          ))}

          { usePlaycard && cards && cards.map((card) => (
            <Box
              key={card.title}
              sx={{
                flex: '1 1 0',
                minWidth: 274,
                maxWidth: 274,
                marginRight: '32px',
              }}
            >
              <PlayCard
                {...card}
                cardWidth={cardWidth}
                cardHeight={cardHeight}
                buttonHref={card.buttonHref}
                ctaText={card.ctaButton}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Dots and arrows */}
      <Box sx={{
        display: {
          xs: 'flex',
          md: 'none',
        },
        mt: '32px',
      }}
      >
        <IconButton
          onClick={handlePrevious}
          sx={{
            px: '2px',
          }}
        >
          <ArrowBackIcon
            sx={{
              fontSize: '24px',
              color: theme.palette.primary.main,
            }}
          />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
          }}
        >
          {cards && cards.map((card, index) => (
            <IconButton
              key={card.title}
              onClick={() => handleDotClick(index)}
              sx={{
                padding: '4px',
              }}
            >
              <SquareIcon
                sx={{
                  fontSize: '4px',
                  color: index === currentIndex
                    ? theme.palette.primary.dark : theme.palette.primary.main,
                }}
              />
            </IconButton>
          ))}

          {getStartedCards && getStartedCards.map((card, index) => (
            <IconButton
              key={card.title}
              onClick={() => handleDotClick(index)}
              sx={{
                padding: '4px',
              }}
            >
              <SquareIcon
                sx={{
                  fontSize: '4px',
                  color: index === currentIndex
                    ? theme.palette.primary.dark : theme.palette.primary.main,
                }}
              />
            </IconButton>
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            px: '2px',
          }}
        >
          <ArrowForwardIcon
            sx={{
              fontSize: '24px',
              color: theme.palette.primary.main,
            }}
          />
        </IconButton>
      </Box>
    </Grid>
  );
}
