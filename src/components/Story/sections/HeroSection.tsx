"use client";

import Button from "@/components/Button";
import { Header1, Header1Plus, Header3, Paragraph1, Paragraph3 } from "@/components/Text";
import React from "react";
import AOS from "aos";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="mt-[90px] ">
      <div className=" container1  h-full [460px overflow-hidden w-full ">
        <div
          className="relative z-10  py-[32px] pt-[150px] xl:py-[70px]"
          data-aos="fade-right"
        >
          <div className=" flex flex-col xl:w-[60%] w-full xl:space-y-[24px] ">
            <Header1 className="text-white col-span-1">
              Journey Through the{" "}
              <span className="text-primary">Beautyverse</span>
            </Header1>
            <Paragraph1 className="xl:mt-[16px] mb-[24px] xl:mb-[48px] text-white">
              Across every collection, you’ll find a story — one woven from
              creativity, expertise, and a dedication to crafting beauty that
              resonates far beyond the surface.
            </Paragraph1>
            <Button
              text="View Our Brands"
              href="/apply"
              isLink={true}
              additionalClasses="border-primary xl:w-fit w-full mb-[50px]  "
            />
          </div>
        </div>
      </div>
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover xl:-top-[100px] xl:-left-[0px] -left-[150px] -top-[24px] bg-center- z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dz0vukmgt/image/upload/v1754817067/Gemini_Generated_Image_yhbki2yhbki2yhbk_hrfyme.png')",
        }}
      ></div>
      {/* Dark overlay for the background image */}
      <div className="absolute inset-0  bg-black opacity-80 z-0"></div>
    </div>
  );
}

export default HeroSection;
