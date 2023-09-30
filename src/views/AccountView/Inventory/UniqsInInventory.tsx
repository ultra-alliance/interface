import React, { useState, useEffect } from 'react';
import InfoCard from '@/components/molecules/InfoCard';
import OwnedUniqCard from '@/components/molecules/OwnedUniqCard';
import {
  Box,
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
  formatNumeralAbreviation,
  formatTimeSinceNow,
  tTokenA,
  tFactoryManifested,
  tListedUniq,
} from '@ultra-alliance/ultra-sdk';
import AssetAmount from '@/components/molecules/AssetAmount';
import useBreakPoint from '@/hooks/useBreakpoint';
import usePagination from '@/hooks/usePagination';
import { LoadingIndicator } from '@/components';
import usePageRedirect from '@/hooks/usePageRedirect';
import ListUniq from '@/views/shared/modals/ListUniq/ListUniq';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import TransferUniq from '@/views/shared/modals/TransferUniq/TransferUniq';

interface UniqsInInventoryProps {
  uniqsOwned?: tTokenA[];
  withActions?: boolean;
  withViewButton?: boolean;
  onActionComplete?: () => void;
  onAvatarChange?: () => void;
}

export type tUniqsDetail = {
  uniq: tTokenA;
  manifested: tFactoryManifested;
  listingDetails: tListedUniq | undefined;
};

interface UniqListZoneProps<T> {
  date: string;
  uniqs: T[];
  index: number;
  redirect?: boolean;
  withActions?: boolean;
  withViewButton?: boolean;
  onSuccessList: () => void;
  onSucessChangeAvatar?: () => void;
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
  withActions,
  withViewButton,
  onSuccessList,
  onSucessChangeAvatar,
}: UniqListZoneProps<tUniqsDetail>) => {
  const { ultra, refreshAccount, isAuthenticated, account } = useUltra();
  const { goToFactory } = usePageRedirect();
  const [listedUniq, setListedUniq] = useState<number | undefined>(undefined);
  const [transferedUniq, setTransferedUniq] = useState<number | undefined>(
    undefined,
  );

  const onClickCancelResell = async (token_id: number) => {
    if (!token_id || !ultra) return;
    ultra.account
      .cancelResellUniq({
        token_id,
      })
      .then(() => {
        toast.success('Uniq successfully unlisted');
        onSuccessList();
      })
      .catch(() => {
        toast.error('Failed to unlist Uniq');
      });
  };

  const onClickSetAvatar = async (nft_id: number) => {
    if (!ultra) return;
    ultra.account
      .setAvatar({
        nft_id,
      })
      .then(() => {
        toast.success('Uniq successfully set as avatar');
        onSucessChangeAvatar && onSucessChangeAvatar();
      })
      .catch(() => {
        toast.error('Failed to set Uniq as avatar');
      });
  };

  const onClickClearAvatar = async () => {
    if (!ultra) return;
    ultra.account
      .clearAvatar()
      .then(() => {
        toast.success('Avatar successfully cleared');
        onSucessChangeAvatar && onSucessChangeAvatar();
      })
      .catch(() => {
        toast.error('Failed to clear avatar');
      });
  };

  return (
    <React.Fragment>
      <Grow key={`${date}-${index}`} in={true}>
        <Box>
          <Divider sx={{ mb: 2 }} variant="fullWidth">
            {`Minted ${formatTimeSinceNow(uniqs[0].uniq.mint_date)}`}
          </Divider>
          <Grid container spacing={2}>
            {uniqs.map((uniq, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={uniq.uniq.id}>
                  <OwnedUniqCard
                    withActions={withActions}
                    onClickViewDetails={() => {
                      goToFactory(uniq.uniq.token_factory_id);
                    }}
                    onClickResale={() => {
                      setListedUniq(index);
                    }}
                    onClickCancelResale={() =>
                      onClickCancelResell(uniqs[index].uniq.id)
                    }
                    onClickTransfer={() => {
                      setTransferedUniq(index);
                    }}
                    onClickClearAvatar={() => onClickClearAvatar()}
                    onClickSetAvatar={() => onClickSetAvatar(uniq.uniq.id)}
                    uniq={uniq.manifested.data}
                    manifest={uniq.manifested.manifest}
                    ownedUniq={uniq.uniq}
                    listingDetails={uniq?.listingDetails}
                    viewDetailBtn={withViewButton}
                    hasUniq={isAuthenticated}
                    isUniqAvatar={account?.data?.avatar_id === uniq.uniq.id}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grow>
      {listedUniq !== undefined && (
        <ListUniq
          open={listedUniq !== undefined}
          onClose={() => {
            setListedUniq(undefined);
          }}
          uniq={uniqs[listedUniq]}
          onSuccessList={() => onSuccessList()}
        />
      )}

      {transferedUniq !== undefined && (
        <TransferUniq
          open={transferedUniq !== undefined}
          onClose={() => {
            setTransferedUniq(undefined);
          }}
          uniq={uniqs[transferedUniq]}
          onSuccessTransfer={async () => {
            await refreshAccount();
            onSuccessList();
          }}
        />
      )}
    </React.Fragment>
  );
};

export default function UniqsInInventory({
  uniqsOwned,
  withActions,
  withViewButton,
  onActionComplete,
  onAvatarChange,
}: UniqsInInventoryProps) {
  const { ultra } = useUltra();
  const { isSm } = useBreakPoint();
  const { factoryID, accountID } = useRouter().query;

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
    itemsPerPage: 2,
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
          const manifested = await ultra?.api.getFactoryManifested(
            uniq.token_factory_id,
            {
              square: true,
            },
          );

          const listingDetails =
            (
              await ultra?.api?.getTableRows<tListedUniq>({
                code: 'eosio.nft.ft',
                scope: 'eosio.nft.ft',
                table: 'resale.a',
                config: {
                  lowerBound: uniq.id,
                  upperBound: uniq.id,
                  limit: 1,
                },
              })
            )?.rows[0] || undefined;

          if (manifested) {
            newGroupDetailed.uniqs.push({
              uniq,
              manifested,
              listingDetails: listingDetails,
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
  }, [currentPage, sortOrder, accountID]);

  return (
    <InfoCard
      title={`${formatNumeralAbreviation(
        uniqsOwned?.length,
      )} Uniqs in Inventory`}
    >
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
              redirect={factoryID === undefined}
              onSuccessList={() => {
                fetchUniqsDetails();
                if (onActionComplete) onActionComplete();
              }}
              onSucessChangeAvatar={() => {
                if (onAvatarChange) onAvatarChange();
              }}
              withActions={withActions}
              withViewButton={withViewButton}
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
