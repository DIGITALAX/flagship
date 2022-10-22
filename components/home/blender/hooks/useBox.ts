import { useEffect, useState } from "react";
import { Blender, useBoxResults } from "../../../../types/general.types";
import blender from "./../../../../pages/api/blender.json";

const useBox = (): useBoxResults => {
  const imagesPerPage: number = 3;
  const [images, setImages] = useState<Blender[]>(
    blender.slice(0, imagesPerPage)
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
    const res: Blender[] = blender;
    setImages(res);
  };

  const totalImages: number = blender.length;
  const indexofLastImage: number = currentPage * imagesPerPage;
  const indexofFirstImage: number = indexofLastImage - imagesPerPage;
  const currentImages: Blender[] = images.slice(
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

export default useBox;
