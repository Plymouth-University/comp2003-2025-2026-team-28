import { useEffect, useState } from "react";

export default function TipToss() {
    // Fixed player name
    const finalName = "Player 1:";

    const [power, setPower] = useState(0);
    const [increasing, setIncreasing] = useState(true);
    const [running, setRunning] = useState(false);

    const [powerVisible, setPowerVisible] = useState(false);
    const [result, setResult] = useState("");

    const [startEnabled, setStartEnabled] = useState(true);
    const [resetEnabled, setResetEnabled] = useState(true);

    const [startLabel, setStartLabel] = useState("start");
    const [tossMode, setTossMode] = useState(false);

    // Animate the power bar
    useEffect(() => {
        if (!running) return;

        const id = setInterval(() => {
            setPower((prev) => {
                if (increasing) {
                    if (prev >= 100) {
                        setIncreasing(false);
                        return 100;
                    }
                    return prev + 2;
                } else {
                    if (prev <= 0) {
                        setIncreasing(true);
                        return 0;
                    }
                    return prev - 2;
                }
            });
        }, 30);

        return () => clearInterval(id);
    }, [running, increasing]);

    // First click → show bar + switch button to toss mode
    const handleStart = () => {
        setStartLabel("toss");
        setPowerVisible(true);
        setRunning(true);
        setTossMode(true);
    };

    // Second click → stop bar & show result
    const handleToss = () => {
        setRunning(false);

        if (power < 30) setResult("Weak Toss!");
        else if (power < 70) setResult("Nice Toss!");
        else setResult("Perfect Toss!");

        setStartEnabled(false);
    };

    const reset = () => {
        window.location.reload();
    };

    return (
        <div style={{ textAlign: "center", minHeight: "100vh", padding: "20px" }}>
            <h1>Tip Toss</h1>

            <div className="myDiv">
                {/* Fixed name */}
                <p>{finalName}</p>

                <div id="bored">
                    <div id="bored_fill"></div>
                </div>

                <button
                    onClick={tossMode ? handleToss : handleStart}
                    disabled={!startEnabled}
                >
                    {startLabel}
                </button>

                <button onClick={reset} disabled={!resetEnabled}>
                    reset
                </button>
            </div>

            {/* POWER BAR */}
            {powerVisible && (
                <div
                    style={{
                        width: "60px",
                        height: "300px",
                        border: "3px solid #333",
                        margin: "20px auto",
                        borderRadius: "5px",
                        overflow: "hidden",
                        background: "linear-gradient(to top, red, yellow, green)",
                        position: "relative"
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: `${power}%`,
                            background: "rgba(0,0,0,0.4)",
                            position: "absolute",
                            bottom: 0,
                            transition: "height 0.05s"
                        }}
                    ></div>
                </div>
            )}

            <h2>{result}</h2>
        </div>
    );
}
