export default function TileEmojis({ decoyEmoji }) {
  const tiles = Array.from({ length: 4096 }, (_, i) => (
    <div className="tile" key={i}>
      <img src={decoyEmoji[0]?.image} alt={decoyEmoji[0]?.name} />
    </div>
  ));

  return <div className="tiles">{tiles}</div>;
}