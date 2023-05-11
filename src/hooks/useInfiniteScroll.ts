import {
  tUseUltraQueryParams,
  useUltraQuery,
} from '@ultra-alliance/react-ultra';
import React from 'react';
import usePagination from './usePagination';

type tUseInfiniteScroll<tArgs, tRes> = {
  ultraQueryParams: tUseUltraQueryParams<tArgs, tRes>;
  itemPerPage: number;
};

const useInfiniteScroll = <tArgs, tRes>({
  ultraQueryParams,
  itemPerPage,
}: tUseInfiniteScroll<tArgs, tRes>) => {
  const ultraQuery = useUltraQuery<tArgs, tRes>(ultraQueryParams);

  const { data, isLoading, fetchData } = ultraQuery;
  const [page, setPage] = React.useState(0);

  const START_INDEX = page * itemPerPage;
  const END_INDEX = START_INDEX + itemPerPage;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom && !isLoading) {
      fetchData();
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return {
    ...ultraQuery,
    page,
    setPage,
    START_INDEX,
    END_INDEX,
  };
};

export default useInfiniteScroll;
