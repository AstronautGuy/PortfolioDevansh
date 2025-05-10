import { useState, useEffect, useRef } from "react";

function TypingText({ sequence, speed = 50, onComplete }) {
    const [lineIndex, setLineIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        if (lineIndex >= sequence.length) {
            onComplete && onComplete();
            return;
        }
        const { text, repeat, interval } = sequence[lineIndex];
        if (text.includes("Loading systems:")) {
            setDisplayed((prev) => {
                const lines = prev.split("\n");
                lines[lines.length - 1] = text.trim();
                return lines.join("\n");
            });
            const timeout = setTimeout(() => {
                setLineIndex((idx) => idx + 1);
            }, speed * (repeat ? 0.2 : 1) * text.length);
            return () => clearTimeout(timeout);
        } else {
            let i = 0;
            setDisplayed((prev) => prev + "\n");
            const iv = setInterval(() => {
                setDisplayed((prev) => prev + text.charAt(i));
                i++;
                if (i >= text.length) {
                    clearInterval(iv);
                    setLineIndex((idx) => idx + 1);
                }
            }, speed * (repeat ? 0.2 : 1));
            return () => clearInterval(iv);
        }
    }, [lineIndex, sequence, speed, onComplete]);
    return <pre className="whitespace-pre-wrap text-green-400">{displayed}</pre>;
}

export default function TerminalGate({ onUnlock }) {
    const [phase, setPhase] = useState("intro");
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [exiting, setExiting] = useState(false);
    const inputRef = useRef();

    // Build dynamic loading sequence
    const loadingSequence = Array.from({ length: 21 }, (_, i) => {
        const pct = Math.round((i * 5));
        const bars = Math.round((i / 20) * 10);
        return {
            text: `Loading systems: [${"#".repeat(bars)}${"-".repeat(10 - bars)}] ${pct}%`,
            repeat: false
        };
    });
    const introText = [
        { text: "Initializing digital cosmos...\n", repeat: false },
        ...loadingSequence.map((line) => ({ text: line.text + "\n", repeat: false })),
        { text: "Welcome, traveler.\n\nType 'start' to enter the void.\n", repeat: false }
    ];

    const onIntroComplete = () => {
        setPhase("prompt");
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    const handleKey = (e) => {
        if (phase !== "prompt") return;
        if (e.key === "Enter") {
            if (input.trim().toLowerCase() === "start") {
                // fade out
                setExiting(true);
                setTimeout(onUnlock, 1000);
            } else {
                setError(`command not found: ${input}`);
                setInput("");
            }
        }
    };

    return (
        <div className={`${exiting ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 fixed inset-0 bg-black bg-opacity-80 backdrop-blur flex items-center justify-center p-4`}>
            <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-xl h-96 flex flex-col">
                {/* Mac-like top bar */}
                <div className="bg-gray-800 h-6 rounded-t-lg flex items-center px-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full ml-1"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full ml-2"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full ml-2"></span>
                </div>
                {/* Terminal content */}
                <div className="flex-grow bg-black text-green-400 font-mono px-6 py-4 overflow-auto">
                    {phase === "intro" ? (
                        <TypingText sequence={introText} speed={40} onComplete={onIntroComplete} />
                    ) : (
                        <>
                            <div className="whitespace-pre-wrap mb-2">
                                {/* persist intro text above prompt */}
                                {introText.map((l, idx) => null)}
                            </div>
                            <div className="flex items-center">
                                <span>&gt; </span>
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKey}
                                    className="ml-2 bg-black flex-grow outline-none text-green-400 font-mono"
                                />
                            </div>
                            {error && <div className="mt-2 text-red-500">{error}</div>}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
