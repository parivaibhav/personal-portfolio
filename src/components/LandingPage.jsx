import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 text-slate-50 ">
      <div className="textstructure mt-52 px-20">
        {["We create", "Eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker font-['Founders Grotesk Bold'] bg-red-800 ">
              <div className="w-fit flex flex-center overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw]  bg-red-500 relative"></div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[10vw] font-['Test Founders Grotesk X-CondSm Semi Bold']   font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] bg-zinc-800 mt-32 flex justify-between items-center px-10 py-8">
        {["For public and private use only", "From the first pitch to IPO"].map(
          (item, index) => (
            <p className="text-md font-light leading-none">{item}</p>
          )
        )}
        <div className="start flex items-center justify-between gap-5 ">
          <div className="px-5 py-2 flex items-center justify-between gap-5 border-[1px] rounded-full border-zinc-500 font-light teext-sm capitalize hover:bg-white hover:text-black ">
            start the project{" "}
            <div className="w-6 h-6 border-[2px] flex items-center justify-center border-zinc-500 rounded-full ">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
