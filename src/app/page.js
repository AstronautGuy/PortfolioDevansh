"use client";

import { useState, useRef, useEffect } from "react";
import TerminalGate from "../components/TerminalGate";
import GitHubCalendar from 'react-github-calendar';
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    MessageSquare,
    PenTool,
    Rss,
} from "lucide-react";
import TechStack from "@/components/TechStack";


export default function Home() {
    const sectionRefs = useRef([]);
    const isSnapping = useRef(false);
    const [unlocked, setUnlocked] = useState(false);
    const [expandedYears, setExpandedYears] = useState({});

    const addSection = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    const toggleYear = (year) => {
        setExpandedYears((prev) => ({
            ...prev,
            [year]: !prev[year],
        }));
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
                    className={`flex flex-col items-center justify-start bg-none text-white pt-20 px-6 overflow-y-auto transition-opacity duration-700 ease-in-out ${
                        unlocked ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="flex flex-col items-center mb-8" style={{ margin: "0 auto" }}>
                        <h2 className="text-3xl font-light text-[#00ff00] mb-2 text-center">Trajectory Through Code & Cosmos</h2>
                        <span className="text-lg text-center text-gray-300 mb-4">
                            A timeline of experiments, innovations, and digital adventures.
                        </span>
                    </div>
                    <p className="text-lg text-center max-w-3xl mb-8">
                        From “Hello, World!” in C to full-stack Next.js and AI-assisted home automation, my path has been fueled by curiosity and a relentless drive to solve real problems.
                    </p>

                    {/* Timeline */}
                    <div className="w-full max-w-3xl mb-8 space-y-4">
                        <div className="flex flex-col">
                            <button
                                onClick={() => toggleYear(2018)}
                                className="flex items-start focus:outline-none"
                                aria-expanded={!!expandedYears[2018]}
                            >
                                <div className="w-2 h-2 bg-[#00ff00] rounded-full mt-2 mr-4 flex-shrink-0" />
                                <div className="flex-1 text-left">
                                    <strong>2018</strong> — First “real” program in C, and fell in love with low-level hacking.
                                </div>
                            </button>
                            {expandedYears[2018] && (
                                <p className="mt-2 ml-6 text-gray-300 text-sm">
                                    Learned the fundamentals of programming and developed a strong foundation in understanding how computers work at a low level.
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <button
                                onClick={() => toggleYear(2020)}
                                className="flex items-start focus:outline-none"
                                aria-expanded={!!expandedYears[2020]}
                            >
                                <div className="w-2 h-2 bg-[#00ff00] rounded-full mt-2 mr-4 flex-shrink-0" />
                                <div className="flex-1 text-left">
                                    <strong>2020</strong> — Launched my first React/Next.js portfolio, picked up Tailwind CSS and glassmorphism.
                                </div>
                            </button>
                            {expandedYears[2020] && (
                                <p className="mt-2 ml-6 text-gray-300 text-sm">
                                    Gained experience with modern web development tools and design trends, improving UI/UX skills.
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <button
                                onClick={() => toggleYear(2022)}
                                className="flex items-start focus:outline-none"
                                aria-expanded={!!expandedYears[2022]}
                            >
                                <div className="w-2 h-2 bg-[#00ff00] rounded-full mt-2 mr-4 flex-shrink-0" />
                                <div className="flex-1 text-left">
                                    <strong>2022</strong> — Delved into cybersecurity & ethical hacking; built a Kali Linux lab and completed 30-day challenges.
                                </div>
                            </button>
                            {expandedYears[2022] && (
                                <p className="mt-2 ml-6 text-gray-300 text-sm">
                                    Developed a security-first mindset and hands-on skills in penetration testing and ethical hacking.
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <button
                                onClick={() => toggleYear(2024)}
                                className="flex items-start focus:outline-none"
                                aria-expanded={!!expandedYears[2024]}
                            >
                                <div className="w-2 h-2 bg-[#00ff00] rounded-full mt-2 mr-4 flex-shrink-0" />
                                <div className="flex-1 text-left">
                                    <strong>2024</strong> — Started AIshiyana.AI home-automation project, integrated ESP32 and AI routines.
                                </div>
                            </button>
                            {expandedYears[2024] && (
                                <p className="mt-2 ml-6 text-gray-300 text-sm">
                                    Combined AI and IoT to build innovative home automation solutions, expanding expertise in embedded systems.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="w-full max-w-3xl mb-8">
                        <h3 className="text-2xl font-Light mb-4">Core Values</h3>
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
                {/* Github Contributions */}
                <section ref={addSection} className="flex flex-col items-center justify-center bg-none text-white pt-20 cursor-default select-none">
                    <h1 className={"font-light pb-10 pt-10 text-4xl text-[#00ff00]"}>Contributions of <a href="https://github.com/AstronautGuy">TheAstronautGuy</a></h1>
                    <GitHubCalendar username="AstronautGuy" />
                    <h1 className={"font-light pb-10 pt-10 text-4xl text-[#00ff00]"}>Contributions of <a href="https://github.com/AstroCryptX">AstroCryptX</a></h1>
                    <GitHubCalendar username="AstroCryptX" />
                </section>

                <section
                    ref={addSection}
                    className="flex flex-col items-center justify-start bg-none text-white pt-20 px-6 overflow-y-auto"
                >
                    <div className="flex flex-col items-center mb-10">
                        <h2 className="text-3xl font-light text-[#00ff00] mb-2 text-center">
                            Stargate Links & Communication Channels
                        </h2>
                        <p className="text-center text-gray-400 max-w-xl">
                            Navigate the constellations of my work, presence, and collaborations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
                        <a href="https://github.com/AstronautGuy" target="_blank" className="bg-gray-900 border border-[#00ff00] rounded-xl p-6 hover:bg-[#00ff00]/10 transition-all">
                            <h4 className="text-[#00ff00] font-bold text-lg mb-1"><Github size={30} />GitHub: Dev</h4>
                            <p className="text-sm text-gray-300">Main personal dev space for experiments & public code.</p>
                        </a>
                        <a href="https://github.com/AstroCryptX" target="_blank" className="bg-gray-900 border border-[#00ff00] rounded-xl p-6 hover:bg-[#00ff00]/10 transition-all">
                            <h4 className="text-[#00ff00] font-bold text-lg mb-1"><Github size={30} /> GitHub: AstroCrypt</h4>
                            <p className="text-sm text-gray-300">Cybersecurity & research organization projects.</p>
                        </a>
                        <a href="https://linkedin.com/in/devanshrajan" target="_blank" className="bg-gray-900 border border-[#00ff00] rounded-xl p-6 hover:bg-[#00ff00]/10 transition-all">
                            <h4 className="text-[#00ff00] font-bold text-lg mb-1"><Linkedin size={30} /> LinkedIn</h4>
                            <p className="text-sm text-gray-300">Professional profile and networking.</p>
                        </a>
                        <a href="https://twitter.com/MrAstronautDev" target="_blank" className="bg-gray-900 border border-[#00ff00] rounded-xl p-6 hover:bg-[#00ff00]/10 transition-all">
                            <h4 className="text-[#00ff00] font-bold text-lg mb-1"><Twitter size={30} /> Twitter (X)</h4>
                            <p className="text-sm text-gray-300">Thoughts, updates, and tech rants in orbit.</p>
                        </a>
                        <a href="mailto:theastronautguy2@gmail.com" className="bg-gray-900 border border-[#00ff00] rounded-xl p-6 hover:bg-[#00ff00]/10 transition-all">
                            <h4 className="text-[#00ff00] font-bold text-lg mb-1"><Mail size={30} /> Email</h4>
                            <p className="text-sm text-gray-300">Reach out directly via the void mail relay.</p>
                        </a>
                        <a href="https://discord.com/users/TheAstronautGuy" target="_blank" className="bg-gray-900 border border-[#00ff00] rounded-xl p-6 hover:bg-[#00ff00]/10 transition-all">
                            <h4 className="text-[#00ff00] font-bold text-lg mb-1"><MessageSquare size={30} /> Discord</h4>
                            <p className="text-sm text-gray-300">Find me on the edge of the metaverse.</p>
                        </a>
                        <a href="https://dev.to/astronautguy" target="_blank" className="bg-gray-900 border border-[#00ff00] rounded-xl p-6 hover:bg-[#00ff00]/10 transition-all">
                            <h4 className="text-[#00ff00] font-bold text-lg mb-1"><PenTool size={30} /> Dev.to</h4>
                            <p className="text-sm text-gray-300">Technical writings and developer guides.</p>
                        </a>
                        <a href="https://hashnode.com/@yourhashnode" target="_blank" className="bg-gray-900 border border-[#00ff00] rounded-xl p-6 hover:bg-[#00ff00]/10 transition-all">
                            <h4 className="text-[#00ff00] font-bold text-lg mb-1"><Rss size={30} /> Hashnode</h4>
                            <p className="text-sm text-gray-300">Developer blogs beaming from the void.</p>
                        </a>
                    </div>
                </section>
                <section
                    ref={addSection}
                    className="flex flex-col items-center justify-start bg-none text-white pt-20 px-6 overflow-y-auto"
                >
                    <TechStack />
                </section>

                {/* My Journey in Tech (Part 2) */}
                <section
                    ref={addSection}
                    className="flex flex-col items-center justify-center bg-none text-white pt-20"
                >
                    <h2 className="text-3xl font-Light text-[#00ff00] mb-6">My Journey in Tech (Part 2)</h2>
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
