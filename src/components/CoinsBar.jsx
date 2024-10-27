import React from "react";

function CoinsBar({ title, subtitle }) {
  return (
    <div className="">
      <h1 className="text-sm font-bold leading-6">{title}</h1>
      <h1 className="text-xs font-semibold leading-6">{subtitle}</h1>
    </div>
  );
}

export default CoinsBar;
