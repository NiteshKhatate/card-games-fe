import { useEffect, useState } from "react";
import { Card } from "@cards-common-components/Card/Card";
import { getRandomCardsFromDeck } from "@cards/utils/common";
import { ICard } from "./components/types";
import { cards } from "./components/constants";

enum PLAYING_PLAYERS {
  "PLAYER_ONE",
  "PLAYER_TWO",
  "PLAYER_THREE",
  "PLAYER_FOUR",
}

interface HandsProps {
  cards: ICard[];
  player: PLAYING_PLAYERS;
}

const deck = cards.suits.flatMap((suit) =>
  cards.ranks.map((rank) => ({ suit, rank }))
);

const cardsRotation: Record<PLAYING_PLAYERS, string> = {
  [PLAYING_PLAYERS.PLAYER_ONE]: "rotate-0",
  [PLAYING_PLAYERS.PLAYER_TWO]: "rotate-90",
  [PLAYING_PLAYERS.PLAYER_THREE]: "rotate-180",
  [PLAYING_PLAYERS.PLAYER_FOUR]: "-rotate-90",
};

export const Hands: React.FC<HandsProps> = ({ cards, player }) => {
  return (
    <div
      className={`flex gap-4 items-center justify-center ${cardsRotation[player]}`}
    >
      {cards.map((card, index) => (
        <Card
          key={`${player}-card-${index}`}
          suit={card.suit}
          rank={card.rank}
          className={``}
        />
      ))}
    </div>
  );
};

const TeenPattiPage: React.FC = () => {
  const [cardsDeck, setCardsDeck] = useState<ICard[]>(deck);
  const [playerHands, setPlayerHands] = useState<
    Record<PLAYING_PLAYERS, ICard[]>
  >({
    [PLAYING_PLAYERS.PLAYER_ONE]: [],
    [PLAYING_PLAYERS.PLAYER_TWO]: [],
    [PLAYING_PLAYERS.PLAYER_THREE]: [],
    [PLAYING_PLAYERS.PLAYER_FOUR]: [],
  });

  useEffect(() => {
    if (cardsDeck.length === deck.length) {
      let remainingDeck = cardsDeck;
      const newPlayerHands: Record<PLAYING_PLAYERS, ICard[]> = {
        [PLAYING_PLAYERS.PLAYER_ONE]: [],
        [PLAYING_PLAYERS.PLAYER_TWO]: [],
        [PLAYING_PLAYERS.PLAYER_THREE]: [],
        [PLAYING_PLAYERS.PLAYER_FOUR]: [],
      };

      // Deal 3 cards to each player
      Object.keys(newPlayerHands).forEach((player) => {
        const dealt = getRandomCardsFromDeck(remainingDeck, 3);
        newPlayerHands[player as unknown as PLAYING_PLAYERS] = dealt.cards;
        remainingDeck = dealt.remainingDeck;
      });

      setPlayerHands(newPlayerHands);
      setCardsDeck(remainingDeck);
    }
  }, [cardsDeck]);

  return (
    <div className="p-4">
      <h2 className="text-center">Teen Patti</h2>
      <div>
        <div className="w-full flex items-stretch justify-center min-h-[100px] gap-4">
          <div className="w-1/4"></div>
          <div className="w-1/2 border border-deep-blue p-2 rounded">
            <Hands
              cards={playerHands[PLAYING_PLAYERS.PLAYER_THREE]}
              player={PLAYING_PLAYERS.PLAYER_THREE}
            />
          </div>
          <div className="w-1/4"></div>
        </div>
        <div className="flex items-stretch justify-center min-h-[300px] gap-4">
          <div className="w-1/3 border border-deep-blue p-2 rounded">
            <Hands
              cards={playerHands[PLAYING_PLAYERS.PLAYER_TWO]}
              player={PLAYING_PLAYERS.PLAYER_TWO}
            />
          </div>
          <div className="w-1/3"></div>
          <div className="w-1/3 border border-deep-blue p-2 rounded">
            <Hands
              cards={playerHands[PLAYING_PLAYERS.PLAYER_FOUR]}
              player={PLAYING_PLAYERS.PLAYER_FOUR}
            />
          </div>
        </div>
        <div className="w-full flex items-stretch justify-center min-h-[100px] gap-4">
          <div className="w-1/4"></div>
          <div className="w-1/2 border border-deep-blue p-2 rounded">
            <Hands
              cards={playerHands[PLAYING_PLAYERS.PLAYER_ONE]}
              player={PLAYING_PLAYERS.PLAYER_ONE}
            />
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiPage;
