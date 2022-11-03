import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Gallery, useGalleryResult } from "../../../../types/general.types";
import tokens from "./../../../../pages/api/tokens.json";

const useGallery = (): useGalleryResult => {
  const router = useRouter();
  const imagesPerPage: number = 18;
  const [images, setImages] = useState<Gallery[]>(
    tokens.slice(0, imagesPerPage)
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageBoundaryBackward, setPageBoundaryBackward] =
    useState<boolean>(false);
  const [pageBoundaryForward, setPageBoundaryForward] = useState<boolean>(true);

  const fetchImages = (): void => {
    setLoading(true);
    setPageBoundaryBackward(false);
    const res: Gallery[] = tokens;
    setImages(res);
  };

  const totalImages: number = tokens.length;
  const indexofLastImage: number = currentPage * imagesPerPage;
  const indexofFirstImage: number = indexofLastImage - imagesPerPage;
  const [more, setMore] = useState<boolean>(false);
  const currentImages: Gallery[] = images.slice(
    indexofFirstImage,
    indexofLastImage
  );
  const pageNumbers: number[] = [];
  const totalPages: number = Math.ceil(totalImages / imagesPerPage);
  for (let i: number = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const paginateBackward = (pageNumber: number): void => {
    if (pageNumber > pageNumbers[0]) {
      setCurrentPage(pageNumber - 1);
      setPageBoundaryBackward(true);
      setPageBoundaryForward(true);
      router.replace("/", `/#shop/${pageNumber - 1}`, {
        shallow: true,
        scroll: false,
      });
      if (pageNumber - 1 === pageNumbers[0]) {
        setPageBoundaryBackward(false);
      }
    }
  };

  const paginateForward = (pageNumber: number): void => {
    if (pageNumber < totalPages) {
      setCurrentPage(pageNumber + 1);
      setPageBoundaryForward(true);
      setPageBoundaryBackward(true);
      router.replace("/", `/#shop/${pageNumber + 1}`, {
        shallow: true,
        scroll: false,
      });
      if (pageNumber + 1 === totalPages) {
        setPageBoundaryForward(false);
      }
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return {
    currentImages,
    loading,
    currentPage,
    paginateBackward,
    paginateForward,
    pageBoundaryBackward,
    pageBoundaryForward,
    setMore,
    more,
  };
};

export default useGallery;
