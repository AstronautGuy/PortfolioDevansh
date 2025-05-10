import "./globals.css";

export const metadata = {
  title: "Devansh's Portfolio",
  description: "Generated Mr Astronaut",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050404] h-screen w-screen bg-[url('/backgrounds/Background.jpeg')] bg-center bg-contain bg-no-repeat relative">
        {children}
      </body>
    </html>
  );
}
