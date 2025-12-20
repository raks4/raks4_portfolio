import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import dynamic from "next/dynamic";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

// client-only Stars canvas
const StarsCanvas = dynamic(() => import("@/components/models/Stars"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "raks4",
    default:
      "raks4",
  },
  description:
    "A modern and minimalistic portfolio built with Next.js, Tailwind CSS, and Three.js by rakshak.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <StarsCanvas />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
