import React from "react";

function Card({ src, title, price, className }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md w-full px-3 py-2 ${className}`}
    >
      <img src={src} alt="" className="w-full h-44" />
      <h1 className="text-sm font-semibold text-center leading-6 w-[150px] mx-auto">
        {title}
      </h1>
      <div className="mt-7">
        <h1 className="text-xs leading-6 text-center">As low As</h1>
        <h1 className="text-base font-bold leading-6 text-center">{price}</h1>
        <button className="bg-[#ac954a] w-full rounded-full text-white text-xs leading-7">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Card;
