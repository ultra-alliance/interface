import {
  Alert,
  Avatar,
  Button,
  ButtonProps,
  Card,
  CardContent,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { CURRENCIES } from '@ultra-alliance/react-ultra';
import { calcTotalPrice, formatCurrencyValue } from '@ultra-alliance/ultra-sdk';

interface PayWithProps {
  balance?: number | string;
  price?: number | string;
  tickerSymbol?: string;
  onClickPurchase?: () => void;
  onClickBack?: () => void;
  disabledNext?: boolean;
  error?: boolean;
  FirstButtonProps?: ButtonProps;
  SecondaryButtonProps?: ButtonProps;
  title?: React.ReactNode;
  name?: string;
}

const PayWith = ({
  balance = 0,
  name,
  price = 0,
  tickerSymbol = CURRENCIES[1]?.symbol,
  onClickPurchase,
  onClickBack,
  disabledNext = false,
  error = true,
  FirstButtonProps = {
    children: 'Back',
  },
  SecondaryButtonProps = {
    children: 'Purchase',
  },
  title = 'Pay with',
}: PayWithProps) => {
  const theme = useTheme();
  const isEnoughBalance =
    parseFloat(String(balance).split(' ')[0]) >=
    parseFloat(String(price).split(' ')[0]);

  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: '#3C3846',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="subtitle1" fontWeight={'bold'} component={'div'}>
          {title}
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            bgcolor: '#3C3846',
            display: 'flex',
            flexDirection: 'column',

            p: 1,
          }}
        >
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    mr: 2,
                    width: 60,
                    height: 40,
                    bgcolor: 'primary.main',
                  }}
                >
                  {CURRENCIES[0]?.symbol}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'subtitle2',
                  sx: {
                    opacity: 0.5,
                  },
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle1',
                  fontWeight: 'bold',
                  sx: {
                    opacity: 1,
                    color: 'white',
                  },
                }}
                primary={
                  <>
                    Ultra Wallet
                    <span style={{ opacity: 0.6 }}> • {name}</span>
                  </>
                }
                secondary={
                  <>
                    My Wallet •{' '}
                    <span
                      style={{
                        color: theme.palette.primary.light,
                      }}
                    >
                      {formatCurrencyValue({
                        value: balance,
                        ticker: CURRENCIES[0]?.symbol,
                      })}
                    </span>
                    <span
                      style={{
                        opacity: 0.6,
                      }}
                    >
                      {' '}
                      (≈{' '}
                      {formatCurrencyValue({
                        value: calcTotalPrice({
                          balance: balance,
                          basePrice: price,
                        }),
                        ticker: tickerSymbol,
                      })}
                      )
                    </span>
                  </>
                }
              />
            </ListItem>
          </List>
        </Paper>
        <Alert
          severity="error"
          color="error"
          sx={{
            bgcolor: 'rgb(81 64 78)',
            color: 'rgb(251 147 128)',
            '& .MuiAlert-icon': {
              color: 'rgb(251 147 128)',
            },
            display: isEnoughBalance || !error ? 'none' : 'flex',
          }}
          action={
            <Button
              sx={{
                bgcolor: 'rgb(98 83 97)',
              }}
              color="inherit"
              size="small"
            >
              TOP-UP WALLET
            </Button>
          }
        >
          There is not enough UOS in your wallet to complete this transaction.
        </Alert>
        <Divider
          sx={{
            display: isEnoughBalance || !error ? 'none' : 'flex',
          }}
        />
        <Stack
          justifyContent={'space-between'}
          alignItems={'center'}
          direction={'row'}
        >
          <Button
            color="secondary"
            variant="contained"
            sx={{
              boxShadow: 'none',
              bgcolor: '#ffffff1a',
              px: 4,
            }}
            onClick={onClickBack}
            {...FirstButtonProps}
          />
          <Button
            color="primary"
            variant="contained"
            sx={{
              px: 4,
              boxShadow: 'none',
            }}
            onClick={onClickPurchase}
            disabled={disabledNext}
            {...SecondaryButtonProps}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PayWith;
