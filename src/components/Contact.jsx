import React from "react";
import { Message } from "./icons/ArrowUp";

function Contact() {
  return (
    <div
      className="px-8 md:px-14 min-[1280px]:px-56 min-[1400px]:px-72 py-4 flex md:flex-row flex-col items-center gap-4"
      style={{ backgroundImage: 'url("/contactbg.jpeg")' }}
    >
      <div className="flex sm:flex-row flex-col items-center gap-4">
        <div className="w-full sm:w-auto">
          <Message />
        </div>
        <div>
          <h1 className="text-white text-lg font-semibold leading-6">
            NEVER MISS A DEAL
          </h1>
          <p className="text-white text-xs md:w-[480px]">
            Stay updated with the latest news in precious metal technology, the
            future of gold, events and updates on the business.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/3 flex items-center relative">
        <input
          type="text"
          placeholder="Enter your email ID"
          className="w-full px-3 py-[7px] rounded-l-sm border border-transparent focus:outline-none text-xs "
        />
        <button className="bg-[#000] text-white px-4 py-[8px] rounded-sm absolute sm:-right-12 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Contact;
