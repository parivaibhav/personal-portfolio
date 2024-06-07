import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 ">
      <div className="textstructure mt-52 px-20">
        {["We create", "Eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker font-['Founders Grotesk Bold'] bg-red-800 font-bold  text-rose-50">
              <div className="w-fit flex flex-end overflow-hidden ">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw]  bg-zinc-700 relative"></div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[5vw] leading-normal font-['Test Founders Grotesk X-CondSm Semi Bold'] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] bg-zinc-800 mt-20 flex justify-between items-center px-20 py-5">
        {["For public and private use only", "From the first pitch to IPO"].map(
          (item, index) => (
            <p className="text-md font-light leading-none">{item}</p>
          )
        )}
        <div className="start flex items-center justify-between gap-5 ">
          <div className="px-10 py-1 flex items-center justify-between gap-5 border-[1px] rounded-full border-zinc-500 font-light teext-sm capitalize hover:bg-white hover:text-black ">
            start the project{" "}
          </div>
          <div className="w-6 h-6 border-[2px] flex items-center justify-center border-zinc-500 rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
