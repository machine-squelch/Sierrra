import galleryData from "./gallery-data.json";

export type GallerySlide = {
  src: string;
  alt: string;
  caption?: string;
};

export const gallerySlides: GallerySlide[] = galleryData.slides;
