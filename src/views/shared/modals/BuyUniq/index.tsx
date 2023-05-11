import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Receipt, RemoveRedEye } from '@mui/icons-material';
import { AppBar, Container, Stack, Toolbar, useTheme } from '@mui/material';
import { CURRENCIES, useUltra } from '@ultra-alliance/react-ultra';
import Modal from '@/components/modals/Modal';
import { tListedUniqCard } from '@/hooks/useListedUniqs';
import usePagination from '@/hooks/usePagination';
import Stepper from '@/components/molecules/Stepper';
import CloseButton from '@/components/atoms/CloseButton';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import useBreakPoint from '@/hooks/useBreakpoint';
import AccountAvatar from '@/components/molecules/AccountAvatar';
import PageTitle from '@/components/molecules/PageTitle';
import { Arrow, UniqCreator } from '@/components/atoms';
import { calcTotalPrice, formatCurrencyValue } from '@ultra-alliance/ultra-sdk';
import UniqChip from '@/components/atoms/UniqChip';
import PayWith from '@/components/organisms/PayWith';
import UniqArrow from '@/components/organisms/UniqArrow';
import UosArrow from '@/components/organisms/UosArrow';
import { TxBetween } from '@/components/organisms/TxBetween';
import { toast } from 'react-toastify';
import { PROMOTER_WALLET_MAINNET } from '@/constants/wallets';

type BuyUniqProps = {
  open: boolean;
  uniq?: tListedUniqCard | undefined;
  onClose?: () => void;
};

const steps = [
  { label: 'Review', icon: <RemoveRedEye /> },
  { label: 'Receipt', icon: <Receipt /> },
];

let window: Window;

export default function BuyUniq({ open, uniq, onClose }: BuyUniqProps) {
  const { isSm } = useBreakPoint();
  const theme = useTheme();
  const {
    ultra,
    login,
    isAuthenticated,
    isWalletInstalled,
    account,
    marketPrices,
    refreshAccount,
  } = useUltra();
  const { currentPage, next, prev } = usePagination({
    startingPage: 0,
  });

  const flatPrice = calcTotalPrice({
    balance: uniq?.listingDetails.price || 0,
    basePrice: marketPrices?.USD || 0,
  });

  const onClickPurchase = async () => {
    if (!uniq || !account?.data) return;
    ultra?.account
      .buyUniq({
        token_id: uniq.listingDetails.token_id,
        receiver: account.data.account_name,
        max_price: uniq.listingDetails.price,
        memo: 'Buying Uniq on UTA Marketplace',
        promoter_id: PROMOTER_WALLET_MAINNET,
      })
      .then(res => {
        if (onClose) onClose();
        toast.success("You've successfully bought Uniq.");
        refreshAccount().catch(err => {
          console.log(err);
        });
      })
      .catch(err => {
        toast.error("Couldn't buy Uniq. Please try again.");
      });
  };

  return (
    <React.Fragment>
      <Modal
        fullWidth={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={onClose}
        sx={{
          overflow: 'scroll',
        }}
        header={
          <AppBar
            position="fixed"
            elevation={1}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: 'none',
              borderBottom: '1px solid',
              px: 2,
              py: 2,
              borderColor: 'divider',
              bgcolor: '#3C3846',
            }}
          >
            <Container>
              <Toolbar
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Stepper steps={steps} activeStep={currentPage} />
              </Toolbar>
            </Container>
            <CloseButton onClick={onClose} />
          </AppBar>
        }
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <PageTitle
            title="Purchase on"
            fadedTitle="Uniq Marketplace"
            icon={<CurrencyExchangeIcon />}
          />
          <Stack>
            <Typography variant="subtitle1" fontWeight={'bold'}>
              Transaction between
            </Typography>
            <TxBetween
              from={account?.data?.account_name}
              to={uniq?.listingDetails.owner}
            />
          </Stack>
          <Stack gap={1}>
            <Typography variant="subtitle1" fontWeight={'bold'}>
              {"You'll send"}
            </Typography>
            <UosArrow
              uosPrice={marketPrices?.USD}
              price={uniq?.listingDetails?.price}
              tickerSymbol={CURRENCIES[1]?.symbol}
            />
          </Stack>
          <Stack gap={1}>
            <Typography variant="subtitle1" fontWeight={'bold'}>
              {"You'll receive"}
            </Typography>
            <UniqArrow factoryManifested={uniq?.factoryManifested} />
          </Stack>
          <PayWith
            balance={account?.data?.core_liquid_balance}
            price={uniq?.listingDetails?.price}
            tickerSymbol={CURRENCIES[1]?.symbol}
            onClickBack={onClose}
            onClickPurchase={onClickPurchase}
            disabledNext={
              parseFloat(account?.data?.core_liquid_balance || '0') <
              parseFloat(uniq?.listingDetails?.price || '0')
            }
          />
        </Container>
      </Modal>
    </React.Fragment>
  );
}
