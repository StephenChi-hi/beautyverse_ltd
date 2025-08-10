"use client";

import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function Section1() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });


  return (
    <div>
      {" "}
      <div className=" container1 py-[24px] xl:py-[100px] text-white">
        {" "}
        <div
          className=" flex xl:gap-[24px] flex-col items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>Our Story</Header3>
          <Paragraph1 className="max-w-[883px] text-center">
            Born from a passion for creativity and excellence, Beautyverse
            brings together artistry, innovation, and care to shape beauty
            experiences that inspire and endure.
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-6 gap-[24px] xl:gap-[30px] items-center">
          <div className=" xl:col-span-3">
            <div className=" h-full sm:h-[550px] overflow-hidden " data-aos="fade-right">
              <img
                src="https://res.cloudinary.com/dz0vukmgt/image/upload/v1754819167/Gemini_Generated_Image_r9v1err9v1err9v1_wezx7j.png"
                alt="photographer"
                className="w-full  "
              />{" "}
            </div>
          </div>
          <div className=" xl:col-span-3 space-y-[24px] xl:space-y-[30px]">
            <div className="  " data-aos="fade-left">
              <div className="xl:space-y-[32px] space-y-[24px] text-justify ">
                <Header4>Our People, Our Purpose</Header4>
                <Paragraph1>
                  At Beautyverse, our team is the heartbeat of everything we do.
                  United by a shared passion for creativity and excellence, we
                  bring together diverse talents to design, craft, and deliver
                  beauty experiences that inspire confidence and joy.
                </Paragraph1>

                <Paragraph1>
                  Our mission is simple yet powerful: to blend artistry with
                  innovation in every creation, while ensuring quality, safety,
                  and care remain at the forefront. We envision a world where
                  beauty is limitless — a universe where creativity flourishes
                  and individuality is celebrated.
                </Paragraph1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-[24px] xl:mt-[64px] space-y-[24px] xl:space-y-[64px] text-justify "
          data-aos="zoom-in"
        >
          <Paragraph1>
            Collaboration fuels our culture. From research and formulation to
            packaging and distribution, every step is a testament to our
            dedication and teamwork. We believe that when people work together
            with purpose, the results are not only beautiful — they’re
            unforgettable.
          </Paragraph1>

          <Paragraph1>
            Whether we’re launching a new collection, partnering with retailers,
            or creating private-label solutions, our goal is to craft
            experiences that leave a lasting impression. In the Beautyverse,
            every idea has the potential to shine.
          </Paragraph1>
        </div>
      </div>
    </div>
  );
}

export default Section1;
