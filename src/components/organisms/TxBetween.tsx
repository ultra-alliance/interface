import useBreakPoint from '@/hooks/useBreakpoint';
import { Divider, Paper, Stack, Typography } from '@mui/material';
import AccountAvatar from '../molecules/AccountAvatar';
import { QuestionMark } from '@mui/icons-material';

interface TxBetweenProps {
  from?: string;
  to?: string;
  toIcon?: React.ReactNode;
}

export const TxBetween = ({ from, to, toIcon }: TxBetweenProps) => {
  const { isSm } = useBreakPoint();
  return (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: '#28262c',
        borderColor: '1px solid #45424a',
        p: 2,
        alignItems: 'center',
        justifyContent: isSm ? '' : 'space-between',
        display: 'flex',
        flexDirection: isSm ? 'column' : 'row',
      }}
    >
      <AccountAvatar
        StackProps={{
          sx: {
            width: '100%',
            justifyContent: 'flex-start',
          },
        }}
        text={from}
        secondaryText="(You)"
      />

      <Divider
        sx={{
          my: isSm ? 2 : 0,
          height: isSm ? '100%' : '40px',
          width: isSm ? '100%' : '2px',
          bgcolor: 'divider',
        }}
        variant="middle"
        orientation={isSm ? 'horizontal' : 'vertical'}
      />
      <AccountAvatar
        text={to}
        AvatarProps={{
          children: toIcon || <QuestionMark />,
        }}
        StackProps={{
          sx: {
            width: '100%',
            justifyContent: 'flex-end',
          },
        }}
        isBoxEnd
        TypographyProps={{
          fontWeight: 'normal',
        }}
      />
    </Paper>
  );
};
