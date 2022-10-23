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
  more: boolean;
  setMore: (e: boolean) => void;
};

export type GalleryProps = {
  currentImages: Gallery[];
  loading: boolean;
  more: boolean;
  setExpressInterest: (e: string) => void;
};

export type Blender = {
  image: string;
};

export type BoxProps = {
  currentImages: Blender[];
  currentPage: number;
  loading: boolean;
  paginateBackward: (e: number) => void;
  paginateForward: (e: number) => void;
  pageBoundaryForward: boolean;
  pageBoundaryBackward: boolean;
};

export type useBoxResults = {
  currentImages: Blender[];
  loading: boolean;
  currentPage: number;
  paginateBackward: (e: number) => void;
  paginateForward: (e: number) => void;
  pageBoundaryForward: boolean;
  pageBoundaryBackward: boolean;
};

export type useGalleryBoxProps = {
  currentImages: Blender[];
};

export type usePaginateProps = {
  currentPage: number;
  paginateBackward: (e: number) => void;
  paginateForward: (e: number) => void;
  pageBoundaryForward: boolean;
  pageBoundaryBackward: boolean;
};

export type FooterProps = {
  handleRewind: () => void;
};

export type HeaderProps = {
  rewind: any;
  handleShop: () => void;
};

export type useLibraryResult = {
  showImage: string;
  setShowImage: (e: string) => void;
  link: string;
  setLink: (e: string) => void;
};

export type Library = {
  name: string;
  image: string;
  number: string;
  id: string;
  link: string;
  width: number;
  height: number;
};

export type LibraryProps = {
  lastBook: any;
  handleLastBook: () => void;
  setRefactorModal: (e: boolean) => void;
};

export type LibraryLargeProps = {
  lastBook: any;
  handleLastBook: () => void;
  setRefactorModal: (e: boolean) => void;
};

export type LibrarySmallProps = {
  lastBook: any;
  handleLastBook: () => void;
  setRefactorModal: (e: boolean) => void;
};

export type FeedProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
};

export type SocialProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
};

export type useFeedResults = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
};

export type GridProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
}

export type DisplayProps = {
  shop: any;
  setExpressInterest: (e: string) => void;
};

export type useFormResults = {
  setSubmitSuccess: (e: boolean) => void;
  submitSuccess: boolean;
  handleSubmitForm: (e: any) => Promise<void>;
};

export type HomeProps = {
  rewind: any;
};

export type RefactorElementProps = {
  setRefactorModal: (e: boolean) => void;
};
