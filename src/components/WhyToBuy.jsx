import React from "react";

function WhyToBuy() {
  return (
    <div
      className="w-full px-8 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 pb-10"
      style={{ backgroundImage: 'url("/whytobuy.jpeg")' }}
    >
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-white text-3xl leading-6">
          Why to Buy From Gold Stock
        </h1>
        <h1 className="text-white text-lg leading-6 mt-8">
          By offering the most competitive prices on precious metals, we have
          become the market leader in Canada.
        </h1>
        <p className="text-white text-lg leading-6 text-center mt-10">
          Whether you are visiting the Gold Stock online store to make a small
          investment or placing a bulk order, our team is dedicated to ensuring
          your satisfaction. Payment options are flexible and there are no
          hidden charges. We have a support team ready to assist you with any
          questions you may have. You can also visit us in person at one of our
          tree locations - Mississauga, Malton in Ontario and Vancouver in
          British Columbia.
        </p>
        <button className="border-2 border-white text-white leading-6 text-base px-14 py-2 mt-5 rounded-sm">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default WhyToBuy;
