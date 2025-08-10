"use client";

import React from "react";
import { Header1Plus, Paragraph1, Paragraph3, ParagraphLink1 } from "../Text";
import Section6 from "../home/sections/Section6";
import AOS from "aos";

function Overview() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className="pt-[10px] bg-bg_gray">
      <div data-aos="flip-right" className="container1">
        <div className="relative overflow-hidden">
          <div className="flex flex-col bg-primary sm:gap-[20px] px-4 sm:p-[65px] py-12 sm:py- rounded-t-[24px] w-full sm:text-center text-white">
            <Header1Plus>Terms and Conditions</Header1Plus>
            <Paragraph3>
              These Terms and Conditions outline the rules, responsibilities,
              and agreements that govern your use of our website, products, and
              services. By engaging with us, you agree to follow these terms to
              ensure a safe, fair, and transparent relationship.
            </Paragraph3>
          </div>
          <div className="absolute sm:-bottom-[200px] -bottom-[60px] overflow-hidden flex w-full">
            <img
              className="min-w-full"
              src="/images/white_bgR.svg"
              alt="terms"
            />
          </div>
        </div>

        <div className="py-4 sm:py-[50px] rounded-b-[24px] text-p_black z-[10] bg-white px-4 sm:px-[65px] space-y-[18px] sm:space-y-[32px]">
          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Use of Our Products & Services
            </ParagraphLink1>
            <Paragraph1>
              Our products are intended for professional and personal skincare
              use. You agree to use them as directed and not for any unlawful or
              harmful purposes.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Orders, Payments & Delivery
            </ParagraphLink1>
            <Paragraph1>
              All orders are subject to acceptance and availability. Prices are
              listed in the currency displayed at checkout. Payment must be
              completed before dispatch, and delivery times are estimates, not
              guarantees.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Returns & Refunds
            </ParagraphLink1>
            <Paragraph1>
              We accept returns for unopened, unused products within [X] days of
              purchase. Refunds will be issued according to our Returns Policy.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Limitation of Liability
            </ParagraphLink1>
            <Paragraph1>
              We are not liable for any indirect, incidental, or consequential
              damages arising from the use of our products or services, except
              as required by law.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Changes to These Terms
            </ParagraphLink1>
            <Paragraph1>
              We may update these terms from time to time. Any changes will be
              posted on this page with the updated effective date.
            </Paragraph1>
          </div>
        </div>
        <Section6 />
      </div>
    </div>
  );
}

export default Overview;
