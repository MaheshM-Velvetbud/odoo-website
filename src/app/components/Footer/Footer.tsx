"use client"

import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-1">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-10 px-12 py-2 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/images/logo.png" alt="footer lgo" className="h-32 w-32" />
          <p className="text-center lg:text-start">Chalakuzhy Building,below SBI branch,Peroorkada 695005</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-xl font-medium">Company</p>
          <p className="text-base">Careers</p>
          <p className="text-base">Teachers</p>
          <p className="text-base">Support</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-xl font-medium">Product</p>
          <p className="text-base">Courses</p>
          <p className="text-base">Pricing</p>
          <p className="text-base">Blog</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-xl font-medium">Legal</p>
          <p className="text-base">Terms & Conditions</p>
          <p className="text-base">Privacy policy</p>
        </div>
        <div className="flex items-center gap-2">
                <BsFacebook className="text-3xl text-blue-500"/>
                <BsTwitter className="text-3xl text-black"/>
                <BsInstagram className="text-3xl text-red-500"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;