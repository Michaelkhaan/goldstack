import React from "react";

function BottomBar() {
  const bottomBar = [
    "LIVE PRICE",
    "GOLD BARS",
    "GOLD COINS",
    "SILVER BARS",
    "SILVER COINS",
    "PLATINIUM BARS",
    "PLATINIUM COINS",
    "PALLADIUM",
    "GS POOLS",
    "STORAGE PROGRAMS",
    "REFINARY SERVICES",
    "CONTACT US",
  ];
  return (
    <div className="bg-[#AC954A] px-8 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 border-t border-b hidden min-[1250px]:flex">
      <div className="flex items-center gap-2">
        {bottomBar?.map((e, index) => (
          <h1
            key={index}
            className={`text-white text-xs font-semibold leading-8 whitespace-nowrap ${
              index > 0 ? "border-l-[1.5px] pl-2" : ""
            }`}
          >
            {e}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default BottomBar;
