import { useEffect, useState } from "react";
import "./styles/App.css";
import { fetchSmileyEmojis } from "./services/emojiApi";
import TileEmojis from "./components/TileEmojis";

function App() {
  const [decoyEmoji, setDecoyEmoji] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchSmileyEmojis()
      .then((data) => setDecoyEmoji(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const tileEmojis = () => {
    const tiles = [];
    for (let i = 0; i < 64; i++) {
      for (let j = 0; j < 64; j++) {
        tiles.push(
          <div className="tile" key={`${i}, ${j}`}>
            <img src={decoyEmoji[0].image} />
          </div>
        );
      }
    }
    return tiles;
  };

  console.log(decoyEmoji[0]);
  return (
    <div className="game-body">
      <div className="header">
        <h2>emoji hunt!</h2>
        <div className="timer">00:00</div>
        <div className="score">
          <p>score: 0</p>
          <p>highscore: 0</p>
        </div>
      </div>

      <TileEmojis decoyEmoji={decoyEmoji}/>
    </div>
  );
}

export default App;
