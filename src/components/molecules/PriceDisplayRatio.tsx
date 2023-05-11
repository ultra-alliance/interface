import {
  formatCurrencyValue,
  calcTotalPrice,
  formatUosBalance,
  tValidInput,
} from '@ultra-alliance/ultra-sdk';
import { CURRENCIES, tCurrency } from '@ultra-alliance/react-ultra';
import { Skeleton, Typography, useTheme } from '@mui/material';

interface PriceDisplayRatioProps {
  coreLiquidityBalance?: tValidInput;
  baseCurrency?: tCurrency;
  uosPriceInBaseCurrency?: number;
}

PriceDisplayRatio.defaultProps = {
  coreLiquidityBalance: undefined,
  baseCurrency: CURRENCIES[0],
  uosPriceInBaseCurrency: undefined,
};

export default function PriceDisplayRatio({
  coreLiquidityBalance,
  baseCurrency,
  uosPriceInBaseCurrency,
}: PriceDisplayRatioProps) {
  const theme = useTheme();

  return (
    <Typography variant="subtitle1" fontWeight="bold" textAlign={'center'}>
      {!coreLiquidityBalance || !baseCurrency || !uosPriceInBaseCurrency ? (
        <Skeleton
          variant="text"
          sx={{
            width: '100px',
            height: '40px',
          }}
        />
      ) : (
        <>
          <span style={{ color: theme.palette.primary.light }}> ᕫ </span>
          {formatCurrencyValue({
            value: coreLiquidityBalance,
          })}
          <br />
          <span
            style={{
              display: baseCurrency?.ticker === 'UOS' ? 'none' : '',
              color: 'white',
              opacity: 0.8,
              fontWeight: 200,
              fontSize: 14,
            }}
          >
            ≈{' '}
            {formatCurrencyValue({
              value: calcTotalPrice({
                basePrice: uosPriceInBaseCurrency,
                balance: coreLiquidityBalance,
              }),
              ticker: baseCurrency?.symbol,
            })}
          </span>
        </>
      )}
    </Typography>
  );
}
