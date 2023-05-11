import PageTitle from '@/components/molecules/PageTitle';
import PayWith from '@/components/organisms/PayWith';
import { TxBetween } from '@/components/organisms/TxBetween';
import UosArrow from '@/components/organisms/UosArrow';
import { Casino } from '@mui/icons-material';
import { Container, Stack, TextField, Typography } from '@mui/material';
import { CURRENCIES, useUltra } from '@ultra-alliance/react-ultra';

interface ConfigRaffleProps {
  prev: () => void;
  next: () => void;
}

export default function ConfigRAffle({ prev }: ConfigRaffleProps) {
  const { account, marketPrices } = useUltra();
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <PageTitle
        title="Configurating"
        fadedTitle="new raffle"
        icon={<Casino />}
      />
      <Stack>
        <Typography variant="subtitle1" fontWeight={'bold'}>
          How much should the winner receive?
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography variant="subtitle1" fontWeight={'bold'}>
          {"You'll send"}
        </Typography>
        <UosArrow
          uosPrice={marketPrices?.USD}
          price={'11231'}
          tickerSymbol={CURRENCIES[1]?.symbol}
        />
      </Stack>

      <PayWith
        balance={account?.data?.core_liquid_balance}
        price={'100'}
        tickerSymbol={CURRENCIES[1]?.symbol}
        onClickBack={prev}
        onClickPurchase={() => {}}
      />
    </Container>
  );
}
