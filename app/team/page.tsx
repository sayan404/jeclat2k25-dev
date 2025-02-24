"use client";
import React from "react";
import Header from "../components/Header";
import AnimatedCosmicInterface from "@/components/ui/AnimatedCosmicInterface";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import StarField from "@/components/ui/StarField";

const teamData = {
  "Chief-coordinators": ["Arnab Mukherjee", "Akash Ghosh"],
  "Social secretary": ["Souvik Mondal", "Taibu Ray"],
  "Sponsor head": [
    "Amarjeet Napit",
    "Prem Kumar Oraon",
    "Rohini Afsana",
    "Sourav Ganguly",
  ],
  "Collection head": ["Aman Kumar Gond", "Mrutyunjay Pradhan"],
  "Event head": ["Subhajit Ash", "Malay Poulik", "Tapobroto Mandal"],
  "Cultural head": [
    "Miyaraj Laskar",
    "Priyadarshini Jha",
    "Soumen Mallick",
    "Mousumi Tudu",
  ],
  Cashiers: [
    "Mannu Kumar Verma",
    "Akash Layek",
    "Pratik Patra",
    "Mrinal Mukherjee",
    "Liza Goswami",
  ],

  "Web lead": ["Sayan Majumder"],
  "Design head": ["Addreeja Lohar"],
  "Production head": ["Souvik Biswas"],
  "PR head": ["Sakib", "Amit Mondal", "Joydip Sinha"],
  "Social media head": ["Somrik", "Soham Sahoo"],
  "Decoration head": ["Ankana Dutta", "Ankan Sarkar", "Nilanjan Ghosh"],
  "T-shirt distribution": ["Souvik Pal"],
};

const MemberCard = ({ name, role }: { name: string; role: string }) => (
  <div className="w-56 h-72 bg-gradient-to-b from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 p-4 flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300">
    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
    <p className="text-blue-300 text-sm text-center">{role}</p>
    <div className="mt-3 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
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
);

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
    <div className="w-full md:w-56 h-72 bg-gradient-to-b from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 p-4 flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
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
  <div className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-center text-blue-300">
      {role}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
      <main className="flex flex-col items-center p-6 bg-transparent text-white pt-2">
        <div className="w-full max-w-2xl mb-8 relative">
          <div className="md:hidden space-y-6 mb-8">
            {teamData["Chief-coordinators"].map((name, index) => (
              <ChiefCoordinatorCard
                key={name}
                name={name}
                position={index === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <div className="hidden md:flex flex-row flex-wrap relative">
            <AnimatedCosmicInterface />
            <ChiefCoordinatorCard name="Arnab Mukherjee" position="left" />
            <ChiefCoordinatorCard name="Akash Ghosh" position="right" />
          </div>
        </div>

        <div className="w-full max-w-7xl px-4">
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
