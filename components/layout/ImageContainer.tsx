import ImageNext, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';

interface ImageProps extends NextImageProps {
  /**
   * If true, the image will use the dimensions of the image instead of the dimensions passed in
   */
  useImageDimensions?: boolean;

  /**
   * If true, image will be preloaded. For images detected as Largest Contentful Paint (LCP)
   */
  priority?: boolean;
}

const generateStyle = (styles?: React.CSSProperties, useImageDimensions?: boolean) => {
  if (useImageDimensions) {
    return {
      width: 'auto',
      height: 'auto',
      ...styles,
    };
  }
  return styles;
};

export default function ImageContainer({
  src, alt, width, height, style, useImageDimensions, priority = false,
}: ImageProps) {
  return (
    <ImageNext
      width={width}
      height={height}
      alt={alt}
      src={src}
      style={generateStyle(style, useImageDimensions)}
      priority={priority}
    />
  );
}
