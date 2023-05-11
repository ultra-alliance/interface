import { useUltra, useUltraQuery } from '@ultra-alliance/react-ultra';
import {
  tFactoryManifested,
  tListedUniq,
  tTokenA,
  tUltra,
} from '@ultra-alliance/ultra-sdk';
import React from 'react';
import useInfiniteScroll from './useInfiniteScroll';
import { SelectChangeEvent } from '@mui/material';

export type tSortOrder = 'asc' | 'desc' | 'recent';

export type tListedUniqCard = {
  factoryManifested: tFactoryManifested;
  owningDetails: tTokenA;
  listingDetails: tListedUniq;
};

// function sortListedUniq(sortBy: tSortOrder, uniqs: tListedUniq[]) {
//   let res: tListedUniq[] = [];

//   const price = (val: string) => {
//     const res = parseFloat(val.split(' ')[0]);
//     return res;
//   };

//   switch (sortBy) {
//     case 'asc':
//       res =
//         uniqs.sort((a, b) => {
//           return price(a?.price) - price(b?.price);
//         }) || [];
//       break;

//     case 'desc':
//       res = uniqs.sort((a, b) => {
//         return price(b.price) - price(a.price);
//       });
//       break;

//     case 'recent':
//       res = uniqs;
//       break;

//     default:
//       res = uniqs;
//       break;
//   }
//   return res;
// }

function sortListedUniq(sortBy: tSortOrder, uniqs: tListedUniq[]) {
  const sortByPriceAsc = (a: tListedUniq, b: tListedUniq) => {
    const priceA = parseFloat(a?.price?.split(' ')[0]) || 0;
    const priceB = parseFloat(b?.price?.split(' ')[0]) || 0;
    return priceA - priceB;
  };

  const sortByPriceDesc = (a: tListedUniq, b: tListedUniq) => {
    const priceA = parseFloat(a?.price?.split(' ')[0]) || 0;
    const priceB = parseFloat(b?.price?.split(' ')[0]) || 0;
    return priceB - priceA;
  };

  switch (sortBy) {
    case 'asc':
      return uniqs.slice().sort(sortByPriceAsc);

    case 'desc':
      return uniqs.slice().sort(sortByPriceDesc);

    default:
      return uniqs.slice();
  }
}

async function getListedUniqDetails({
  ultra,
  listedUniq,
  res,
}: {
  ultra: tUltra | undefined;
  listedUniq: tListedUniq;
  res: tListedUniqCard[];
}) {
  const owningDetails = (
    await ultra?.api.getUniqsOwned(listedUniq.owner)
  )?.rows.find(t => t.id === listedUniq.token_id);
  if (!owningDetails) throw new Error('No owning details found');
  const factoryDetails = await ultra?.api.getFactoryManifested(
    owningDetails.token_factory_id,
    {
      square: true,
    },
  );
  if (!factoryDetails) throw new Error('No factory details found');
  res.push({
    factoryManifested: factoryDetails,
    owningDetails,
    listingDetails: listedUniq,
  });
}

export const useListedUniqs = () => {
  const itemsPerPage = 10;
  const { ultra } = useUltra();
  const [sortOrder, setSortOrder] = React.useState<tSortOrder>('desc');
  const [isFiltering, setIsFiltering] = React.useState<boolean>(false);

  const {
    data: listedUniqs,
    isLoading: isFetchingListedUniqs,
    fetchData: fetchListed,
  } = useUltraQuery<any, tListedUniq[] | undefined>({
    queryFn: async _args => {
      const res = await ultra?.api.getListedUniqs({
        config: {
          limit: 5000,
          reverse: true,
        },
      });
      return res?.rows;
    },
    autofetch: true,
  });

  const sortedUniqs = React.useMemo(() => {
    if (!listedUniqs) return [];
    return sortListedUniq(sortOrder, [...listedUniqs]);
  }, [listedUniqs, sortOrder]);

  const {
    data: listedUniqsPaginated,
    page,
    setPage,
    START_INDEX,
    END_INDEX,
    fetchData: refreshSortedUniq,
    isLoading: isLoadingMore,
  } = useInfiniteScroll<boolean, tListedUniqCard[]>({
    ultraQueryParams: {
      queryFn: async (reset?: boolean): Promise<tListedUniqCard[]> => {
        if (!sortedUniqs) return [];
        let res: tListedUniqCard[] = [];
        for (let i = START_INDEX; i < END_INDEX; i++) {
          await getListedUniqDetails({
            ultra,
            listedUniq: sortedUniqs[i],
            res,
          });
        }
        setPage(page + 1);

        return reset
          ? res
          : ((listedUniqsPaginated || []).concat(res) as tListedUniqCard[]);
      },
      callback: () => {
        setIsFiltering(false);
      },
    },
    itemPerPage: itemsPerPage,
  });

  const handleSortOrderChange = (event: SelectChangeEvent<tSortOrder>) => {
    setPage(0);
    setIsFiltering(true);
    setSortOrder(event.target.value as tSortOrder);
  };

  React.useEffect(() => {
    if (listedUniqs && !isFetchingListedUniqs) {
      refreshSortedUniq(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listedUniqs, sortOrder]);

  return {
    listedUniqs: listedUniqsPaginated,
    isLoadingMore,
    isFiltering,
    handleSortOrderChange,
    sortOrder,
    fetchListed,
    isFetchingListedUniqs,
    totalListed: listedUniqs?.length || 0,
    itemsPerPage,
  };
};
