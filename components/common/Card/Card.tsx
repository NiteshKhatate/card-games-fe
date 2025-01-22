interface CardProps {
  suit: string; // "spades", "hearts", "clubs", "diamonds"
  rank: string; // "ace", "2", "3", ..., "king"
  show?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  suit,
  rank,
  show = true,
  className,
}) => {
  const cardSrc = `/svg/${rank}_of_${suit}.svg`; // Path to the SVG

  return (
    <div
      className={`h-full w-full rounded inline-block overflow-hidden ${
        className || ""
      }`}
    >
      {show ? (
        <img
          src={cardSrc}
          alt={`${rank} of ${suit}`}
          className={`h-full w-full`}
        />
      ) : (
        <div className="bg-gold h-full w-full p-2">
          <div className="bg-deep-blue rounded h-full w-full" />
        </div>
      )}
    </div>
  );
};
