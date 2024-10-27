import React from "react";
import { Cart, Clip, Person } from "./icons/ArrowUp";

function Header() {
  return (
    <div
      className="w-full bg-cover bg-center px-8 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 py-6"
      style={{ backgroundImage: "url('/navbar.png')" }}
    >
      <div className="w-full flex sm:flex-row flex-col items-center justify-between gap-2">
        <div className="w-full sm:w-auto">
          <img src="/logo.png" alt="Logo" className="w-24" />
        </div>
        <div className="w-full sm:w-4/6 flex sm:flex-row flex-col items-center justify-end gap-2 sm:gap-14 sm:pr-20">
          <div className="w-full sm:w-1/2 flex items-center relative">
            <input
              type="text"
              placeholder="Search entire store here..."
              className="w-full px-3 py-[7px] rounded-l-sm border border-transparent focus:outline-none text-xs "
            />
            <button className="bg-[#507928] hover:bg-[#456822] text-white px-4 py-[5.8px] rounded-sm absolute sm:-right-12 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.007 4.007a1 1 0 01-1.414 1.414l-4.007-4.007zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="w-full sm:w-auto flex items-center gap-2">
            <Cart />
            <Clip />
            <div className="flex items-center gap-1 sm:pl-8">
              <button className="text-white text-base leading-6">
                Register
              </button>
              <h1 className="text-white">/</h1>
              <button className="text-white text-base leading-6">Login</button>
              <span className="w-8 border border-white aspect-square rounded-full flex items-center justify-center cursor-pointer">
                <Person />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
