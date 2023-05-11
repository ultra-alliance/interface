import React from 'react';
import {
  Grid,
  Typography,
  Zoom,
  Box,
  LinearProgress,
  Stack,
  Divider,
  Select,
  MenuItem,
  Paper,
} from '@mui/material';
import {
  formatNumeralAbreviation,
  calcTotalPrice,
} from '@ultra-alliance/ultra-sdk';
import App from '../shared/layouts/App';
import { ListedUniqCard, LoadingIndicator, UniqCard } from '@/components';
import usePageRedirect from '@/hooks/usePageRedirect';
import useBreakPoint from '@/hooks/useBreakpoint';
import { tListedUniqCard, useListedUniqs } from '@/hooks/useListedUniqs';
import { useLocalisation, useUltra } from '@ultra-alliance/react-ultra';
import Login from '../shared/modals/Login';
import BuyUniq from '../shared/modals/BuyUniq';
import UniqChip from '@/components/atoms/UniqChip';
import PageTitle from '@/components/molecules/PageTitle';
import { LocalGroceryStore } from '@mui/icons-material';

const ListedView = () => {
  const { isSm } = useBreakPoint();
  const { goToFactory } = usePageRedirect();
  const { baseCurrency } = useLocalisation();
  const { marketPrices, isAuthenticated } = useUltra();
  const {
    sortOrder,
    handleSortOrderChange,
    isLoadingMore,
    listedUniqs,
    isFetchingListedUniqs,
    totalListed,
    itemsPerPage,
    isFiltering,
  } = useListedUniqs();
  const [selectedUniq, setSelectedUniq] = React.useState<
    tListedUniqCard | undefined
  >(undefined);
  const selectUniq = (uniq: tListedUniqCard) => {
    setSelectedUniq(uniq);
  };
  const closeUniq = () => {
    setSelectedUniq(undefined);
  };

  const isUniqSelected = selectedUniq !== undefined;
  return (
    <>
      <App footer={false}>
        <React.Fragment>
          <Stack
            direction={isSm ? 'column' : 'row'}
            alignItems={isSm ? 'flex-start' : 'center'}
          >
            <PageTitle
              title="Listed"
              fadedTitle="Uniqs"
              icon={<LocalGroceryStore />}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Select
              value={sortOrder}
              onChange={handleSortOrderChange}
              size="small"
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                p: 0.5,
                mt: isSm ? 2 : 0.5,
                borderRadius: 2,
              }}
              disableUnderline
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: 'background.default',
                  },
                },
              }}
              disabled={isFetchingListedUniqs || isLoadingMore}
              renderValue={value => {
                return value === 'asc'
                  ? 'Cheapest first'
                  : value === 'desc'
                  ? 'Expensive first'
                  : 'Recently listed';
              }}
            >
              <MenuItem value="asc">
                <b>Cheapest first</b>
              </MenuItem>
              <MenuItem value="desc">
                <b>Expensive first</b>
              </MenuItem>
              <MenuItem value="recent">
                <b>Recently listed</b>
              </MenuItem>
            </Select>
          </Stack>
          <Divider />
          {(isLoadingMore && !listedUniqs?.length) || isFiltering ? (
            <Box sx={{ width: '100%' }}>
              <LoadingIndicator />
            </Box>
          ) : null}

          <Grid container rowSpacing={3} columnSpacing={3}>
            {/* {sortedUniqs?.map((uniq: tListedUniq, index: number) => (
                <pre key={`${uniq.token_id}`}>
                  {JSON.stringify(uniq, null, 4)}
                </pre>
              ))} */}

            {!isFiltering &&
              listedUniqs?.map((uniq: tListedUniqCard, index: number) => (
                <Zoom
                  in={true}
                  key={`${uniq.factoryManifested?.data.id}-${index}-uniq`}
                  style={{
                    transitionDelay: `${
                      index > itemsPerPage ? 0 : index * 100
                    }ms`,
                  }}
                  unmountOnExit
                >
                  <Grid item lg={3} xs={12} sm={6} md={4}>
                    <ListedUniqCard
                      onClickBuy={() => selectUniq(uniq)}
                      onClickView={() =>
                        goToFactory(uniq.owningDetails.token_factory_id)
                      }
                      factoryManifested={uniq.factoryManifested}
                      listingDetails={uniq.listingDetails}
                      owningDetails={uniq.owningDetails}
                      currency={baseCurrency}
                      fiatPrice={calcTotalPrice({
                        balance: uniq.listingDetails.price,
                        basePrice: marketPrices?.USD || 0,
                      })}
                    />
                  </Grid>
                </Zoom>
              ))}
          </Grid>
          {isLoadingMore && !isFiltering && listedUniqs?.length ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : null}
          <BuyUniq
            open={isUniqSelected && isAuthenticated}
            uniq={selectedUniq}
            onClose={closeUniq}
          />
          <Login
            isOpen={isUniqSelected && !isAuthenticated}
            onClose={closeUniq}
            onSuccessLogin={() => {
              if (selectedUniq) {
                selectUniq(selectedUniq);
              }
            }}
            opener={<div />}
            withAccountModal={false}
          />
        </React.Fragment>
      </App>
    </>
  );
};

export default ListedView;
