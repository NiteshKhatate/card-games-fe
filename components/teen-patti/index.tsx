import { useEffect, useState } from "react";
import { Card } from "@cards-common-components/Card/Card";
import { getRandomCards } from "@cards/utils/common";
import { ICard } from "./components/types";

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

export const Hands: React.FC<HandsProps> = ({ cards, player }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {cards.map((card, index) => (
        <Card
          key={`${player}-card-${index}`}
          suit={card.suit}
          rank={card.rank}
        />
      ))}
    </div>
  );
};

const TeenPattiPage: React.FC = () => {
  const [playerOneHand, setPlayerOneHand] = useState<ICard[]>([]);
  useEffect(() => {
    if (playerOneHand.length === 0) {
      setTimeout(() => {
        const cards = getRandomCards(3);
        setPlayerOneHand(cards);
      }, 1000);
    }
  }, [playerOneHand]);
  return (
    <div className="p-4">
      <h2 className="text-center">Teen Patti</h2>
      <div>
        <div className="w-full flex items-stretch justify-center min-h-[100px] gap-4">
          <div className="w-1/4"></div>
          <div className="w-1/2 border border-deep-blue p-2 rounded"></div>
          <div className="w-1/4"></div>
        </div>
        <div className="flex items-stretch justify-center min-h-[300px] gap-4">
          <div className="w-1/4 border border-deep-blue p-2 rounded"></div>
          <div className="w-1/2"></div>
          <div className="w-1/4 border border-deep-blue p-2 rounded"></div>
        </div>
        <div className="w-full flex items-stretch justify-center min-h-[100px] gap-4">
          <div className="w-1/4"></div>
          <div className="w-1/2 border border-deep-blue p-2 rounded">
            <Hands cards={playerOneHand} player={PLAYING_PLAYERS.PLAYER_ONE} />
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default TeenPattiPage;
