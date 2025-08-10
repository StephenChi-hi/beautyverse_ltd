"use client"

import React from "react";
import { Paragraph1, ParagraphLink1, ParagraphLink2 } from "./Text";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";


function Footer() {
  const pathname = usePathname();
  
  if (pathname.includes("/admin")) {
    return null; // Return null to hide the navbar
  }


  return (
    <div
      className={
        ["/contact-us", "/privacy-policy", "/terms-of-service"].includes(
          pathname
        )
          ? "bg-bg_gray sm:py-[100px]"
          : " bg-white sm:py-[100px]"
      }
    >
      <div className="container1  bg-p_black  ">
        <div className=" px- sm:px-[70px] py-[32px] sm:py-[80px] ">
          {/* desktop */}
          <div className="sm:flex hidden justify-between mb-[50px]">
            <div className="">
              {" "}
              <img
                src="/images/logo.png"
                alt="logo"
                className=" h-[100px] rounded-full"
              />
            </div>
            <div className=" flex gap-[48px]">
              <Link href="/">
                <ParagraphLink2
                  className={
                    pathname === "/"
                      ? "text-[#ECECEC] font-bold "
                      : " text-[#ECECEC] "
                  }
                >
                  Home
                </ParagraphLink2>
              </Link>{" "}
              <Link href="/about-us">
                {" "}
                <ParagraphLink2
                  className={
                    pathname === "/about-us"
                      ? "text-[#ECECEC] font-bold "
                      : " text-[#ECECEC] "
                  }
                >
                  About
                </ParagraphLink2>
              </Link>
              <Link href="/products">
                {" "}
                <ParagraphLink2
                  className={
                    pathname === "/products"
                      ? "text-[#ECECEC] font-bold "
                      : " text-[#ECECEC] "
                  }
                >
                  Products
                </ParagraphLink2>
              </Link>
            </div>
            <div className=" flex flex-col py-4 gap-4 items-center- justify-center-">
              <div className=" flex gap-4 items-center">
                <Link href="/">
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729676533/utilities/templates/instagram_2_ujmgac.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729676725/utilities/templates/facebook-app-symbol_x2whit.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729675779/utilities/templates/twitter_3_sihd1i.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* mobile  */}
          <div className=" mb-[24px] sm:hidden sm:mb-[110px]">
            <div className="  flex gap-[24px] flex-wrap mb-[24px] ">
              {" "}
              <Link href="/">
                {" "}
                <ParagraphLink1 className=" text-[#ECECEC]  ">
                  Home{" "}
                </ParagraphLink1>
              </Link>
              <Link href="/about-us">
                {" "}
                <ParagraphLink1 className=" text-[#ECECEC]  ">
                  About{" "}
                </ParagraphLink1>
              </Link>
              <Link href="/products">
                {" "}
                <ParagraphLink1 className=" text-[#ECECEC] ">
                  Products
                </ParagraphLink1>
              </Link>
              <div className=" flex flex-col p-4- gap-4 items-center- justify-center-">
                <div className=" flex gap-4 items-center">
                  <Link href="/">
                    <img
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729676533/utilities/templates/instagram_2_ujmgac.png"
                      alt="instagram"
                      className="w-[14px] h-[14px]"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729676725/utilities/templates/facebook-app-symbol_x2whit.png"
                      alt="facebook"
                      className="w-[14px] h-[14px]"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729675779/utilities/templates/twitter_3_sihd1i.png"
                      alt=""
                      className="w-[14px] h-[14px]"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-1 flex w-full justify-center bg-black order-2 sm:order-1">
              {" "}
              <img
                src="/images/logo.png"
                alt="logo"
                className=" h-[100px] rounded-full"
              />
            </div>
          </div>

          <div className=" border-t pt-[24px] sm:pt-[32px] flex flex-wrap justify-between">
            <ParagraphLink2 className=" text-[#ECECEC] ">
              © 2024 Beautyverse. All rights reserved.
            </ParagraphLink2>

            <div>
              <Link href="https://www.cybalbuzz.com/" className="">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC]  ">
                  Built with ❤️ by CybalBuzz{" "}
                </ParagraphLink2>
              </Link>
            </div>
            <div className="flex flex-wrap gap-[24px] items-center">
              <Link href="/privacy-policy" className="">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC] underline ">
                  Privacy Policy
                </ParagraphLink2>
              </Link>

              <Link href="/terms-of-service">
                <ParagraphLink2 className=" text-[#ECECEC] underline">
                  Terms of Service{" "}
                </ParagraphLink2>
              </Link>

              {/* <Link href="/">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC] underline">
                  Cookies Settings{" "}
                </ParagraphLink2>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
