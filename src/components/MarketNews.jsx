import React from "react";

function MarketNews() {
  return (
    <div className="bg-[#112200] w-full flex sm:flex-row flex-col items-center md:gap-20">
      <h1 className="bg-[#AC954A] text-base text-[#112200] font-bold leading-6 whitespace-nowrap py-2 px-4 flex items-center justify-between md:justify-normal gap-3 w-full sm:w-auto">
        Market News
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#112200"
            d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
          />
        </svg>
      </h1>
      <h1 className="text-white text-sm leading-6 px-4 sm:px-0">
        Please give us a call to inquire about the products availablility. BRICS
        to build New World Order: 1-888-944-4653 New location coming in USA
        Miami Florida and in Dubai Gold Stack.
      </h1>
    </div>
  );
}

export default MarketNews;
