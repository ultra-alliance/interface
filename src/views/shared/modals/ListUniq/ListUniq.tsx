import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Receipt, RemoveRedEye } from '@mui/icons-material';
import { Avatar, Divider, Grid, Stack, Tooltip } from '@mui/material';
import { CURRENCIES, useUltra } from '@ultra-alliance/react-ultra';
import usePagination from '@/hooks/usePagination';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { calcTotalPrice } from '@ultra-alliance/ultra-sdk';
import PayWith from '@/components/organisms/PayWith';
import UniqArrow from '@/components/organisms/UniqArrow';
import UosArrow from '@/components/organisms/UosArrow';
import { TxBetween } from '@/components/organisms/TxBetween';
import { toast } from 'react-toastify';
import { tUniqsDetail } from '@/views/AccountView/Inventory/UniqsInInventory';
import { TransactionModal } from '@/components/templates';
import InputUosPrice from '@/components/inputs/InputUosPrice';
import AdverstiserCommissionSlider from '@/components/molecules/AdvertiserCommisionSlider';
import OwnedUniqCard from '@/components/molecules/OwnedUniqCard';
import Specifications from '@/views/FactoryView/Overview/Specification';
import Information from '@/views/FactoryView/Overview/Information';

type ListUniqProps = {
  open: boolean;
  uniq?: tUniqsDetail | undefined;
  onClose?: () => void;
  onSuccessList?: () => void;
};

const steps = [
  { label: 'Review', icon: <RemoveRedEye /> },
  { label: 'Receipt', icon: <Receipt /> },
];

let window: Window;

export default function ListUniq({
  open,
  uniq,
  onClose,
  onSuccessList,
}: ListUniqProps) {
  const { ultra, account, marketPrices, refreshAccount } = useUltra();

  const [price, setPrice] = React.useState<number | undefined>(undefined);
  const [commission, setCommission] = React.useState<number>(2.5);

  const handleChangeCommission = (event: any, newValue: number | number[]) => {
    setCommission(newValue as number);
  };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.valueAsNumber);
  };

  const { currentPage, next, prev } = usePagination({
    startingPage: 0,
  });

  const flatPrice = calcTotalPrice({
    balance: price || 0,
    basePrice: marketPrices?.USD || 0,
  }).toFixed(2);

  const onClickList = async () => {
    if (!uniq || !account?.data || !price) return;
    ultra?.account
      .resellUniq({
        token_id: uniq.uniq.id,
        price: price.toString(),
        promoter_basis_point: commission * 100,
        memo: 'Reselling Uniq on UTA Marketplace',
      })
      .then(() => {
        if (onClose) onClose();
        toast.success("You've successfully listed your Uniq.");
        refreshAccount().catch(err => {
          console.error(err);
        });
        if (onSuccessList) onSuccessList();
      })
      .catch(() => {
        toast.error("Couldn't resell Uniq. Please try again.");
      });
  };

  return (
    <TransactionModal
      activeStep={currentPage}
      isVisible={open}
      onCloseModal={() => (onClose ? onClose() : null)}
      withReceipt={{
        PageTitleProps: {
          title: 'Listing Uniq',
          fadedTitle: '#' + uniq?.uniq.id,
          icon: <CurrencyExchangeIcon />,
        },
        ButtonProps: {
          onClick: onClose,
          children: 'Close',
        },
        primary: "Awesome job! You've successfully listed your Uniq.",
      }}
      steps={[
        {
          label: 'Resale',
          icon: <CurrencyExchangeIcon />,
          PageTitleProps: {
            title: 'Resale on',
            fadedTitle: 'Uniq Marketplace',
            icon: <CurrencyExchangeIcon />,
          },
          content: (
            <React.Fragment>
              <Grid container spacing={4} columnSpacing={4} rowSpacing={4}>
                <Grid item xs={12} md={6} sm={12} lg={6}>
                  <Specifications
                    uniqData={uniq?.manifested}
                    isInfinityMint={false}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={12} lg={6}>
                  <Information uniqData={uniq?.manifested} />
                </Grid>
              </Grid>
              <Grid container spacing={4} columnSpacing={4} rowSpacing={4}>
                <Grid item xs={12} md={4} sm={12} lg={4}>
                  {uniq && (
                    <OwnedUniqCard
                      manifest={uniq.manifested.manifest}
                      uniq={uniq.manifested.data}
                      ownedUniq={uniq.uniq}
                      hoverable={false}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={8} sm={12} lg={8}>
                  <Stack>
                    <Typography variant="subtitle1" fontWeight={'bold'} mb={2}>
                      Listing Price (in UOS):
                    </Typography>
                    <InputUosPrice
                      value={price}
                      handleValueChange={handleChangePrice}
                      placeholder="Enter price in UOS"
                      error={price !== 0 && (price || 0) < 0.00000001}
                      helperText={
                        price !== 0 && (price || 0) < 0.00000001
                          ? `Price must be greater than ${
                              uniq?.manifested.data.minimum_resell_price ??
                              0.00000001 + ' UOS'
                            } `
                          : '(≈ ' + flatPrice + ' $)'
                      }
                    />
                  </Stack>
                  <Divider sx={{ my: 2 }} />
                  <Stack>
                    <Tooltip title="The token resale advertiser commission.">
                      <Typography variant="subtitle1" fontWeight={'bold'}>
                        Resale promoter comission
                      </Typography>
                    </Tooltip>
                    <AdverstiserCommissionSlider
                      value={commission}
                      handleChange={handleChangeCommission}
                    />
                  </Stack>
                </Grid>
              </Grid>
              <Stack>
                <Button
                  variant="contained"
                  disabled={price !== 0 && (price || 0) < 0.0001}
                  onClick={next}
                >
                  Continue
                </Button>
              </Stack>
            </React.Fragment>
          ),
        },
        {
          label: 'Review',
          icon: <RemoveRedEye />,
          PageTitleProps: {
            title: 'Review',
            fadedTitle: 'your listing',
            icon: <RemoveRedEye />,
          },
          content: (
            <React.Fragment>
              <Stack>
                <Typography variant="subtitle1" fontWeight={'bold'}>
                  Transaction between
                </Typography>
                <TxBetween
                  from={account?.data?.account_name}
                  to={'Ultra Marketplace'}
                  toIcon={
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                      }}
                    >
                      {CURRENCIES[0]?.symbol}
                    </Avatar>
                  }
                />
              </Stack>
              <Stack gap={1}>
                <Typography variant="subtitle1" fontWeight={'bold'}>
                  {"You'll resale"}
                </Typography>
                <UniqArrow
                  direction="right"
                  factoryManifested={uniq?.manifested}
                />
              </Stack>
              <Stack gap={1}>
                <Typography variant="subtitle1" fontWeight={'bold'}>
                  {"If sold, you'll receive"}
                </Typography>
                {price && (
                  <UosArrow
                    uosPrice={marketPrices?.USD}
                    price={price - (price * commission) / 100}
                    tickerSymbol={CURRENCIES[1]?.symbol}
                    direction="left"
                  />
                )}
              </Stack>
              <PayWith
                balance={account?.data?.core_liquid_balance}
                price={price}
                tickerSymbol={CURRENCIES[1]?.symbol}
                onClickBack={prev}
                onClickPurchase={onClickList}
                error={false}
                SecondaryButtonProps={{
                  children: 'List Uniq',
                }}
                title="List with"
                name={account?.data?.account_name}
              />
            </React.Fragment>
          ),
        },
      ]}
    />
  );
}
