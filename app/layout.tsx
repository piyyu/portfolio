import type { Metadata } from "next";
import { Poppins, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piyush Kumar",
  description: "Developer portfolio of Piyush Kumar. Full-stack engineering, systems thinking, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body
        className="antialiased bg-black text-white"
      >
        {children}
      </body>
    </html>
  );
}
