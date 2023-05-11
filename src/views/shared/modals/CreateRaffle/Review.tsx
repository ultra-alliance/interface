import InputUosPrice from '@/components/inputs/InputUosPrice';
import PageTitle from '@/components/molecules/PageTitle';
import PayWith from '@/components/organisms/PayWith';
import { TxBetween } from '@/components/organisms/TxBetween';
import UosArrow from '@/components/organisms/UosArrow';
import { Casino } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { CURRENCIES, useUltra } from '@ultra-alliance/react-ultra';
import { tUltra } from '@ultra-alliance/ultra-sdk';
import React from 'react';
import { toast } from 'react-toastify';

interface ReviewCreateRaffleProps {
  prev: () => void;
  next: () => void;
}

async function addAccountCodePermission(
  account: string,
  contract: string,
  ultra: tUltra,
) {
  if (!ultra) {
    throw new Error('Ultra SDK not available.');
  }

  // Fetch the account information
  const accountInfo = await ultra.account.refetchAccountData(account);
  console.log(accountInfo);
  if (!accountInfo) {
    throw new Error('Account not found.');
  }

  const authorization = {
    actor: contract,
    permission: 'active',
  };

  const updateAuthTransaction = {
    action: 'updateauth',
    data: {
      account: account,
      permission: 'active',
      parent: 'owner',
      auth: {
        threshold: 1,
        keys: accountInfo.data?.permissions[0].required_auth.keys, // Use the fetched public keys
        accounts: [
          {
            permission: {
              actor: contract,
              permission: 'eosio.code',
            },
            weight: 1,
          },
        ],
        waits: [],
      },
    },
    authorizations: [authorization],
    contract: 'eosio',
  };

  await ultra.account.signTransaction(updateAuthTransaction);
}

export default function ReviewCreateRaffle({
  prev,
  next,
}: ReviewCreateRaffleProps) {
  const { ultra } = useUltra();
  const [rewardAmount, setRewardAmount] = React.useState<number | undefined>(
    undefined,
  );

  const handleRewardAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRewardAmount(parseFloat(e.target.value));
  };

  const { account, marketPrices } = useUltra();

  const IS_ENOUGH_BALANCE = React.useMemo(() => {
    return (
      rewardAmount !== undefined &&
      rewardAmount <
        parseFloat(account?.data?.core_liquid_balance?.split(' ')[0] || '0.00')
    );
  }, [rewardAmount, account?.data?.core_liquid_balance]);

  const onCreateRaffle = async () => {
    try {
      // await addAccountCodePermission(
      //   account?.data?.account_name || '',
      //   'rfflcntract1',
      //   ultra as tUltra,
      // );

      const tx = await ultra?.account.extension.signTransaction({
        action: 'test',
        contract: 'rfflcntract1',
        data: {
          something: 'rfflcntract1',
        },
      });
      console.log(tx);
    } catch (err: any) {
      console.log(err);
      // toast.error(err?.message);
    }
    next ? next() : null;
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <PageTitle title="Creating" fadedTitle="new raffle" icon={<Casino />} />
      <Stack>
        <Typography variant="subtitle1" fontWeight={'bold'}>
          How much UOS do you want to put in the raffle?
        </Typography>

        <InputUosPrice
          value={rewardAmount}
          handleValueChange={handleRewardAmountChange}
          placeholder={`max ${account?.data?.core_liquid_balance}`}
          error={rewardAmount === undefined || !IS_ENOUGH_BALANCE}
          helperText={
            !IS_ENOUGH_BALANCE
              ? "You don't have enough balance"
              : 'This field is required'
          }
        />
      </Stack>
      <Stack>
        <Typography variant="subtitle1" fontWeight={'bold'}>
          Transaction between
        </Typography>
        <TxBetween
          from={account?.data?.account_name}
          to={'rfllcntract1'}
          toIcon={<Casino />}
        />
      </Stack>
      <Stack gap={1}>
        <Typography variant="subtitle1" fontWeight={'bold'}>
          {"You'll send"}
        </Typography>
        <UosArrow
          uosPrice={marketPrices?.USD}
          price={rewardAmount}
          tickerSymbol={CURRENCIES[1]?.symbol}
        />
      </Stack>

      <PayWith
        balance={account?.data?.core_liquid_balance}
        price={rewardAmount || 0}
        tickerSymbol={CURRENCIES[1]?.symbol}
        onClickBack={prev}
        onClickPurchase={onCreateRaffle}
        disabledNext={!IS_ENOUGH_BALANCE}
      />
    </Container>
  );
}
