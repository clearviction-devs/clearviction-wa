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

import PlayCard from './PlayCard.tsx';

interface Card {
  title: string;
  details: string;
  iconSource?: string;
  ctaButton: string;
}

interface CarouselBuilderProps {
  cards: Card[];
  cardWidth: number;
  cardHeight: number;
  backgroundColor: string;
  textColor: string;
  buttonHRef: string;
  buttonClassName: string;
  buttonAriaLabel: string;
}

export default function CarouselBuilder({
  cards, cardWidth, cardHeight, backgroundColor,
  textColor,
  buttonHRef, buttonClassName, buttonAriaLabel,
}: CarouselBuilderProps) {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Grid item xs={12}>
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
        }}
        >
          {cards.map((card) => (
            <Box
              key={card.title}
              sx={{
                flex: '1 1 0', minWidth: 274, maxWidth: 274, marginRight: '32px',
              }}
            >
              <PlayCard
                {...card}
                cardWidth={cardWidth}
                cardHeight={cardHeight}
                backgroundColor={backgroundColor}
                textColor={textColor}
                buttonHRef={buttonHRef}
                buttonClassName={buttonClassName}
                buttonAriaLabel={buttonAriaLabel}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
          {cards.map((card, index) => (
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
