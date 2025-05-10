"use client";

import { useState, useRef, useEffect } from "react";
import TerminalGate from "../components/TerminalGate";

export default function Home() {
    const sectionRefs = useRef([]);
    const isSnapping = useRef(false);
    const [unlocked, setUnlocked] = useState(false);

    const addSection = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isSnapping.current) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        isSnapping.current = true;
                        entry.target.scrollIntoView({ behavior: "smooth", block: "start" });
                        setTimeout(() => {
                            isSnapping.current = false;
                        }, 3000);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sectionRefs.current.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {!unlocked && <TerminalGate onUnlock={() => setUnlocked(true)} />}
            <main className={`${unlocked ? "" : "pointer-events-none opacity-0"}`}>
                {/* Intro Section */}
                <section
                    ref={addSection}
                    className="h-screen flex flex-col items-center justify-center bg-none text-white select-none cursor-default"
                >
                    <h1 className="font-light text-4xl text-[#00ff00]">Welcome to My Digital Cosmos!</h1>
                    <p className="mt-5 text-lg text-center max-w-2xl">
                        Explore the intersection of technology, innovation, and creativity. This is where my passion for web development, cyber security, and AI come to life. Dive into my projects and see how I push the boundaries of what’s possible!
                    </p>
                    <button
                        onClick={() =>
                            sectionRefs.current[1]?.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                        className="mt-8 px-6 py-2 bg-[#00ff00] text-black rounded-full hover:bg-green-600 transition duration-300"
                    >
                        Launch Into My Universe
                    </button>
                    <div className="mt-6 text-4xl text-[#00ff00]" style={{ animation: "downBounce 1s infinite" }}>
                        ⌄
                    </div>
                </section>
                <section
                    ref={addSection}
                    className="flex flex-col items-center justify-start bg-none text-white pt-20 px-6 overflow-y-auto"
                >
                    <h2 className="text-3xl font-semibold mb-6">My Journey in Tech</h2>
                    <p className="text-lg text-center max-w-3xl mb-8">
                        From “Hello, World!” in C to full-stack Next.js and AI-assisted home automation, my path has been fueled by curiosity and a relentless drive to solve real problems.
                    </p>

                    {/* Timeline */}
                    <div className="w-full max-w-3xl mb-8 space-y-4">
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-[#00ff00] rounded-full mt-2 mr-4" />
                            <div>
                                <strong>2018</strong> — First “real” program in C, and fell in love with low-level hacking.
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-[#00ff00] rounded-full mt-2 mr-4" />
                            <div>
                                <strong>2020</strong> — Launched my first React/Next.js portfolio, picked up Tailwind CSS and glassmorphism.
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-[#00ff00] rounded-full mt-2 mr-4" />
                            <div>
                                <strong>2022</strong> — Delved into cybersecurity & ethical hacking; built a Kali Linux lab and completed 30-day challenges.
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-[#00ff00] rounded-full mt-2 mr-4" />
                            <div>
                                <strong>2024</strong> — Started AIshiyana.AI home-automation project, integrated ESP32 and AI routines.
                            </div>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="w-full max-w-3xl mb-8">
                        <h3 className="text-2xl font-medium mb-4">Core Values</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Curiosity</strong> — Always learning, always asking “why?”</li>
                            <li><strong>Integrity</strong> — Security-first mindset in every line of code.</li>
                            <li><strong>Creativity</strong> — Finding elegant solutions to complex challenges.</li>
                            <li><strong>Collaboration</strong> — Building stronger together, sharing knowledge.</li>
                        </ul>
                    </div>

                    {/* Future Vision */}
                    <div className="w-full max-w-3xl mb-8">
                        <h3 className="text-2xl font-medium mb-4">Looking Ahead</h3>
                        <p className="text-lg">
                            Next on the horizon: blending edge-AI inference on microcontrollers, 3D-driven web experiences, and crafting tools that empower non-tech users to safeguard their digital lives. The adventure has only just begun.
                        </p>
                    </div>
                    {/* Skills Grid */}
                    <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <h4 className="font-medium">Web Dev</h4>
                            <p className="text-sm">JavaScript • Next.js • React • Tailwind</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-medium">Security</h4>
                            <p className="text-sm">Kali Linux • Pen-testing • OWASP</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-medium">IoT & Hardware</h4>
                            <p className="text-sm">Arduino • ESP32 • Home Automation</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-medium">AI & ML</h4>
                            <p className="text-sm">Python • TensorFlow • Neural Nets</p>
                        </div>
                    </div>
                </section>
                {/* My Journey in Tech (Part 2) */}
                <section
                    ref={addSection}
                    className="h-screen flex flex-col items-center justify-center bg-none text-white pt-20"
                >
                    <h2 className="text-3xl font-semibold mb-6">My Journey in Tech (Part 2)</h2>
                    <p className="text-lg text-center max-w-3xl">
                        Continuing my exploration of the tech world, from deep dives into machine learning algorithms to
                        cybersecurity threats, I strive to push the boundaries of innovation.
                        With a focus on building secure, scalable solutions, my journey is just beginning. Let’s explore the endless possibilities together!
                    </p>
                </section>
            </main>
        </>
    );
}
