import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  AccountBoxRounded,
  CloseRounded,
  QuestionMark,
  Receipt,
  RemoveRedEye,
  Send,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  useTheme,
} from '@mui/material';
import { CURRENCIES, useUltra } from '@ultra-alliance/react-ultra';
import Modal from '@/components/modals/Modal';
import usePagination from '@/hooks/usePagination';
import useBreakPoint from '@/hooks/useBreakpoint';
import PayWith from '@/components/organisms/PayWith';
import UniqArrow from '@/components/organisms/UniqArrow';
import { TxBetween } from '@/components/organisms/TxBetween';
import { toast } from 'react-toastify';
import { tUniqsDetail } from '@/views/AccountView/Inventory/UniqsInInventory';
import { TransactionModal } from '@/components/templates';
import OwnedUniqCard from '@/components/molecules/OwnedUniqCard';
import Specifications from '@/views/FactoryView/Overview/Specification';
import Information from '@/views/FactoryView/Overview/Information';
import { isAccountName } from '@ultra-alliance/ultra-sdk';

type TransferUniqProps = {
  open: boolean;
  uniq?: tUniqsDetail | undefined;
  onClose?: () => void;
  onSuccessTransfer?: () => void;
};

const steps = [
  { label: 'Review', icon: <RemoveRedEye /> },
  { label: 'Receipt', icon: <Receipt /> },
];

let window: Window;

export default function TransferUniq({
  open,
  uniq,
  onClose,
  onSuccessTransfer,
}: TransferUniqProps) {
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

  const [to, setTo] = React.useState<string | undefined>(undefined);
  const [memo, setMemo] = React.useState<string | undefined>(undefined);

  const handleChangeMemo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(event.target.value);
  };
  const handleChangeTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value);
  };

  const { currentPage, next, prev } = usePagination({
    startingPage: 0,
  });

  const onClickTransfer = async () => {
    if (!uniq || !account?.data || !to) return;
    ultra?.account
      .transferUniq({
        token_ids: [uniq.uniq.id],
        to: to,
        memo: memo,
      })
      .then(res => {
        if (onClose) onClose();
        toast.success("You've successfully transfered your Uniq.");
        refreshAccount().catch(err => {
          console.log(err);
        });
        if (onSuccessTransfer) onSuccessTransfer();
      })
      .catch(err => {
        toast.error("Couldn't transfer Uniq. Please try again.");
      });
  };

  return (
    <TransactionModal
      activeStep={currentPage}
      isVisible={open}
      onCloseModal={() => (onClose ? onClose() : null)}
      steps={[
        {
          label: 'Transfer',
          icon: <Send />,
          PageTitleProps: {
            title: 'Transfer',
            fadedTitle: 'Uniq #' + uniq?.uniq.id,
            icon: <Send />,
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
                    <Typography variant="subtitle1" fontWeight={'bold'} mb={1}>
                      Transfer to
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Avatar
                        sx={{
                          mr: 1,
                          my: 1,
                          width: 36,
                          height: 36,
                        }}
                      />
                      <TextField
                        fullWidth
                        id="input-with-sx"
                        variant="outlined"
                        size="small"
                        type="text"
                        value={to}
                        onChange={handleChangeTo}
                        placeholder={'Account name'}
                        sx={{
                          mt: 1,
                        }}
                        inputProps={{
                          sx: {
                            bgcolor: 'background.paper',
                            borderColor: '1px solid #ffffff9a',
                          },
                        }}
                        error={to === undefined || !isAccountName(to)}
                        helperText={
                          (to === undefined || !isAccountName(to)) &&
                          'Incorrect account name'
                        }
                        required={true}
                      />
                    </Box>
                  </Stack>
                  <Divider sx={{ my: 2 }} />
                  <Stack>
                    <Typography variant="subtitle1" fontWeight={'bold'} mb={1}>
                      Memo (optional)
                    </Typography>
                    <TextField
                      fullWidth
                      id="input-with-sx"
                      variant="outlined"
                      size="small"
                      type="string"
                      value={memo}
                      onChange={handleChangeMemo}
                      placeholder={'Happy Uniqs for you!'}
                      sx={{
                        mt: 1,
                      }}
                      inputProps={{
                        sx: {
                          bgcolor: 'background.paper',
                          borderColor: '1px solid #ffffff9a',
                        },
                      }}
                      required={false}
                    />
                  </Stack>
                </Grid>
              </Grid>
              <Stack>
                <Button
                  variant="contained"
                  disabled={to === undefined || !isAccountName(to)}
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
            fadedTitle: 'your transfer',
            icon: <RemoveRedEye />,
          },
          content: (
            <React.Fragment>
              <Stack>
                <Typography variant="subtitle1" fontWeight={'bold'}>
                  Transaction between
                </Typography>
                <TxBetween from={account?.data?.account_name} to={to} />
              </Stack>
              <Stack gap={1}>
                <Typography variant="subtitle1" fontWeight={'bold'}>
                  {"You'll transfer"}
                </Typography>
                <UniqArrow
                  direction="right"
                  factoryManifested={uniq?.manifested}
                />
              </Stack>
              <PayWith
                balance={account?.data?.core_liquid_balance}
                tickerSymbol={CURRENCIES[1]?.symbol}
                onClickBack={prev}
                onClickPurchase={() => onClickTransfer()}
                error={false}
                SecondaryButtonProps={{
                  children: 'Transfer',
                }}
                title="Transfer Uniq"
                name={account?.data?.account_name}
              />
            </React.Fragment>
          ),
        },
      ]}
    />
  );
}
