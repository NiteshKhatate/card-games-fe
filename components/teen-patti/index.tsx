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
  cardsInHands: ICard[];
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

export const Hands: React.FC<HandsProps> = ({
  cardsInHands,
  playerType: player,
}) => {
  const [showCards, setShowCards] = useState<boolean>(false);
  const sortedCards = [...cardsInHands].sort((a, b) => {
    // Sort based on the index of the rank in the cards.ranks array
    return cards.ranks.indexOf(a.rank) - cards.ranks.indexOf(b.rank);
  });

  return (
    <div
      className={`flex ${
        handColOrientation.includes(player) && "flex-col"
      } gap-4 items-center justify-center`}
    >
      {sortedCards.map((card, index) => (
        <div
          key={`${player}-card-${index}`}
          className={`h-[100px] w-[70px] ${cardsRotation[player]}`}
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
        <div className="w-full flex items-stretch justify-center gap-4">
          <div className="w-1/4"></div>
          <div className="w-1/2 border border-deep-blue p-2 rounded">
            <Hands
              cardsInHands={playerHands[PLAYING_PLAYERS.PLAYER_THREE]}
              playerType={PLAYING_PLAYERS.PLAYER_THREE}
            />
          </div>
          <div className="w-1/4"></div>
        </div>
        <div className="flex items-stretch justify-center gap-4">
          <div className="w-1/4 border border-deep-blue p-2 rounded">
            <Hands
              cardsInHands={playerHands[PLAYING_PLAYERS.PLAYER_TWO]}
              playerType={PLAYING_PLAYERS.PLAYER_TWO}
            />
          </div>
          <div className="w-1/2"></div>
          <div className="w-1/4 border border-deep-blue p-2 rounded">
            <Hands
              cardsInHands={playerHands[PLAYING_PLAYERS.PLAYER_FOUR]}
              playerType={PLAYING_PLAYERS.PLAYER_FOUR}
            />
          </div>
        </div>
        <div className="w-full flex items-stretch justify-center gap-4">
          <div className="w-1/4"></div>
          <div className="w-1/2 border border-deep-blue p-2 rounded">
            <Hands
              cardsInHands={playerHands[PLAYING_PLAYERS.PLAYER_ONE]}
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
