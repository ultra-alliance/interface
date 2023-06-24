import { tParticipant, tPopulatedRaffle, tRaffle, tWinner } from '@/types';
import BaseService from './BaseService';
import { tUltra, tQueryConfig, tValidInput } from '@ultra-alliance/ultra-sdk';

class RaffleService extends BaseService {
  constructor(ultra: tUltra | undefined) {
    super(ultra, 'rfflecntract');
  }

  async getRaffles(config?: tQueryConfig): Promise<tRaffle[]> {
    try {
      const raffles = await this.getTable<tRaffle>('raffles', config);
      return raffles?.rows ?? [];
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async getParticipants(config?: tQueryConfig): Promise<tParticipant[]> {
    const participants = await this.getTable<tParticipant>(
      'participants',
      config,
    );
    return participants?.rows ?? [];
  }

  async getWinners(config?: tQueryConfig): Promise<tWinner[]> {
    const winners = await this.getTable<tWinner>('winners', config);
    return winners?.rows ?? [];
  }

  async getRaffleById(raffleId: tValidInput) {
    const raffleData = await this.getRaffles({
      lowerBound: parseInt(raffleId as string),
      limit: 1,
    });
    return raffleData[0];
  }

  async getRaffleWinners(raffleId: tValidInput) {
    const id = parseInt(raffleId as string);
    const winnerData = await this.getWinners({
      index_position: '1',
      key_type: 'i64',
      lowerBound: id,
      upperBound: id,
    });
    return winnerData;
  }

  async getRaffleParticipants(raffleId: tValidInput) {
    const id = parseInt(raffleId as string);
    const participantData = await this.getParticipants({
      index_position: '3',
      key_type: 'i64',
      lowerBound: id,
      upperBound: id,
    });
    return participantData;
  }

  async getPopulatedRaffle(raffleId: tValidInput): Promise<tPopulatedRaffle> {
    const raffleData = await this.getRaffleById(raffleId);

    return {
      winners: await this.getRaffleWinners(raffleId),
      participants: await this.getRaffleParticipants(raffleId),
      ...raffleData,
    };
  }

  async getRafflesByInfluencer(influencer: string) {
    const raffles = await this.getRaffles({
      index_position: '2',
      key_type: 'name',
      lowerBound: influencer,
      upperBound: influencer,
    });
    return raffles;
  }

  async getAccountParticipations(account: string) {
    const participations = await this.getParticipants({
      index_position: '4',
      key_type: 'name',
      lowerBound: account,
      upperBound: account,
    });
    return participations;
  }

  async getAccountWins(account: string) {
    const wins = await this.getWinners({
      index_position: '2',
      key_type: 'name',
      lowerBound: account,
      upperBound: account,
    });
    return wins;
  }
}

export default RaffleService;
