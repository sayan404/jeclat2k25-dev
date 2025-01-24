import { BackgroundLines } from "@/components/ui/background-lines";
import ColourfulText from "@/components/ui/colourful-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import CompusRight from "./assets/CompusRight";
import ButtonDesignRight from "./assets/ButtonDesignRight";
import ButtonDesignLeft from "./assets/ButtonDesignLeft";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-20"
        src="https://firebasestorage.googleapis.com/v0/b/uploadika.appspot.com/o/jeclat-assets%2Fclocl-black.mp4?alt=media&token=189bb723-71aa-47fc-b9ab-30f8655dd3eb"
      />

      <div className="relative font-sans text-center h-screen w-screen backdrop-blur-sm">
        <h1 className="bg-clip-text  text-transparent text-center bg-gradient-to-b from-white to-neutral-700  dark:from-neutral-600 dark:to-white text-6xl md:text-7xl lg:text-9xl font-sans font-[900] py-2 md:py-10 relative z-20 tracking-tight hover:scale-105 transition-transform duration-300">
          JECLAT 2K25
        </h1>
        <div className="w-[65vw] mx-auto mt-8 ">
          <h1 className="flex flex-row justify-center items-center text-2xl md:text-4xl lg:text-[40px] font-poppins font-[700] space-x-1 text-center text-white relative z-2 pb-7">
            <ButtonDesignLeft />
            <span className="px-4 bg-[#7F5283] text-white font-bold py-4 rounded-[20px] transition-colors duration-300 hover:bg-gray-700">
              <ColourfulText text="ABOUT JECLAT" />
            </span>
            <ButtonDesignRight />
          </h1>
          <p className="font-poppins text-[20px] font-[700]">
            <TextGenerateEffect
              className="font-poppins text-[20px] font-[500]"
              words="Experience JECLAT , renowned as"
            />
            <TextGenerateEffect
              className="font-poppins font-[500] text-[27px] text-[#FF8225]"
              words="The Queen of All Fests."
            />
            <TextGenerateEffect
              className="font-poppins text-[19px] tracking-wide font-[500]"
              words="A cultural
            extravaganza in North Bengal featuring a diverse array of events,
            from Music to Dance, creative writing to fashion shows, and
            showcases talents from local artists to nationwide celebrities. Join us and be part of the over Ten Thousand young enthusiasts from around the region!"
            />
          </p>
        </div>
        <div className="mt-12 flex flex-row justify-center items-center rounded-[20px]">
          <ButtonDesignLeft />
          <button className="bg-gray-500 text-white font-bold py-4 px-8 rounded-[20px] transition-colors duration-300 hover:bg-gray-700">
            Jeclat Is ON
          </button>
          <ButtonDesignRight />
        </div>
      </div>
      <style global>{`
        .gradient-text {
          background: linear-gradient(to bottom, white , #ffff00);
          background-size: 100% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientFlow 5s ease infinite;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 0%; }
          // 50% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </div>
  );
}
