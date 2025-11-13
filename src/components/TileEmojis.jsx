export default function TileEmojis({
  decoyEmoji,
  handleDecoyClick,
  randomDecoyIndex,
  correctEmoji,
  randomCorrectIndex,
  handleCorrectClick,
  correctTileIndex
}) {
  const tiles = Array.from({ length: 4096 }, (_, i) => {
    const isCorrectTile = i === correctTileIndex;

    return (
      <div
        className={`tile ${isCorrectTile ? 'correct-tile' : ''}`}
        key={i}
        onClick={isCorrectTile ? handleCorrectClick : handleDecoyClick}
      >
        <img 
        src={isCorrectTile ? correctEmoji?.image : decoyEmoji?.image}
        alt={isCorrectTile ? correctEmoji?.name : decoyEmoji?.name}
        />
      </div>
    );
  });

  return (
    <div className="tiles">
      {tiles}
    </div>
  );
}
