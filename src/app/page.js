"use client";

import Image from "next/image";
import bg from "../../public/background/event-horizon3.jpg";
import Navigation from "@/components/navigation";
import StarsCanvas from "@/components/models/Stars";

import dynamic from "next/dynamic";
const EarthCanvas = dynamic(() => import("@/components/models/Earth"), {
  ssr: false, // Ensure it's only rendered on the client
});

const startcanvas = dynamic(() => import("@/components/models/Stars"), {
  ssr: false, // Ensure it's only rendered on the client
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {<Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-100"
      />}
      {/* Top-left text */}
      <div className="absolute top-4 left-4 z-50 text-white text-lg font-bold">
        bitraks
      </div>

      <div className="w-full h-screen">
        
        
        <Navigation />
        <EarthCanvas />
        <StarsCanvas />
      </div>
    </main>
  );
}
