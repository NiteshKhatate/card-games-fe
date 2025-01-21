import { cards } from "@cards/components/teen-patti/components/constants";
import { ICard } from "@cards/components/teen-patti/components/types";

const deck = cards.suits.flatMap((suit) =>
  cards.ranks.map((rank) => ({ suit, rank }))
);

export const getRandomCards = (count: number): ICard[] => {
  const shuffled = [...deck].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
