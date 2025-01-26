import React from "react";
// import './global.css';
const ButtonComp = () => {
  return (
    <div className="flex justify-evenly items-center flex-wrap h-screen bg-[#111a2b]">
      <div className="flex justify-evenly items-center flex-wrap">
        {[
          { color: "#00FFAB" },
          { color: "#764AF1" },
          { color: "#FF4949" },
        ].map((btn, index) => (
          <a
            key={index}
            href="#"
            className="relative m-5 px-14 py-4 text-lg font-medium uppercase tracking-wide text-white bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full shadow-md transition-all duration-200 ease-in-out hover:scale-105"
            style={{ "--tw-gradient-from": btn.color } as React.CSSProperties}
          >
            <span>Jeclat Is ON</span>
            <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-500 ease-in-out hover:left-full"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ButtonComp;
