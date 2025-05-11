import {
    Code2, Terminal, Cloud, Database, Paintbrush, Smartphone
} from "lucide-react";
import {
    SiC, SiCplusplus, SiJavascript, SiPython, SiHtml5, SiDart,
    SiGit, SiGithub, SiGnometerminal, SiTailwindcss, SiGnubash,
    SiAmazonwebservices, SiVercel, SiSupabase,
    SiMariadb, SiMongodb,
    SiFigma, SiCanva,
    SiFlutter, SiArduino,
} from "react-icons/si";

export default function TechStack() {
    return (
        <>
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl font-semibold mb-2 text-center">My Tech Stack</h2>
                <p className="text-center text-gray-400 max-w-xl">
                    A constellation of technologies I’ve explored, mastered, and fused into powerful digital solutions.
                </p>
            </div>

            {/* Languages */}
            <div className="w-full max-w-5xl mb-6 ">
                <h3 className="text-xl text-[#00ff00] font-semibold mb-4 flex items-center gap-2"><Code2
                    size={18}/> Languages</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
                    {[{icon: SiC, label: "C"}, {icon: SiCplusplus, label: "C++"}, {icon: SiJavascript, label: "Java"},
                        {icon: SiJavascript, label: "JavaScript"}, {icon: SiPython, label: "Python"},{icon: SiTailwindcss, label: "Tailwind CSS"},
                        {icon: SiDart, label: "Dart"}, {icon: SiHtml5, label: "HTML5"}].map(({icon: Icon, label}) => (
                        <div key={label}
                             className="bg-gray-900 border border-[#00ff00] rounded-xl p-4 flex items-center gap-3 hover:bg-[#00ff00]/10">
                            <Icon size={20} className="text-[#00ff00]"/>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools */}
            <div className="w-full max-w-5xl mb-6">
                <h3 className="text-xl text-[#00ff00] font-semibold mb-4 flex items-center gap-2"><Terminal
                    size={18}/> Tools & Terminals</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[{icon: SiGit, label: "Git"}, {icon: SiGithub, label: "GitHub"},
                        {icon: SiGnometerminal, label: "PowerShell"},
                        {icon: SiGnubash, label: "Bash"}].map(({icon: Icon, label}) => (
                        <div key={label}
                             className="bg-gray-900 border border-[#00ff00] rounded-xl p-4 flex items-center gap-3 hover:bg-[#00ff00]/10">
                            <Icon size={20} className="text-[#00ff00]"/>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Platforms */}
            <div className="w-full max-w-5xl mb-6">
                <h3 className="text-xl text-[#00ff00] font-semibold mb-4 flex items-center gap-2"><Cloud
                    size={18}/> Platforms & Hosting</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[{icon: SiAmazonwebservices, label: "AWS"}, {icon: SiVercel, label: "Vercel"}, {
                        icon: SiSupabase,
                        label: "Supabase"
                    }].map(({icon: Icon, label}) => (
                        <div key={label}
                             className="bg-gray-900 border border-[#00ff00] rounded-xl p-4 flex items-center gap-3 hover:bg-[#00ff00]/10">
                            <Icon size={20} className="text-[#00ff00]"/>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* IoT & Mobile */}
            <div className="w-full max-w-5xl mb-6">
                <h3 className="text-xl text-[#00ff00] font-semibold mb-4 flex items-center gap-2"><Smartphone
                    size={18}/> Mobile & IoT</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[{icon: SiFlutter, label: "Flutter"}, {
                        icon: SiFlutter,
                        label: "FlutterFlow"
                    }, {icon: SiArduino, label: "Arduino"}].map(({icon: Icon, label}) => (
                        <div key={label}
                             className="bg-gray-900 border border-[#00ff00] rounded-xl p-4 flex items-center gap-3 hover:bg-[#00ff00]/10">
                            <Icon size={20} className="text-[#00ff00]"/>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Databases */}
            <div className="w-full max-w-5xl mb-6">
                <h3 className="text-xl text-[#00ff00] font-semibold mb-4 flex items-center gap-2"><Database
                    size={18}/> Databases & Backend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[{icon: SiMariadb, label: "MariaDB"}, {icon: SiMongodb, label: "MongoDB"}].map(({
                                                                                                         icon: Icon,
                                                                                                         label
                                                                                                     }) => (
                        <div key={label}
                             className="bg-gray-900 border border-[#00ff00] rounded-xl p-4 flex items-center gap-3 hover:bg-[#00ff00]/10">
                            <Icon size={20} className="text-[#00ff00]"/>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Design */}
            <div className="w-full max-w-5xl mb-6">
                <h3 className="text-xl text-[#00ff00] font-semibold mb-4 flex items-center gap-2"><Paintbrush
                    size={18}/> Design & Prototyping</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[{icon: SiFigma, label: "Figma"}, {icon: SiCanva, label: "Canva"}].map(({icon: Icon, label}) => (
                        <div key={label}
                             className="bg-gray-900 border border-[#00ff00] rounded-xl p-4 flex items-center gap-3 hover:bg-[#00ff00]/10">
                            <Icon size={20} className="text-[#00ff00]"/>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
