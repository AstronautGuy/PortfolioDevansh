import { useState, useEffect, useRef } from "react";

function TypingText({ sequence, speed = 50, onComplete }) {
    const [lineIndex, setLineIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        if (lineIndex >= sequence.length) {
            onComplete && onComplete(displayed);
            return;
        }
        const { text, repeat } = sequence[lineIndex];
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
            function startTyping() {
                let i = 0;
                if (i === 0 && lineIndex === 0) {
                    setDisplayed((prev) => prev + "\n" + text.charAt(i));
                } else {
                    setDisplayed((prev) => prev + text.charAt(i));
                }
                const iv = setInterval(() => {
                    setDisplayed((prev) => prev + text.charAt(i));
                    i++;
                    if (i >= text.length) {
                        clearInterval(iv);
                        setLineIndex((idx) => idx + 1);
                    }
                }, speed * (repeat ? 0.2 : 1));
                return iv;
            }
            const iv = startTyping();
            return () => clearInterval(iv);
        }
    }, [lineIndex, sequence, speed, onComplete]);
    return <div className="pl-1"><pre className="whitespace-pre-wrap text-[#00ff00]">{displayed}</pre>
    </div>;
}

export default function TerminalGate({ onUnlock }) {
    const [phase, setPhase] = useState("intro");
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [exiting, setExiting] = useState(false);
    const [savedText, setSavedText] = useState("");
    const inputRef = useRef();

    // Build dynamic loading sequence
    const loadingSequence = Array.from({ length: 11 }, (_, i) => {
        const pct = Math.round((i * 10));
        const bars = Math.round((i / 10) * 10);
        return {
            text: `Loading systems: [${"#".repeat(bars)}${"-".repeat(10 - bars)}] ${pct}%`,
            repeat: false
        };
    });
    const introText = [
        { text: "Initializing digital cosmos...\n", repeat: false },
        { text: "Establishing quantum links...\n", repeat: false },
        { text: "Calibrating neural interfaces...\n", repeat: false },
        ...loadingSequence.map((line) => ({ text: line.text, repeat: false })),
        { text: "\nWelcome, traveler.\n\nType 'start' to enter the void.\n", repeat: false }
    ];

    const onIntroComplete = (finalText) => {
        setSavedText(finalText);
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
            <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-[90vw] h-[90vh] flex flex-col">
                {/* Mac-like top bar */}
                <div className="bg-gray-800 h-6 rounded-t-lg flex items-center px-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full ml-1"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full ml-2"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full ml-2"></span>
                </div>
                {/* Terminal content */}
                <div className="flex-grow bg-black text-[#00ff00] font-mono px-6 py-4 !overflow-hidden">
                    {phase === "intro" ? (
                        <TypingText sequence={introText} speed={30} onComplete={onIntroComplete} />
                    ) : (
                        <>
                            <pre className="whitespace-pre-wrap mb-2">{savedText}</pre>
                            <div className="flex items-center">
                                <span>&gt; </span>
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKey}
                                    className="ml-2 bg-black flex-grow outline-none text-[#00ff00] font-mono"
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

// Prevent scrolling on html and body
if (typeof window !== "undefined") {
    const style = document.createElement('style');
    style.innerHTML = `
      html, body {
        height: 100% !important;
      }
    `;
    document.head.appendChild(style);
}