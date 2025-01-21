interface CardProps {
  suit: string; // "spades", "hearts", "clubs", "diamonds"
  rank: string; // "ace", "2", "3", ..., "king"
  className?: string;
}

export const Card: React.FC<CardProps> = ({ suit, rank, className }) => {
  const cardSrc = `/svg/${rank}_of_${suit}.svg`; // Path to the SVG

  return (
    <div style={{ width: "150px", height: "auto" }} className={className || ""}>
      <img src={cardSrc} alt={`${rank} of ${suit}`} />
    </div>
  );
};
