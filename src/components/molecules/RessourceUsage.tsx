import { LinearProgress, Stack, Typography } from '@mui/material';
import { formatComputeUnit } from '@ultra-alliance/ultra-sdk';

interface RessourceUsageProps {
  max?: number;
  maxFormatted?: string;
  usageFormatted?: string;
  usage?: number;
  title?: string;
}
export default function RessourceUsage({
  max,
  usage,
  title,
}: RessourceUsageProps) {
  const percentage = ((usage || 0) * 100) / (max || 1);

  return (
    <>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant={'subtitle1'}>{title}</Typography>
        <Typography variant={'body1'} fontWeight={'bold'}>
          {max !== -1 ? (
            <> {formatComputeUnit((max || 0) - (usage || 0))}</>
          ) : (
            <>∞</>
          )}
        </Typography>
      </Stack>
      <Stack
        width={'100%'}
        display={max !== -1 ? 'flex' : 'none'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant={'body2'} color={'text.secondary'}>
          {max !== -1 ? (
            <>
              <span style={{ fontWeight: 'bold' }}>
                {formatComputeUnit(usage || 0)}
              </span>{' '}
              used /{' '}
              <span style={{ fontWeight: 'bold' }}>
                {formatComputeUnit(max || 0)}
              </span>
            </>
          ) : (
            '∞ used / ∞'
          )}
        </Typography>
        <Stack width={'50%'} direction={'row'} gap={2} alignItems={'center'}>
          <LinearProgress
            variant={'determinate'}
            value={max !== -1 ? ((usage || 0) * 100) / (max || 1) : 0}
            sx={{
              width: '100%',
            }}
          />
          <Typography variant={'body2'} color={'text.secondary'}>
            {percentage.toFixed(0)}%
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
