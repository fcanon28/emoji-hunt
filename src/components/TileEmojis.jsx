export default function TileEmojis({
  decoyEmoji,
  handleCorrectClick,
  randomDecoyIndex,
}) {
  const tiles = Array.from({ length: 4096 }, (_, i) => (
    <div className="tile" key={i}>
      <img src={decoyEmoji[randomDecoyIndex]?.image} alt={decoyEmoji[randomDecoyIndex]?.name} />
    </div>
  ));

  return (
    <div className="tiles" onClick={handleCorrectClick}>
      {tiles}
    </div>
  );
}
