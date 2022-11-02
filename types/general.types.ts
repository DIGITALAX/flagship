export type Gallery = {
  name: string;
  image: string;
  blurred: string;
  link?: string;
  width: number;
  height: number;
  price?: number;
  amount?: number;
  collection?: string;
  description?: string;
  graph?: string;
  edition?: string;
  contract?: string;
  type?: string;
  realm?: string;
  realmLink?: string;
  trueImage?: string;
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
  queryWindowSize2XL: boolean;
};

export type Blender = {
  image: string;
  blurred: string;
};

export type BlenderProps = {
  queryWindowSize300: boolean;
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
  changeColor: () => void;
  heartColor: string;
};

export type useLibraryResult = {
  showImage: string;
  setShowImage: (e: string) => void;
  link: string;
  setLink: (e: string) => void;
  lastBook: any;
  handleLastBook: () => void;
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
  setRefactorModal: (e: boolean) => void;
};

export type LibraryLargeProps = {
  setRefactorModal: (e: boolean) => void;
};

export type LibrarySmallProps = {
  setRefactorModal: (e: boolean) => void;
};

export type FeedProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
};

export type SocialProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  queryWindowSize300: boolean;
};

export type useFeedResults = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
};

export type GridProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
};

export type GridSmallProps = {
  publicationsFeed: any[];
  getMoreFeed: () => Promise<any>;
  queryWindowSize: boolean;
  queryWindowSizeMobile: boolean;
  queryWindowSizeXL: boolean;
  queryWindowSize300: boolean;
};

export type DisplayProps = {
  shop: any;
  setExpressInterest: (e: string) => void;
  queryWindowSize2XL: boolean;
};

export type useFormResults = {
  setSubmitSuccess: (e: boolean) => void;
  submitSuccess: boolean;
  handleSubmitForm: (e: any) => Promise<void>;
};

export type HomeProps = {
  rewind: any;
  changeColor: () => void;
  heartColor: string;
  queryWindowSize2XL: boolean;
  queryWindowSize300: boolean;
  shop: any;
};

export type RefactorElementProps = {
  setRefactorModal: (e: boolean) => void;
};

export type useTvResults = {
  refreshImages: () => void;
  newImages: string[];
};

export type useStickyStateResults = {
  setItem: (value: string) => void;
  value: string | null;
};

export type MetadataProps = {
  token: any;
  connect: any;
  errorMessage: boolean;
  collectNFT: () => Promise<void>;
  isLoading: boolean;
  collectMarket: () => Promise<void>;
  isSuccess: boolean;
  loading: boolean;
  data: boolean;
};

export type CollectProps = {
  token: any;
  connect: any;
  errorMessage: boolean;
  collectNFT: () => Promise<void>;
  isLoading: boolean;
  collectMarket: () => Promise<void>;
  isSuccess: boolean;
  loading: boolean;
  data: boolean;
};

export type useMetadataResults = {
  collectNFT: () => Promise<void>;
  collectMarket: () => Promise<void>;
  errorState: boolean;
  prepareNFTDataCollection: (
    address: string,
    price: number,
    amount: number
  ) => void;
  prepareNFTDataMarket: (
    address: string,
    price: number,
    amount: number
  ) => void;
  errorMessage: boolean;
  setAbiFunction: (e: string) => void;
  isLoading: boolean;
  loading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: boolean;
};

export type useApproveResults = {
  prepareApproval: () => void;
  approveAddress: () => Promise<void>;
  isLoading: boolean;
  loading: boolean;
  isSuccess: boolean;
};

export type PreOrderProps = {
  heartColor: string;
}