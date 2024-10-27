import React from "react";

function SellToUs() {
  return (
    <div className="w-full px-8 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 mt-5 md:mt-36 md:pb-10 flex items-center gap-1">
      <div className="w-[25%]">
        <img src="/2024.jpeg" alt="" className="w-full" />
      </div>
      <div className="w-1/2">
        <img src="/selltous.jpeg" alt="" className="w-full" />
        <div className="flex mt-1 gap-1">
          <img src="/customer.jpeg" alt="" className="w-1/2" />
          <img src="/vault.jpeg" alt="" className="w-1/2 pr-1" />
        </div>
      </div>
      <div className="w-[25%] flex flex-col gap-1">
        <img src="/market.jpeg" alt="" className="w-full" />
        <img src="/refinary.jpeg" alt="" className="w-full" />
      </div>
    </div>
  );
}

export default SellToUs;
