import { useEffect, useState } from "react";
import { Card } from "@cards-common-components/Card/Card";
import { getRandomCardsFromDeck } from "@cards/utils/common";
import { ICard, Player } from "./components/types";
import { cards } from "./components/constants";

enum PLAYING_PLAYERS {
  "PLAYER_ONE",
  "PLAYER_TWO",
  "PLAYER_THREE",
  "PLAYER_FOUR",
}

interface HandsProps {
  player: Player;
  playerType: PLAYING_PLAYERS;
}

const deck = cards.suits.flatMap((suit) =>
  cards.ranks.map((rank) => ({ suit, rank }))
);

const handColOrientation = [
  PLAYING_PLAYERS.PLAYER_TWO,
  PLAYING_PLAYERS.PLAYER_FOUR,
];

const cardsRotation: Record<PLAYING_PLAYERS, string> = {
  [PLAYING_PLAYERS.PLAYER_ONE]: "rotate-0",
  [PLAYING_PLAYERS.PLAYER_TWO]: "rotate-90",
  [PLAYING_PLAYERS.PLAYER_THREE]: "rotate-180",
  [PLAYING_PLAYERS.PLAYER_FOUR]: "-rotate-90",
};

export const Hands: React.FC<HandsProps> = ({ player, playerType }) => {
  const [showCards, setShowCards] = useState<boolean>(false);
  const sortedCards = [...player.hand].sort((a, b) => {
    // Sort based on the index of the rank in the cards.ranks array
    return cards.ranks.indexOf(a.rank) - cards.ranks.indexOf(b.rank);
  });

  return (
    <div
      className={`flex ${
        handColOrientation.includes(playerType) && "flex-col"
      } gap-4 items-center justify-center`}
    >
      {sortedCards.map((card, index) => (
        <div
          key={`${player}-card-${index}`}
          className={`h-[100px] w-[70px] ${cardsRotation[playerType]}`}
        >
          <Card suit={card.suit} rank={card.rank} show={showCards} />
        </div>
      ))}
      <div>
        <button onClick={() => setShowCards(!showCards)}>
          {showCards ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

const TeenPattiPage: React.FC = () => {
  const [cardsDeck, setCardsDeck] = useState<ICard[]>(deck);
  const [players, setPlayers] = useState<Player[]>([
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
      isBot: true,
      hand: [],
      isActive: true,
      betAmount: 1000,
    },
  ]);

  useEffect(() => {
    if (cardsDeck.length === deck.length) {
      const newPlayers = [...players];
      let remainingDeck = cardsDeck;
      // Deal 3 cards to each player
      newPlayers.forEach((player) => {
        const dealt = getRandomCardsFromDeck(remainingDeck, 3);
        player.hand = dealt.cards;
        remainingDeck = dealt.remainingDeck;
      });

      setPlayers(newPlayers);

      setCardsDeck(remainingDeck);
    }
  }, [cardsDeck, players]);

  return (
    <div className="p-4">
      <h2 className="text-center">Teen Patti</h2>
      <div>
        <div className="w-full flex items-stretch justify-center gap-4">
          <div className="w-1/4"></div>
          <div className="w-1/2 border border-deep-blue p-2 rounded">
            <Hands
              player={players[2]}
              playerType={PLAYING_PLAYERS.PLAYER_THREE}
            />
          </div>
          <div className="w-1/4"></div>
        </div>
        <div className="flex items-stretch justify-center gap-4">
          <div className="w-1/4 border border-deep-blue p-2 rounded">
            <Hands
              player={players[1]}
              playerType={PLAYING_PLAYERS.PLAYER_TWO}
            />
          </div>
          <div className="w-1/2"></div>
          <div className="w-1/4 border border-deep-blue p-2 rounded">
            <Hands
              player={players[3]}
              playerType={PLAYING_PLAYERS.PLAYER_FOUR}
            />
          </div>
        </div>
        <div className="w-full flex items-stretch justify-center gap-4">
          <div className="w-1/4"></div>
          <div className="w-1/2 border border-deep-blue p-2 rounded">
            <Hands
              player={players[0]}
              playerType={PLAYING_PLAYERS.PLAYER_ONE}
            />
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiPage;
