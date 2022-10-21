import { useEffect, useState } from "react";
import { Gallery, useGalleryResult } from "../../../../types/general.types";
import tokens from "./../../../../pages/api/tokens.json";

const useGallery = (): useGalleryResult => {
  const imagesPerPage: number = 18;
  const [images, setImages] = useState<Gallery[]>(
    tokens.slice(0, imagesPerPage)
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageBoundaryBackward, setPageBoundaryBackward] =
    useState<boolean>(true);
  const [pageBoundaryForward, setPageBoundaryForward] =
    useState<boolean>(false);

  const fetchImages = (): void => {
    setLoading(true);
    setPageBoundaryBackward(true);
    console.log(currentPage);
    const res: Gallery[] = tokens;
    setImages(res);
  };

  const totalImages: number = tokens.length;
  const indexofLastImage: number = currentPage * imagesPerPage;
  const indexofFirstImage: number = indexofLastImage - imagesPerPage;
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
      setPageBoundaryBackward(false);
      setPageBoundaryForward(false);
      if (pageNumber - 1 === pageNumbers[0]) {
        setPageBoundaryBackward(true);
      }
    }
  };

  const paginateForward = (pageNumber: number): void => {
    if (pageNumber < totalPages) {
      setCurrentPage(pageNumber + 1);
      setPageBoundaryForward(true);
      setPageBoundaryBackward(false);
      if (pageNumber + 1 === totalPages) {
        setPageBoundaryForward(true);
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
  };
};

export default useGallery;
