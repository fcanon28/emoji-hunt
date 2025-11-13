export default function TileEmojis({
  decoyEmoji,
  handleDecoyClick,
  randomDecoyIndex,
  correctEmoji,
  randomCorrectIndex,
  handleCorrectClick
}) {
  const tiles = Array.from({ length: 4095 }, (_, i) => (
    <div className="tile" key={i}  onClick={handleDecoyClick}>
      <img
        src={decoyEmoji?.image}
        alt={decoyEmoji?.name}
      />
    </div>
  ));

  return (
    <div className="tiles">
      <div className="tile" onClick={handleCorrectClick}>
        <img
          src={correctEmoji?.image}
          alt={correctEmoji?.name}
        />
      </div>
      {tiles}
    </div>
  );
}
