import { useState, useEffect } from "react";

export default function DiceDuel() {
  const [rollNumber, setRollNumber] = useState(null);
  const [displayNumber, setDisplayNumber] = useState(0);
  const [rolling, setRolling] = useState(true);

  // Rolling effect for dice
  useEffect(() => {
    if (!rolling) return;
    const interval = setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * 6) + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [rolling]);

  // Roll button
  const handleRoll = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setRollNumber(roll);
    setDisplayNumber(roll);
    setRolling(false);
  };

  // Reset
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
      <h1>Dice Duel</h1>

      {/* Always show Player 1 */}
      <p>Player 1:</p>

      {/* Dice Output */}
      <p>{displayNumber}</p>

      <div style={{ margin: "auto", padding: 10 }}>
        <button onClick={handleRoll} disabled={rollNumber !== null}>roll</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}
