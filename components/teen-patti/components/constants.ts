import { CardsProp, Player } from "./types";

export const cards: CardsProp = {
  suits: ["spades", "hearts", "clubs", "diamonds"],
  ranks: [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
  ],
};

export const players: Player[] = [
  {
    id: "Player_one",
    name: "Player One",
    isBot: false,
    hand: [],
    isActive: true,
    betAmount: 1000,
  },
  {
    id: "Player_two",
    name: "Player Two",
    isBot: true,
    hand: [],
    isActive: true,
    betAmount: 1000,
  },
  {
    id: "Player_three",
    name: "Player Three",
    isBot: true,
    hand: [],
    isActive: true,
    betAmount: 1000,
  },
  {
    id: "Player_four",
    name: "Player Four",
    isBot: false,
    hand: [],
    isActive: true,
    betAmount: 1000,
  },
];
