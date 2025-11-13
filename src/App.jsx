import { useEffect, useState } from "react";
import "./styles/App.css";
import { fetchSmileyEmojis } from "./services/emojiApi";
import TileEmojis from "./components/TileEmojis";

function App() {
  const [fetchedEmojis, setFetchedEmojis] = useState([]);
  const [decoyEmoji, setDecoyEmoji] = useState([]);
  const [correctEmoji, setCorrectEmoji] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [randomDecoyIndex, setRandomDecoyIndex] = useState(0);
  const [randomCorrectIndex, setRandomCorrectIndex] = useState(0);
  const apiCount = 30;

  useEffect(() => {
    setLoading(true);
    fetchSmileyEmojis()
      .then((data) => {
        setFetchedEmojis(data);
        let c = getRandomNumber(0, apiCount);
        let d = getRandomNumber(0, apiCount);
        if (c == d) c = (c + 1) % 10;
        setRandomDecoyIndex(d);
        setRandomCorrectIndex(c);
        setDecoyEmoji(data[d]);
        setCorrectEmoji(data[c]);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  function handleDecoyClick() {
    // setRandomDecoyIndex(getRandomNumber(0, 30));
    // WIP: should actually be game over
    alert("GAME OVER!");
  }

  function handleCorrectClick() {
    // setRandomCorrectIndex(getRandomNumber(0, 30));
    let c = getRandomNumber(0, apiCount);
    let d = getRandomNumber(0, apiCount);
    if (c == d) c = (c + 1) % 10;

    setDecoyEmoji(fetchedEmojis[d]);
    setCorrectEmoji(fetchedEmojis[c]);
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  console.log("decoy", decoyEmoji);
  console.log("correct", correctEmoji);

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
        handleDecoyClick={handleDecoyClick}
        randomDecoyIndex={randomDecoyIndex}
        correctEmoji={correctEmoji}
        randomCorrectIndex={randomCorrectIndex}
        handleCorrectClick={handleCorrectClick}
      />
    </div>
  );
}

export default App;
