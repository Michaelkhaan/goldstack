/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from "react";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import BottomBar from "./components/BottomBar";
import CoinsBar from "./components/CoinsBar";
import MarketNews from "./components/MarketNews";
import Card from "./components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./components/icons/ArrowUp";
import SellToUs from "./components/SellToUs";
import AboutGold from "./components/AboutGold";
import WhyToBuy from "./components/WhyToBuy";
import Office from "./components/Office";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const coinsData = [
    {
      title: "Selling Gold Ounce",
      subTitle: "CAD 3,729.93",
    },
    {
      title: "Selling Gold Ounce",
      subTitle: "CAD 3,729.93",
    },
    {
      title: "Selling Gold Ounce",
      subTitle: "CAD 3,729.93",
    },
    {
      title: "Selling Gold Ounce",
      subTitle: "CAD 3,729.93",
    },
    {
      title: "Selling Gold Ounce",
      subTitle: "CAD 3,729.93",
    },
    {
      title: "Selling Gold Ounce",
      subTitle: "CAD 3,729.93",
    },
  ];

  const cardData = [
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
  ];
  const newCardData = [
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
    {
      image: "/leaf.jpeg",
      title: "1 OZ GOLD AARUS HAPPY DIWALI BAR",
      price: "CA$3,744.14",
    },
  ];
  return (
    <div>
      <Topbar />
      <Header />
      <BottomBar />
      <div>
        <img src="/Hero.png" alt="" className="w-full" />
      </div>
      <div className="px-8 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 w-full flex flex-wrap items-center justify-between">
        {coinsData?.map((e, index) => (
          <CoinsBar key={index} title={e?.title} subtitle={e?.subTitle} />
        ))}
      </div>
      <MarketNews />
      <div className="w-full px-8 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 slick-slider mt-10">
        <div
          className="absolute left-5 min-[1100px]:left-10 min-[1325px]:left-12 top-1/2 transform -translate-y-1/2 p-1 bg-[#ac954a] rounded-md cursor-pointer z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <PrevArrow />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {cardData?.map((e, index) => (
            <div key={index} className="p-1">
              <Card
                src={e?.image}
                title={e?.title}
                price={e?.price}
                className=""
              />
            </div>
          ))}
        </Slider>
        <div
          className="absolute right-6 min-[800px]:right-10 min-[1270px]:right-16 min-[1325px]:right-24 top-1/2 transform -translate-y-1/2 p-1 bg-[#ac954a] rounded-md cursor-pointer z-10"
          onClick={() => sliderRef.current.slickNext()}
        >
          <NextArrow />
        </div>
      </div>
      <div className="w-full px-8 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 slick-slider mt-10">
        <div
          className="absolute left-5 min-[1100px]:left-10 min-[1325px]:left-12 top-1/2 transform -translate-y-1/2 p-1 bg-[#ac954a] rounded-md cursor-pointer z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <PrevArrow />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {newCardData?.map((e, index) => (
            <div key={index} className="p-1">
              <Card
                src={e?.image}
                title={e?.title}
                price={e?.price}
                className=""
              />
            </div>
          ))}
        </Slider>
        <div
          className="absolute right-6 min-[800px]:right-10 min-[1270px]:right-16 min-[1325px]:right-24 top-1/2 transform -translate-y-1/2 p-1 bg-[#ac954a] rounded-md cursor-pointer z-10"
          onClick={() => sliderRef.current.slickNext()}
        >
          <NextArrow />
        </div>
      </div>
      <SellToUs />
      <AboutGold />
      <WhyToBuy />
      <Office />
      <div className="w-full">
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?q=pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
