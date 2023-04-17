import { useState, useEffect } from "react";

interface PaginationOptions<T> {
  items: T[];
  itemsPerPage: number;
}

interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  paginatedItems: () => T[];
  next: () => void;
  prev: () => void;
  jump: (page: number) => void;
  startIdx: number;
  endIdx: number;
}

const usePagination = <T>({
  items,
  itemsPerPage,
}: PaginationOptions<T>): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const paginatedItems = () => {
    return items.slice(startIdx, endIdx);
  };

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    setCurrentPage(currentPage - 1);
  };

  const jump = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    next,
    prev,
    jump,
    startIdx,
    endIdx,
  };
};

export default usePagination;
