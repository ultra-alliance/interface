import { useState, useEffect } from 'react';
import InfoCard from '@/components/molecules/InfoCard';
import OwnedUniqCard from '@/components/molecules/OwnedUniqCard';
import {
  Box,
  Chip,
  Divider,
  Grid,
  Grow,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import { useUltra, useUltraQuery } from '@ultra-alliance/react-ultra';
import {
  formatTimeSinceNow,
  tGetUniqManifested,
  tGetUniqOwnedOutput,
  tTokenA,
  tUniqManifested,
} from '@ultra-alliance/ultra-sdk';
import AssetAmount from '@/components/molecules/AssetAmount';
import useBreakPoint from '@/hooks/useBreakpoint';
import usePagination from '@/hooks/usePagination';
import { LoadingIndicator } from '@/components';
import usePageRedirect from '@/hooks/usePageRedirect';

interface UniqsInInventoryProps {
  uniqsOwned?: tGetUniqOwnedOutput['rows'];
}

type tUniqsDetail = {
  uniq: tTokenA;
  manifested: tUniqManifested;
};

interface UniqListZoneProps<T> {
  date: string;
  uniqs: T[];
  index: number;
}

type tGroupedUniqsOwned<T> = {
  date: string;
  uniqs: T[];
};

type tGroupDetailedUniqsOwned = {
  date: string;
  uniqs: tUniqsDetail[];
};

const UniqListZone = ({
  date,
  uniqs,
  index,
}: UniqListZoneProps<tUniqsDetail>) => {
  const { goToUniq } = usePageRedirect();
  return (
    <Grow key={`${date}-${index}`} in={true}>
      <Box>
        <Divider sx={{ mb: 2 }} variant="fullWidth">
          {`Minted ${formatTimeSinceNow(uniqs[0].uniq.mint_date)}`}
        </Divider>
        <Grid container spacing={2}>
          {uniqs.map(uniq => {
            return (
              <Grid item xs={12} sm={6} md={4} key={uniq.uniq.id}>
                <OwnedUniqCard
                  onClick={() => goToUniq(uniq.uniq.token_factory_id)}
                  uniq={uniq.manifested.uniq}
                  manifest={uniq.manifested.manifest}
                  ownedUniq={uniq.uniq}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Grow>
  );
};

export default function UniqsInInventory({
  uniqsOwned,
}: UniqsInInventoryProps) {
  const { ultra } = useUltra();
  const { isSm } = useBreakPoint();

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Sort the uniqsOwned array by minting date
  const sortedUniqsOwned = uniqsOwned?.sort((a, b) => {
    const dateA = new Date(a.mint_date).getTime();
    const dateB = new Date(b.mint_date).getTime();
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  // Group the uniqsOwned array by minting date
  const groupedUniqsOwned: tGroupedUniqsOwned<tTokenA>[] =
    sortedUniqsOwned?.reduce(
      (groups: tGroupedUniqsOwned<tTokenA>[], uniq: tTokenA) => {
        const date = new Date(uniq.mint_date).toDateString();
        const groupIndex = groups.findIndex(group => group.date === date);
        if (groupIndex !== -1) {
          groups[groupIndex].uniqs.push(uniq);
        } else {
          groups.push({ date, uniqs: [uniq] });
        }
        return groups;
      },
      [],
    ) || [];

  const { currentPage, jump, totalPages, paginatedItems } = usePagination<
    tGroupedUniqsOwned<tTokenA>
  >({
    items: groupedUniqsOwned || [],
    itemsPerPage: 4,
  });

  const handleSortOrderChange = (event: SelectChangeEvent<'asc' | 'desc'>) => {
    setSortOrder(event.target.value as 'asc' | 'desc');
  };

  const {
    data: uniqsDetails,
    fetchData: fetchUniqsDetails,
    isLoading: isLoadingDetails,
  } = useUltraQuery({
    queryFn: async () => {
      const detailedGroupsUniq: tGroupDetailedUniqsOwned[] = [];

      for (const { date, uniqs } of paginatedItems()) {
        let newGroupDetailed: tGroupDetailedUniqsOwned = {
          date: date,
          uniqs: [],
        };
        for (const uniq of uniqs) {
          const manifested = await ultra?.getUniqManifested(
            uniq.token_factory_id,
          );
          if (manifested) {
            newGroupDetailed.uniqs.push({
              uniq,
              manifested,
            });
          }
        }
        detailedGroupsUniq.push(newGroupDetailed);
      }

      return detailedGroupsUniq;
    },
    autofetch: false,
  });

  useEffect(() => {
    if (!isLoadingDetails) {
      fetchUniqsDetails();
    }
  }, [currentPage, sortOrder]);

  return (
    <InfoCard title="Uniqs in Inventory">
      <Stack direction={'column'} gap={2} padding={2}>
        <Stack
          direction={isSm ? 'column' : 'row'}
          alignItems={!isSm ? 'center' : ''}
          gap={2}
          justifyContent={'space-between'}
          sx={{
            display: uniqsOwned?.length ? 'flex' : 'none',
          }}
        >
          <Select
            value={sortOrder}
            onChange={handleSortOrderChange}
            size="small"
            variant="standard"
            disabled={isLoadingDetails}
            renderValue={value => {
              return `Sort by minting date - ${
                value === 'asc' ? 'Oldest' : 'Newest'
              }
              `;
            }}
          >
            <MenuItem value="asc">
              <b> Oldest first</b>
            </MenuItem>
            <MenuItem value="desc">
              <b> Newest first</b>
            </MenuItem>
          </Select>

          <Stack
            direction={isSm ? 'column' : 'row'}
            alignItems={'center'}
            gap={2}
            justifyContent={'flex-end'}
          >
            <AssetAmount
              srcSet="/uniq-icon.svg"
              amount={uniqsOwned?.length || 0}
            />
            <Pagination
              size="small"
              shape="rounded"
              count={totalPages}
              page={currentPage}
              onChange={(event, page) => jump(page)}
              disabled={isLoadingDetails}
            />
          </Stack>
        </Stack>
        {uniqsDetails && !isLoadingDetails ? (
          uniqsDetails?.map((group, index) => (
            <UniqListZone
              index={index}
              key={group?.date}
              date={group?.date}
              uniqs={group?.uniqs}
            />
          ))
        ) : (
          <LoadingIndicator />
        )}
        {uniqsOwned?.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            No uniqs in inventory
          </Typography>
        )}
      </Stack>
    </InfoCard>
  );
}
