import React from "react";

function AboutGold() {
  return (
    <div
      className="w-full px-8 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 flex sm:flex-row flex-col items-center py-10 mt-10"
      style={{ backgroundImage: 'url("/aboutgold.jpeg")' }}
    >
      <div className="py-5">
        <h1 className="text-[#536A7B] text-2xl sm:text-3xl font-bold leading-6">
          ABOUT GOLD STOCK
        </h1>
        <p className="text-[#536A7B] text-sm leading-6 lg:w-[710px] mt-5">
          GOLD STOCK is a privately owned wholesale precious metals company
          specializing in the distribution and refining of precious metals, such
          as gold, silver, platinum and palladium. Our clients are Banks, Hedge
          Funds, Investors, Jewellers, Bullion Dealers, Coin Dealers, Jewelry
          Manufacturers, and Precious Metal Refiners. The company was founded by
          former goldsmiths and has since grown to establish its brand
          throughout Canada and the USA.
        </p>
        <button className="border-2 border-[#507928] text-[#507928] text-sm leading-6 px-10 py-1 mt-4">
          VIEW MORE
        </button>
      </div>
      <img
        src="/coins.png"
        alt=""
        className="w-full sm:w-[40%] min-[1300px]:w-[50%]"
      />
    </div>
  );
}

export default AboutGold;
