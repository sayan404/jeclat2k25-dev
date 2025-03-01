"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import AnimatedCosmicInterface from "@/components/ui/AnimatedCosmicInterface";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import StarField from "@/components/ui/StarField";
import Image from "next/image";

// Import all member images
import SayanMajumder from "../assets/core-members/SayanMajumder.jpg";
import ArnabMukherjee from "../assets/core-members/ArnabMukherjee.jpeg";
import AkashGhosh from "../assets/core-members/AkashGhosh.jpg";

// import SouvikMondal from "../assets/core-members/SouvikMondal.jpg";
// import TaibuRay from "../assets/core-members/TaibuRay.jpg";
import AmanGond from "../assets/core-members/AmanKumarGond.jpg";
import SubhajitAsh from "../assets/core-members/SubhajitAsh.jpg";
import MalayPoulik from "../assets/core-members/MalayPoulik.jpg";
// import TapobrotoMandal from "../assets/core-members/TapobrotoMandal.jpg";
import MrutyunjayPradhan from "../assets/core-members/MrutyunjayPradhan.jpg";
import AmarjeetNapit from "../assets/core-members/AmarjeetNapit.jpg";
// import PremOraon from "../assets/core-members/PremOraon.jpg";
// import RohiniAfsana from "../assets/core-members/RohiniAfsana.jpg";
// import SouravGanguly from "../assets/core-members/SouravGanguly.jpg";
// import MousumiTudu from "../assets/core-members/MousumiTudu.jpg";
// import MannuKumarVerma from "../assets/core-members/MannuKumarVerma.jpg";
import AkashLayek from "../assets/core-members/AkashLayek.jpg";
// import AddreejaLohar from "../assets/core-members/AddreejaLohar.jpg";
import SouvikBiswas from "../assets/core-members/SouvikBiswas.jpg";
// import Sakib from "../assets/core-members/Sakib.jpg";
// import AmitMondal from "../assets/core-members/AmitMondal.jpg";
// import JoydipSinha from "../assets/core-members/JoydipSinha.jpg";
// import Somrik from "../assets/core-members/Somrik.jpg";
// import SohamSahoo from "../assets/core-members/SohamSahoo.jpg";
import AnkanaDutta from "../assets/core-members/AnkanaDutta.jpg";
// import AnkanSarkar from "../assets/core-members/AnkanSarkar.jpg";
import NilanjanGhosh from "../assets/core-members/NilanjanGhosh.jpg";
import SouvikPal from "../assets/core-members/SouvikPal.jpeg";
// import PratikPatra from "../assets/core-members/PratikPatra.jpg";
// import MrinalMukherjee from "../assets/core-members/MrinalMukherjee.jpg";
import LizaGoswami from "../assets/core-members/LizaGoswami.jpg";
// import MiyarajLaskar from "../assets/core-members/MiyarajLaskar.jpg";
// import PriyadarshiniJha from "../assets/core-members/PriyadarshiniJha.jpg";
// import SoumenMallick from "../assets/core-members/SoumenMallick.jpg";

// ... import other member images similarly

// Create a mapping of names to their images
const memberImages: { [key: string]: any } = {
  "Sayan Majumder": SayanMajumder,
  "Arnab Mukherjee": ArnabMukherjee,
  "Akash Ghosh": AkashGhosh,
  // "Souvik Mondal": SouvikMondal,
  // "Taibu Ray": TaibuRay,
  "Aman Kumar Gond": AmanGond,
  "Mrutyunjay Pradhan": MrutyunjayPradhan,
  "Subhajit Ash": SubhajitAsh,
  "Malay Poulik": MalayPoulik,
  // "Tapobroto Mandal": TapobrotoMandal,
  "Amarjeet Napit": AmarjeetNapit,
  // "Prem Kumar Oraon": PremOraon,
  // "Rohini Afsana": RohiniAfsana,
  // "Sourav Ganguly": SouravGanguly,
  // "Mousumi Tudu": MousumiTudu,
  // "Mannu Kumar Verma": MannuKumarVerma,
  "Akash Layek": AkashLayek,
  // "Pratik Patra": PratikPatra,
  // "Mrinal Mukherjee": MrinalMukherjee,
  "Liza Goswami": LizaGoswami,
  "Souvik Biswas": SouvikBiswas,
  // "Sakib": Sakib,
  // "Amit Mondal": AmitMondal,
  // "Joydip Sinha": JoydipSinha,
  // "Somrik": Somrik,
  // "Soham Sahoo": SohamSahoo,
  "Ankana Dutta": AnkanaDutta,
  // "Ankan Sarkar": AnkanSarkar,
  "Nilanjan Ghosh": NilanjanGhosh,
  "Souvik Pal": SouvikPal,
  // "Miyaraj Laskar": MiyarajLaskar,
  // "Priyadarshini Jha": PriyadarshiniJha,
  // "Soumen Mallick": SoumenMallick,
  // "Addreeja Lohar": AddreejaLohar
};

