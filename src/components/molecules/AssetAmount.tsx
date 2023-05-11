import { Typography, Avatar, Box } from '@mui/material';
import { formatNumeralAbreviation } from '@ultra-alliance/ultra-sdk';

interface AssetAmountProps {
  amount?: number | string;
  srcSet?: string;
  text?: string;
}

const AssetAmount = ({
  amount = 0,
  srcSet = '/uniq-icon.svg',
}: AssetAmountProps) => (
  <Box display={'flex'} gap={1} alignItems={'center'}>
    <Typography>
      x{' '}
      <span style={{ fontWeight: 'bold' }}>
        {formatNumeralAbreviation(parseFloat(amount as string))}
      </span>
    </Typography>
    <Avatar
      sx={{
        bgcolor: 'grey.600',
        border: '1px solid ',
        borderColor: 'divider',
        width: 30,
        height: 30,
        fontWeight: 900,
      }}
      imgProps={{
        sx: {
          width: 20,
          height: 20,
        },
      }}
      srcSet={srcSet}
    />
  </Box>
);

export default AssetAmount;
