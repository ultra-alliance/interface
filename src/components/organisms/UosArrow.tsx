import { Stack, Typography } from '@mui/material';
import { Arrow } from '../atoms';
import { calcTotalPrice, formatCurrencyValue } from '@ultra-alliance/ultra-sdk';
import { CURRENCIES } from '@ultra-alliance/react-ultra';

interface UosArrowProps {
  price?: number | string;
  tickerSymbol?: string;
  uosPrice?: number;
  direction?: 'left' | 'right';
}

const UosArrow = ({
  price = 0,
  uosPrice = 0,
  tickerSymbol = CURRENCIES[1]?.symbol,
  direction = 'right',
}: UosArrowProps) => {
  return (
    <Arrow
      type="primary"
      sx={{
        justifyContent: direction === 'left' ? 'flex-start' : 'flex-end',
      }}
      direction={direction}
    >
      <Stack>
        <Typography variant="subtitle1" fontWeight={'bold'} textAlign={'right'}>
          {formatCurrencyValue({
            value: price,
            ticker: CURRENCIES[0]?.symbol,
          })}
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={'bold'}
          sx={{ opacity: 0.7 }}
          textAlign={'right'}
        >
          ≈{' '}
          {formatCurrencyValue({
            value: calcTotalPrice({
              balance: price,
              basePrice: uosPrice,
            }),
            ticker: tickerSymbol,
          })}
        </Typography>
      </Stack>
    </Arrow>
  );
};

export default UosArrow;
