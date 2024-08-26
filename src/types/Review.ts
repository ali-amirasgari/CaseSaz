import { HTMLAttributes } from 'react';
export interface ReviewColumnProps {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}

export interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
}