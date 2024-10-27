import React from "react";
import { Exit, Info, Share } from "./icons/ArrowUp";

function Office() {
  return (
    <div className="bg-[#4D6A79] px-4 flex items-center justify-between gap-2">
      <div className="flex items-center gap-1">
        <Exit />
        <div>
          <h1 className="text-white text-sm">Gold Stock Offices</h1>
          <div className="flex items-center gap-1">
            <Info />
            <h1 className="text-white text-[10px]">
              This map was made with Google My Maps.{" "}
              <span className="text-[#56a8d2]">Create your own</span>
            </h1>
          </div>
        </div>
      </div>
      <Share />
    </div>
  );
}

export default Office;
