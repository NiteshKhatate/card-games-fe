interface CardProps {
  suit: string; // "spades", "hearts", "clubs", "diamonds"
  rank: string; // "ace", "2", "3", ..., "king"
}

export const Card: React.FC<CardProps> = ({ suit, rank }) => {
  const cardSrc = `./images/svg/${rank}_of_${suit}.svg`; // Path to the SVG

  return (
    <div style={{ width: "150px", height: "auto" }}>
      <img src={cardSrc} alt={`${rank} of ${suit}`} />
    </div>
  );
};
