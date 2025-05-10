import { useEffect } from 'react';
import "github-calendar/dist/github-calendar-responsive.css";
import GitHubCalendar from 'github-calendar';

function GithubContributions() {
    useEffect(() => {
        GitHubCalendar(".calendar", "AstronautGuy", {
            responsive: true,
        });

        // Inject custom styles for the GitHub contribution graph
        const style = document.createElement("style");
        style.innerHTML = `
            .calendar *, .calendar g rect {
                stroke: none !important;
            }

            .calendar g rect.ContributionCalendar-day[data-level="0"] { fill: #1c1c1c; }
            .calendar g rect.ContributionCalendar-day[data-level="1"] { fill: ##1c1c1c; }
            .calendar g rect.ContributionCalendar-day[data-level="2"] { fill: #006600; }
            .calendar g rect.ContributionCalendar-day[data-level="3"] { fill: #00cc00; }
            .calendar g rect.ContributionCalendar-day[data-level="4"] { fill: #1c1c1c; }

            .calendar .contrib-legend text {
                fill: white;
            }

            .calendar .floaty-tooltip {
                background-color: #1c1c1c !important;
                color: #0f0 !important;
                border: none !important;
            }
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <section className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-light mb-8 text-[#00ff00]">My GitHub Contributions</h2>
            <div
                className="calendar w-full max-w-5xl p-6 rounded-lg shadow-lg border-none"
                style={{ border: "none", outline: "none" }}
            />
        </section>
    );
}

export default GithubContributions;