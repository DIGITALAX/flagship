export type Gallery = {
  name: string;
  image: string;
  collection: string;
  style: string;
  blurred: string;
  link: string;
  width: number;
  height: number;
};

export type useGalleryResult = {
  currentImages: Gallery[];
  loading: boolean;
  currentPage: number;
  paginateBackward: (e: number) => void;
  paginateForward: (e: number) => void;
  pageBoundaryForward: boolean;
  pageBoundaryBackward: boolean;
};

export type GalleryProps = {
  currentImages: Gallery[];
  loading: boolean;
};
