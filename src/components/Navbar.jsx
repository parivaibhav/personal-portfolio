import React from "react";

function Navbar() {
  return (
    <div className="fixed z-index['999'] w-full px-20 py-8 text-slate-50 font-['FoundersGrotesk X-cond Bold'] flex justify-between items-center ">
      <div className="font-['Founders Grotesk Bold'] ">ochi</div>
      <div className="links flex gap-10 font-light">
        {["Services", "Our work", "About us", "Contact", "Insights"].map(
          (item, index) => (
            <a
              href="home"
              className={`text-md font-light font-capitalize   ${
                index === 4 && "ml-32"
              }`}
              key={index}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
