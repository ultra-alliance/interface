import { Verified } from '@mui/icons-material';
import { Grow, Skeleton, Stack, Typography } from '@mui/material';
import { isUltraAccount } from '@ultra-alliance/ultra-sdk';

export default function UniqCreator({
  name,
  prefix = 'BY',
  bold = true,
  visible = true,
  fullWidth = true,
}: {
  name?: string;
  prefix?: string;
  visible?: boolean;
  bold?: boolean;
  fullWidth?: boolean;
}): JSX.Element {
  return (
    <Grow in={visible}>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems={'center'}
        width={fullWidth ? '100%' : 'fit-content'}
      >
        <Typography
          sx={{
            color: 'white',
          }}
          component={'div'}
          textAlign="center"
          fontWeight={bold ? 'bold' : 'normal'}
          variant="overline"
        >
          {!name ? (
            <Skeleton width={'100%'} />
          ) : (
            <>
              <span style={{ fontWeight: 'normal' }}>{prefix}</span>{' '}
              {isUltraAccount(name) ? 'Ultra' : name}
            </>
          )}{' '}
        </Typography>
        <Verified
          sx={{
            display: isUltraAccount(name) ? 'block' : 'none',
            ml: -0.5,
            color: 'primary.light',
            fontSize: '0.8rem',
          }}
          fontSize="small"
        />
      </Stack>
    </Grow>
  );
}
