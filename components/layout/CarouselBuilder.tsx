import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Grid } from '@mui/material';
import React from 'react';

import PlayCard from './PlayCard.tsx';

// const settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 3,
//   initialSlide: 0,
// };

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
}

export default function CarouselBuilder({
  cards, cardWidth, cardHeight, backgroundColor, textColor,
}: CarouselBuilderProps) {
  return (
    <Grid container>
      {cards.map((card) => (
        <PlayCard
          {...card}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      ))}
    </Grid>
  );
}
