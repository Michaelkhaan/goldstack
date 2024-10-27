import React, { useState } from "react";
import { Arrow, ArrowDown, ArrowUp } from "./icons/ArrowUp";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    flag: "/canada.png",
    name: "CAD",
  });

  const handleOpen = () => setIsOpen(!isOpen);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const countries = [
    { flag: "/usa.png", name: "USA" },
    { flag: "/canada.png", name: "CAD" },
  ];
  return (
    <div className="bg-[#112200] px-8 py-2 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 sm:flex max-[1133px]:flex-col items-center justify-between gap-3">
      <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-2 md:gap-3">
        <div className="flex items-center gap-1">
          <ArrowUp />
          <h1 className="text-white text-[10px] font-semibold leading-6 flex gap-3 whitespace-nowrap">
            Gold $3,672.45 <span className="text-[#67C73C]">+3.58</span>
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <ArrowDown />
          <h1 className="text-white text-[10px] font-semibold leading-6 flex gap-3">
            Silver  $43.49   <span className="text-[#F64040]">-0.08</span>
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <ArrowUp />
          <h1 className="text-white text-[10px] font-semibold leading-6 flex gap-3">
            Platinum  $1,366.88   <span className="text-[#67C73C]">+0.14</span>
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <ArrowDown />
          <h1 className="text-white text-[10px] font-semibold leading-6 flex gap-3">
            Palladium  $1,475.10  {" "}
            <span className="text-[#F64040]"> -10.75</span>
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-wrap sm:flex-nowrap items-center gap-4 md:gap-8 mt-3 sm:mt-0">
        {/* <div className="lg:border-l pl-1">
          <div className="flex items-center gap-1">
            <Graph />
            <h1 className="text-xs leading-6 text-white">View Charts</h1>
          </div>
        </div> */}
        <div className="border-l pl-2">
          <div className="flex items-center gap-3 relative">
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="w-8"
            />
            <h1 className="text-white text-xs whitespace-nowrap">
              {selectedCountry.name} $
            </h1>
            <div
              className={`cursor-pointer ${
                isOpen ? "rotate-180 duration-300 ease-in-out" : ""
              }`}
              onClick={handleOpen}
            >
              <Arrow />
            </div>
            <div>
              <div
                className={`absolute top-6 right-5 w-20 z-10 bg-white p-3 shadow-md ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => handleSelectCountry(country)}
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-6 h-4"
                    />
                    <h1>{country.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-white text-xs max-[1150px]:text-sm leading-6 whitespace-nowrap">
            CONTACT US:
          </h1>
          <h1 className="text-white text-xs leading-6 tracking-wider whitespace-nowrap">
            +1-888-944-6539
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-white text-sm leading-6">Email:</h1>
          <h1 className="text-white text-xs leading-6 tracking-wider">
            info@goldstacklive.com
          </h1>
        </div>
        {/* <div className="border-l pl-2">
          <div className="flex items-center gap-2 py-1">
            <Cart />
            <div className="flex flex-col items-center">
              <span className="bg-[#507928] w-6 h-4 rounded-lg px-4 flex items-center justify-center text-white text-xs">
                0
              </span>
              <h1 className="text-white text-xs">Cart</h1>
            </div>
          </div>
        </div> */}
        {/* <div className="border-l pl-2">
          <h1 className="text-white text-xs leading-6">Login</h1>
        </div> */}
        {/* <div className="border-l pl-2">
          <h1 className="text-white text-xs leading-6">Register</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Topbar;
