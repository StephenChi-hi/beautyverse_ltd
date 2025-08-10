"use client";

import Button from "@/components/Button";
import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import RandomFaces from "./others/RandomFaces";

function Section2() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div>
      <div className=" container1   text-white">
        {" "}
        <div
          className="  border-b-4  pt-[24px] xl:pt-[50px] pb-[20px] border-black flex flex-col gap-[8px] xl:gap-[24px] items-center w-full "
          data-aos="fade-up"
        >
          <Header3 className="text-center">
            Where Your <span className=" text-primary ">Beauty</span> Takes
            Center Stage
          </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Every product we create is inspired by the uniqueness of you —
            enhancing your radiance and celebrating your individuality.
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-5  sm:grid-cols-1 ">
          <div className="  xl:col-span-3 sm:border-r-4 sm:border-black ">
            <div
              className=" bg-bg_gray  overflow-hidden "
              data-aos="fade-right"
            >
              <div className="  h-[200px] sm:h-[550px] overflow-hidden sm:border-b-4 bg-black sm:border-black flex   ">
                <img
                  src="https://res.cloudinary.com/dz0vukmgt/image/upload/v1754812014/ssdfgh_gxjooe.png"
                  alt="branding"
                  className=" opacity-90 w-full  object-center object-cover "
                />{" "}
              </div>

              <div className=" text-p_black sm:border-b-4 sm:border-black space-y-[24px] xl:space-y-[32px] p-[24px] xl:p-[32px] flex flex-col w-full">
                <Header4>Beauty You Can Trust</Header4>
                <Paragraph1>
                  With years of expertise in crafting and delivering exceptional
                  beauty products, we ensure every creation meets the highest
                  standards of quality, care, and safety — so you can enjoy your
                  beauty journey with complete confidence.
                </Paragraph1>
                <Button
                  text="Learn more"
                  href="/contact-us"
                  isLink={true}
                  additionalClasses="border-0 xl:w-fit w-full "
                />
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 ">
            <div
              className=" bg-bg_gray  sm:border-b-4 sm:border-black "
              data-aos="fade-down-left"
            >
              <div className="space-y-[24px] text-p_black xl:space-y-[32px] p-[24px] xl:p-[32px]">
                <Header4>Creating Beauty Together</Header4>
                <Paragraph1>
                  At Beautyverse, every creation begins with collaboration. We
                  blend innovation and artistry to shape collections that
                  reflect your vision, your style, and the world you want to
                  share.
                </Paragraph1>
                <RandomFaces />
              </div>
            </div>
            <div
              className=" bg-primary sm:border-b-4 sm:border-black relative overflow-hidden text-white g "
              data-aos="fade-up-left"
            >
              <div className=" absolute bottom-0 -right-[150px] flex w-full justify-end  ">
                <div
                  style={{ transform: "rotate(-36deg)" }}
                  className=" h-8 w-[200px]- w-full border-4 border-white"
                >
                  {" "}
                </div>
              </div>
              <div className="xl:space-y-[6px]  2xl:space-y-[32px] space-y-[24px] p-[24px] xl:p-[32px]">
                <div className=" flex w-full justify-end  ">
                  <div className=" h-[40px] w-[50px]">
                    <div className=" relative h-[40px] w-[50px]">
                      <div
                        style={{ transform: "rotate(-12deg)" }}
                        className=" rounded-lg border-4 relative border-white  bg-primary h-[40px] w-[50px]"
                      ></div>
                      <div
                        style={{ transform: "rotate(8deg)" }}
                        className=" bg-primary h-full w-full overflow-hidden absolute -top-[20px] -right-[20px] p-4 border-4 border-white rounded-lg object-cover"
                      ></div>
                    </div>
                  </div>{" "}
                </div>
                <Header4>Here to Help You Shine</Header4>{" "}
                <Paragraph1>
                  From selecting the right formulas to perfecting every detail,
                  we’re here to ensure your beauty experience feels effortless,
                  safe, and truly your own. Together, we’ll create moments that
                  let your natural brilliance shine through.
                </Paragraph1>
                <div>
                  <Link
                    href="/contact-us"
                    className=" text-[20px] font-bold text-white underline"
                  >
                    <ParagraphLink1> Contact us</ParagraphLink1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
