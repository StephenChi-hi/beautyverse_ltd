"use client";

import Button from "@/components/Button";
import { Header1, Paragraph1, Paragraph2, Paragraph3 } from "@/components/Text";
import React from "react";
import ElevatingBrands from "./others/ElevatingBrands";
import AOS from "aos";
import FullCoverVideo from "./others/FullCoverVideo";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <div className="  ">
      <div className="  bg-p_black -">
        <div className=" container1 grid grid-cols-1 lg:grid-cols-5 gap-2 items-center ">
          {" "}
          <div
            className="col-span-2 order-2- pt-[80px] xl:py-[120px] py-[50px] lg:order-1-"
            data-aos="fade-up-right"
          >
            <Header1 className="text-white mt-4 xl:mt-0">
              Dedicated to <span className="text-primary">Healthy</span> Skin,
              Inspired by{" "}
              <span className="text-primary">Your Natural Beauty</span>
            </Header1>
            <Paragraph1 className="mt-[16px] mb-[48px] text-white">
              Premium cosmetics and skincare crafted to celebrate your unique
              beauty, empowering you to shine with confidence every day.
            </Paragraph1>
            <div className="flex  xl:flex-row flex-col items-center mt-4 gap-[24px] xl:gap-[32px]">
              <Button
                text="Contact us"
                href="/contact-us"
                isLink={true}
                additionalClasses="border-primary xl:w-fit w-full "
              />
              <Button
                text=" Brands"
                href="/products"
                isLink={true}
                color="text-white"
                backgroundColor=" bg-p_black"
                border="border-2 border-white "
                additionalClasses=" xl:w-fit w-full "
              />
            </div>
          </div>
          <div className="col-span-3 min-h-[500px] bg-black  h-full lg:order-2- flex justify-center">
            <FullCoverVideo />
          </div>
        </div>
      </div>
      {/* <div className=" mt-[42px] ">
        <ElevatingBrands />
      </div> */}
    </div>
  );
}

export default HeroSection;
