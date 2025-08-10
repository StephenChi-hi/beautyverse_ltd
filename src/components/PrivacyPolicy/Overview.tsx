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
            <Header1Plus>Privacy Policy</Header1Plus>
            <Paragraph3>
              At Beautyverse, we value your trust and are committed to
              protecting your privacy. This policy explains how we collect, use,
              and safeguard your information when you browse our website,
              purchase our products, or engage with our services.
            </Paragraph3>
          </div>
          <div className="absolute sm:-bottom-[200px] -bottom-[60px] overflow-hidden flex w-full">
            <img
              className="min-w-full"
              src="/images/white_bgR.svg"
              alt="privacy"
            />
          </div>
        </div>

        <div className="py-4 sm:py-[50px] rounded-b-[24px] text-p_black z-[10] bg-white px-4 sm:px-[65px] space-y-[18px] sm:space-y-[32px]">
          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Information We Collect
            </ParagraphLink1>
            <Paragraph1>
              We may collect personal information to process orders and provide
              better service, including:
              <br />
              - Personal Details: Name, email, phone number, shipping/billing
              address, and other details provided during checkout or inquiries.
              <br />
              - Usage Data: Information like IP address, browser type, and pages
              visited to help us improve our website.
              <br />- Cookies: Used to enhance site functionality, remember
              preferences, and analyze performance. You can manage cookie
              settings through your browser.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              How We Use Your Information
            </ParagraphLink1>
            <Paragraph1>
              The information we collect helps us:
              <br />
              - Process Orders: Manage purchases, payments, and shipping.
              <br />
              - Improve Experience: Tailor product recommendations and enhance
              our services.
              <br />- Share Updates: With your consent, send promotions, product
              launches, and skincare tips.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Safeguarding Your Data
            </ParagraphLink1>
            <Paragraph1>
              We use industry-standard security measures to protect your data
              from unauthorized access. While no system can be guaranteed 100%
              secure, we are committed to safeguarding your information to the
              best of our ability.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Sharing Your Information
            </ParagraphLink1>
            <Paragraph1>
              We never sell your personal information. We may share limited
              data:
              <br />
              - With Trusted Partners: Such as payment processors, shipping
              providers, and marketing platforms to fulfill your orders and
              services.
              <br />- For Legal Compliance: If required by law or to protect our
              rights.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Your Rights
            </ParagraphLink1>
            <Paragraph1>
              You have the right to:
              <br />
              - Access, correct, or request deletion of your personal
              information.
              <br />
              - Opt-out of promotional communications at any time.
              <br />- Manage cookies via your browser settings.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Links to External Websites
            </ParagraphLink1>
            <Paragraph1>
              Our site may include links to third-party websites. We are not
              responsible for their privacy policies and encourage you to review
              them before sharing information.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className="font-bold text-primary">
              Changes to Our Privacy Policy
            </ParagraphLink1>
            <Paragraph1>
              We may update this policy from time to time. Changes will be
              posted here with the updated effective date. Please check
              periodically to stay informed.
            </Paragraph1>
          </div>
        </div>
        <Section6 />
      </div>
    </div>
  );
}

export default Overview;
