import { useEffect, useState } from "react";
import "./styles/App.css";
import { fetchSmileyEmojis } from "./services/emojiApi";
import TileEmojis from "./components/TileEmojis";

function App() {
  const [decoyEmoji, setDecoyEmoji] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [randomDecoyIndex, setRandomDecoyIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetchSmileyEmojis()
      .then((data) => setDecoyEmoji(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  function handleCorrectClick() {
    setRandomDecoyIndex(getRandomNumber(0, 30));
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  if (loading) {
    return (
      <div className="game-body">
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Loading game...</p>
        </div>
      </div>
    );
  }

  console.log(decoyEmoji[randomDecoyIndex]);
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

      <TileEmojis
        decoyEmoji={decoyEmoji}
        handleCorrectClick={handleCorrectClick}
        randomDecoyIndex={randomDecoyIndex}
      />
    </div>
  );
}

export default App;
