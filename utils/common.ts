import { cards } from "@cards/components/teen-patti/components/constants";
import { ICard } from "@cards/components/teen-patti/components/types";

const deck = cards.suits.flatMap((suit) =>
  cards.ranks.map((rank) => ({ suit, rank }))
);

export const getRandomCards = (count: number): ICard[] => {
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getRandomCardsFromDeck = (
  selectedDeck: ICard[],
  count: number
): {
  cards: ICard[];
  remainingDeck: ICard[];
} => {
  const shuffled = [...selectedDeck].sort(() => Math.random() - 0.5);
  return {
    cards: shuffled.slice(0, count),
    remainingDeck: shuffled.slice(count, selectedDeck.length),
  };
};
