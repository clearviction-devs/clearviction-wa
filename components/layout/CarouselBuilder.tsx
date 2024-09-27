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

import { CarouselCard, GetStartedStep } from '../../content/content.types.ts';
import GetStartedCard from './GetStartedCard.tsx';
import PlayCard from './PlayCard.tsx';
import WhyVacateCard, { WhyVacateCardProps } from './WhyVacateCard.tsx';

interface CarouselBuilderProps {
  cards?: CarouselCard[];
  getStartedCards?: GetStartedStep[];
  whyVacateCards?: WhyVacateCardProps[];
  cardWidth: number;
  cardHeight?: number;
  buttonHRef?: string;
  buttonClassName?: string;
  buttonAriaLabel?: string;
  useGetStartedCards?: boolean;
  usePlaycard?: boolean;
  useWhyVacateCards?: boolean;
  useMD?: boolean;
}

export default function CarouselBuilder({
  cards,
  getStartedCards,
  whyVacateCards,
  cardWidth,
  cardHeight,
  useGetStartedCards,
  usePlaycard,
  useWhyVacateCards,
  useMD,
}: CarouselBuilderProps) {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNumCards = () => {
    if (cards) return cards.length;
    if (getStartedCards) return getStartedCards.length;
    if (whyVacateCards) return whyVacateCards.length;
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
          md: '36px',
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
          gap: useGetStartedCards ? '32px' : '0px',

        }}
        >
          { useGetStartedCards && getStartedCards && getStartedCards.map((card) => (
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
                cardHeight={cardHeight}
                useMD={useMD}
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

          { useWhyVacateCards && whyVacateCards && whyVacateCards.map((card) => (
            <Box
              key={card.id}
              sx={{
                flex: '1 1 0',
                width: cardWidth,
                height: card.minHeight,
                marginRight: '32px',
              }}
            >
              <WhyVacateCard {...card} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Dots and arrows */}
      <Box sx={{
        display: {
          xs: 'flex',
          md: getNumCards() > 3 ? 'flex' : 'none',
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

          {whyVacateCards && whyVacateCards.map((card, index) => (
            <IconButton
              key={card.id}
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
