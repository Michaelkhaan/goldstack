import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "./icons/ArrowUp";

function Footer() {
  return (
    <div className="bg-[#1C3E2F] px-8 md:px-14 min-[1280px]:px-20 min-[1400px]:px-28 py-20">
      <div className="flex lg:flex-row flex-col items-center gap-10">
        <div className="w-full lg:w-1/3">
          <img src="/logo.png" alt="" className="w-32" />
          <p className="text-white text-xs leading-6 lg:w-[350px] mt-2">
            By offering the competitive price on pricious metal, we have become
            the market leader in canada are through out the...
          </p>
          <div className="flex items-center gap-2">
            <span className="cursor-pointer">
              <Facebook />
            </span>
            <span className="cursor-pointer">
              <Instagram />
            </span>
            <span className="cursor-pointer">
              <Twitter />
            </span>
            <span className="cursor-pointer">
              <Linkedin />
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5 mt-4">
            <img src="/security.png" alt="" className="w-24" />
            <img src="/mcafe.png" alt="" className="w-24" />
            <img src="/norton.png" alt="" className="w-24" />
          </div>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-1 min-[570px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div>
            <h1 className="text-white text-lg leading-6">Shop</h1>
            <div className="mt-3 flex flex-col gap-1">
              <h1 className="text-white text-sm font-light">All Bullion</h1>
              <h1 className="text-white text-sm font-light">Gold</h1>
              <h1 className="text-white text-sm font-light">Silver</h1>
              <h1 className="text-white text-sm font-light">Platinum</h1>
              <h1 className="text-white text-sm font-light">Palladium</h1>
              <h1 className="text-white text-sm font-light">Daimond</h1>
            </div>
          </div>
          <div>
            <h1 className="text-white text-lg leading-6">Shopping Tools</h1>
            <div className="mt-3 flex flex-col gap-1">
              <h1 className="text-white text-sm font-light">My Cart</h1>
              <h1 className="text-white text-sm font-light">My Wishlist</h1>
              <h1 className="text-white text-sm font-light">My Account</h1>
              <h1 className="text-white text-sm font-light">Order Status</h1>
              <h1 className="text-white text-sm font-light">Live Prices</h1>
              <h1 className="text-white text-sm font-light">Investor Guid</h1>
            </div>
          </div>
          <div>
            <h1 className="text-white text-lg leading-6">Customer Services</h1>
            <div className="mt-3 flex flex-col gap-1 pb-8">
              <h1 className="text-white text-sm font-light">Shipping</h1>
              <h1 className="text-white text-sm font-light">FAQ's</h1>
              <h1 className="text-white text-sm font-light">Market News</h1>
              <h1 className="text-white text-sm font-light">
                Account Holder Benifits
              </h1>
              <h1 className="text-white text-sm font-light">Contact Us</h1>
            </div>
          </div>
          <div>
            <h1 className="text-white text-lg leading-6">Services</h1>
            <div className="mt-3 flex flex-col gap-1">
              <h1 className="text-white text-sm font-light">Sell to Us</h1>
              <h1 className="text-white text-sm font-light">Refining</h1>
              <h1 className="text-white text-sm font-light">Storage</h1>
              <h1 className="text-white text-sm font-light">Process</h1>
              <h1 className="text-white text-sm font-light">XRF Assay</h1>
              <h1 className="text-white text-sm font-light">Fire Assay</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mt-16"></div>
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-white text-xs leading-6">
          Copyright 2024, Gold Stock, All Rights Reserved.
        </h1>
        <div className="flex flex-wrap items-center gap-3 pr-40">
          <h1 className="text-white text-xs leading-6">About gold Stock</h1>
          <h1 className="text-white text-xs leading-6">Glossary of Contact</h1>
          <h1 className="text-white text-xs leading-6">Terms and Condition</h1>
          <h1 className="text-white text-xs leading-6">Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
