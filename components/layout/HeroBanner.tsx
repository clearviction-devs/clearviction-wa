import Image from 'next/image';
import React from 'react';

export default function HeroBanner() {
  return (
    <Image
      src="/illustrations/h1-home-desktop.png"
      width={0}
      height={0}
      sizes="100vw"
      alt="h1 home image"
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
