export interface CardsProp {
  suits: string[];
  ranks: string[];
}

export type ICard = {
  suit: string;
  rank: string;
};

export interface Player {
  id: string;
  name: string;
  isBot: boolean;
  hand: ICard[];
  isActive: boolean;
  betAmount: number;
}
