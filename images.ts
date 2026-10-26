import type { SyntheticEvent } from 'react';

// Put real photos in public/images/ using these file names (see IMAGES-CHECKLIST.csv).
export const placeImage = (districtId: string, placeId: string) => `/images/places/${districtId}-${placeId}.jpg`;
export const districtImage = (districtId: string) => `/images/districts/${districtId}.jpg`;

// If a photo file is missing, show a neutral placeholder instead of a broken image.
export const onImgError = (e: SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  if (!img.src.endsWith('/placeholder.svg')) img.src = '/placeholder.svg';
};
