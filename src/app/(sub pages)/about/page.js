import Image from "next/image";
import bg from "../../../../public/background/aurora_borealis.jpg";
import RenderModel from "@/components/RenderModel";
//import EarthCanvas from "@/components/models/EarthCanvas";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import React from "react";
//  const EarthCanvas = dynamic(() => import("@/components/models/Earth"), {
//    ssr: false,
//  });

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[20%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            bitraks
          </h1>
          <p className="font-light text-foreground text-lg">
            Hi! I am Rakshak and I love 0s and 1s.
          </p>
        </div>
      </div>

      {/* <AboutDetails /> */}
    </>
  );
}