const teamData = {
  "Chief-coordinators": ["Arnab Mukherjee", "Akash Ghosh"],
  "Social secretary": ["Souvik Mondal", "Taibu Ray"],
  "Collection head": ["Aman Kumar Gond", "Mrutyunjay Pradhan"],
  "Sponsor head": [
    "Amarjeet Napit",
    "Prem Kumar Oraon",
    "Rohini Afsana",
    "Sourav Ganguly",
  ],
  Cashiers: [
    "Mannu Kumar Verma",
    "Akash Layek",
    "Pratik Patra",
    "Mrinal Mukherjee",
    "Liza Goswami",
  ],
  "Web lead": ["Sayan Majumder"],
  "T-shirt distribution": ["Souvik Pal"],
  "Event head": ["Subhajit Ash", "Malay Poulik", "Tapobroto Mandal"],
  "Design head": ["Addreeja Lohar"],
  "Production head": ["Souvik Biswas"],
  "PR head": ["Sakib", "Amit Mondal", "Joydip Sinha"],
  "Social media head": ["Somrik", "Soham Sahoo"],
  "Decoration head": ["Ankana Dutta", "Ankan Sarkar", "Nilanjan Ghosh"],
  "Cultural head": [
    "Miyaraj Laskar",
    "Priyadarshini Jha",
    "Soumen Mallick",
    "Mousumi Tudu",
  ],
};

const MemberCard = ({ name, role }: { name: string; role: string }) => {
  const [imageError, setImageError] = useState(false);
  const memberImage = memberImages[name];

  return (
    <div className="w-full max-w-xl bg-gradient-to-b from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
      <div className="flex flex-row items-center">
        <div className="p-4 flex-shrink-0">
          {memberImage && !imageError ? (
            <Image
              src={memberImage}
              alt={name}
              width={400}
              height={400}
              className="rounded-[10px]  w-[100px] "
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex flex-col flex-grow p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
          <p className="text-blue-300 text-sm">{role}</p>
          <div className="mt-2 flex gap-2">
            <div className="w-8 h-8 flex items-center justify-center hover:text-blue-500 transition-colors cursor-pointer">
              <span className="text-blue-300 text-lg">
                <IconBrandLinkedin />
              </span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center hover:text-blue-500 transition-colors cursor-pointer">
              <span className="text-blue-300 text-lg">
                <IconBrandInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChiefCoordinatorCard = ({
  name,
  position,
}: {
  name: string;
  position: "left" | "right";
}) => (
  <div
    className={`
      relative md:absolute md:top-1/2 md:transform md:-translate-y-1/2
      ${position === "left" ? "md:-left-64" : "md:-right-64"}
      w-full md:w-auto
    `}
  >
    <div className="w-full md:w-56 bg-gradient-to-b from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 p-4 flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300">
      {/* <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" /> */}
      <Image
        src={memberImages[name]}
        alt={name}
        width={200}
        height={200}
        className="rounded-[10px] mb-4 w-[200px]"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-blue-300 text-sm">Chief Coordinator</p>
      <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="mt-4 flex gap-2">
        <div className="w-8 h-8 flex items-center justify-center hover:text-blue-500 transition-colors cursor-pointer">
          <span className="text-blue-300 text-lg">
            <IconBrandLinkedin />
          </span>
        </div>
        <div className="w-8 h-8 flex items-center justify-center hover:text-blue-500 transition-colors cursor-pointer">
          <span className="text-blue-300 text-lg">
            <IconBrandInstagram />
          </span>
        </div>
      </div>
    </div>
  </div>
);

const TeamSection = ({
  role,
  members,
}: {
  role: string;
  members: string[];
}) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-center text-blue-300">
      {role}
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
      {members.map((member) => (
        <MemberCard key={member} name={member} role={role} />
      ))}
    </div>
  </div>
);

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <StarField />
      <Header />
      <main className="flex flex-col items-center p-4 bg-transparent text-white pt-2">
        <div className="w-full max-w-2xl relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-20 text-center font-highbright text-orange-yellow">
              Our Team
            </h1>
            <div className="space-y-1">
              <h2 className="text-transparent bg-clip-text bg-white font-sugarPeachy text-xl  tracking-wider">
                Presenting you the JECLAT 2K23 Core Team!{" "}
              </h2>
            </div>
          </div>
          <div className="md:hidden mt-2 space-y-6 mb-8">
            {teamData["Chief-coordinators"].map((name, index) => (
              <ChiefCoordinatorCard
                key={name}
                name={name}
                position={index === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <div className="hidden md:flex flex-row flex-wrap relative">
            <div className="h-[90%] w-[90%]"><AnimatedCosmicInterface /></div>
            <ChiefCoordinatorCard name="Arnab Mukherjee" position="left" />
            <ChiefCoordinatorCard name="Akash Ghosh" position="right" />
          </div>
        </div>

        <div className="w-full max-w-7xl px-2">
          {Object.entries(teamData).map(
            ([role, members]) =>
              role !== "Chief-coordinators" && (
                <TeamSection key={role} role={role} members={members} />
              )
          )}
        </div>
      </main>
    </div>
  );
};

export default TeamPage;
