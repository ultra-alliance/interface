import { tUltra, tFactoryManifested } from '@ultra-alliance/ultra-sdk';
import { tRaffle, tParticipant, tWinner } from '@/types';
import RaffleService from './contract-helpers/RaffleService';

type tRaffleData = {
  raffles?: tRaffle[];
  participants?: tParticipant[];
  winners?: tWinner[];
  avatar?: tFactoryManifested;
};

const fetchRafflesData = async (
  raffleService: RaffleService,
  accountID: string,
) => {
  let data: tRaffleData = {};
  try {
    data.raffles =
      (await raffleService.getRafflesByInfluencer(accountID as string)) || [];
    data.participants =
      (await raffleService.getAccountParticipations(accountID as string)) || [];
    data.winners =
      (await raffleService.getAccountWins(accountID as string)) || [];
  } catch (e) {
    console.error(e);
  }

  return data;
};

const queryRaffles = async (ultra: tUltra | undefined, accountID: string) => {
  const raffleService = new RaffleService(ultra);
  return await fetchRafflesData(raffleService, accountID);
};

export { type tRaffleData, queryRaffles };
