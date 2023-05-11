export {};

declare global {
  interface Window {
    ultra: unknown;
  }
}

export type tParticipant = {
  id: number;
  raffle_id: number;
  viewer: string;
  participated_at: string;
};

export type tRaffle = {
  id: number;
  influencer: string;
  reward_amount: string;
  active: boolean;
  closed: boolean;
};

export type tWinner = {
  raffle_id: number;
  winner: string;
  won_at: string;
};

export type tPopulatedRaffle = tRaffle & {
  participants: tParticipant[];
  winners: tWinner[];
};
