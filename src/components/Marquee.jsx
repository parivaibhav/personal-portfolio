import React from "react";
// import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full h-[50vh] py-20 rounded-md rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden gap-10 ">
        <h1 className="text-[22vw] leading-none font-['Founders Grotesk X-Cond Extrabold'] uppercase pt-10 -mb-10 font-extrabold">
          We are ochi
        </h1>
        <h1 className="text-[22vw] leading-none font-['Founders Grotesk X-Cond Extrabold'] uppercase pt-10 -mb-20 font-extrabold">
          We are ochi
        </h1>
        <h1 className="text-[22vw] leading-none font-['Founders Grotesk X-Cond Extrabold'] uppercase pt-10 -mb-20 font-extrabold">
          We are ochi font-extrabold
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
