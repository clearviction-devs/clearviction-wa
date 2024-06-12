import React from 'react';

import ImageContainer from './ImageContainer.tsx';

export default function HeroBanner() {
  return (
    <ImageContainer
      src="/illustrations/h1-home-desktop.png"
      width={1440}
      height={660}
      alt=""
      style={{ maxWidth: '100%' }}
      useImageDimensions
    />
  );
}
