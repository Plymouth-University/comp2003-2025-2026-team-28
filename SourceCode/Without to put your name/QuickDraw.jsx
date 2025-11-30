import { useState, useEffect } from "react";

export default function QuickDraw() {
  // Fixed player names
  const player1Name = "Player 1";
  const player2Name = "Player 2";

  // Countdown
  const [counter, setCounter] = useState(4);
  const [gameActive, setGameActive] = useState(false);

  // Winner message
  const [winner, setWinner] = useState("");

  // --------------------------------------------------
  // Countdown starts immediately
  // --------------------------------------------------
  useEffect(() => {
    if (counter < 0) {
      setGameActive(true);
      return;
    }

    const t = setInterval(() => setCounter((prev) => prev - 1), 1000);
    return () => clearInterval(t);
  }, [counter]);

  // --------------------------------------------------
  // Winner handlers
  // --------------------------------------------------
  const player1Win = () => {
    setWinner(`${player1Name} wins!`);
    setGameActive(false);
  };

  const player2Win = () => {
    setWinner(`${player2Name} wins!`);
    setGameActive(false);
  };

  // --------------------------------------------------
  // Reset page
  // --------------------------------------------------
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div
      style={{
        height: "100%",
        textAlign: "center",
        paddingTop: 40,
      }}
    >
      <h1>Quick Draw</h1>

      {/* Countdown */}
      <div style={{ marginBottom: 20 }}>
        {counter >= 0 ? <span>{counter} Seconds</span> : <span>Go!</span>}
      </div>

      {/* Player labels */}
      <p><strong>{player1Name}:</strong></p>
      <p><strong>{player2Name}:</strong></p>

      {/* Buttons */}
      <div style={{ padding: 20 }}>
        <button onClick={player1Win} disabled={!gameActive}>
          Draw1
        </button>

        <button onClick={player2Win} disabled={!gameActive}>
          Draw2
        </button>

        <button onClick={handleReset}>Reset</button>
      </div>

      {/* Winner message */}
      <p style={{ fontSize: 24, fontWeight: "bold" }}>{winner}</p>
    </div>
  );
}
