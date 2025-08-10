"use client";

import Button from "@/components/Button";
import { Header3, Header4, Header5, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React, { useState } from "react";
import AOS from "aos";


function Section5() {
  const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

  const toggleParagraphVisibility = (index: any) => {
    setOpenedQuestionIndex(openedQuestionIndex === index ? null : index);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  // Array of FAQ items
  const faqs = [
    {
      id: 1,
      question: "Q. What types of products do you offer?",
      answer:
        "Beautyverse creates and distributes a wide range of cosmetics and skincare — from everyday essentials to innovative, limited-edition collections. Each product is designed with artistry, quality, and care at its core.",
    },
    {
      id: 2,
      question: "Q. How can I place an order?",
      answer:
        "For individual purchases, visit our official online store or select retail partners. For wholesale or distribution inquiries, simply reach out through our Contact Form, and our team will guide you through the process.",
    },
    {
      id: 3,
      question: "Q. Are your products safe for all skin types?",
      answer:
        "Yes. Every Beautyverse product undergoes rigorous safety and quality testing to ensure it meets the highest standards, so you can enjoy your beauty experience with complete confidence.",
    },
    {
      id: 4,
      question: "Q. Do you ship internationally?",
      answer:
        "Absolutely. Beautyverse partners with trusted logistics providers to deliver our products to customers and retailers worldwide. Shipping times may vary by region.",
    },
    {
      id: 5,
      question: "Q. Do you offer custom or private label manufacturing?",
      answer:
        "Yes. Our manufacturing facilities can create custom formulations, packaging, and branding solutions for partners looking to launch their own beauty lines.",
    },
    {
      id: 6,
      question: "Q. Are your products cruelty-free?",
      answer:
        "We are committed to ethical beauty. Beautyverse products are never tested on animals, and we actively seek sustainable and responsible sourcing for our ingredients.",
    },
    {
      id: 7,
      question: "Q. How do you ensure product quality?",
      answer:
        "From formulation to final packaging, each step of our process is monitored by experts. We follow strict manufacturing standards to ensure every product meets our promise of quality, safety, and performance.",
    },
  ];

  return (
    <div>
      <div className=" container1 pt-[24px] xl:pt-[100px] text-p_black">
        {" "}
        <div
          className=" flex flex-col xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            Frequently Asked <span className="text-primary">Questions</span>
          </Header3>
          <Paragraph1 className="max-w-[883px] text-center">
            Everything you need to know about our skincare products, ordering
            process, and how we ensure quality and safety for every customer.
          </Paragraph1>
        </div>
        <div
          className="flex-row items-center justify-center  xl:py-[17px] text-p_black bg-bg_gray  "
          // data-aos="flip-up"
        >
          {/* Mapping over FAQ items */}
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`w-full px-4 xl:px-[37px] pt-4 xl:py-[11px] ${
                index !== faqs.length - 1
                  ? "border-b-4 border-[#E4E4E7]"
                  : "xl:-mb-6"
              }`}
            >
              <div
                className="flex items-start   justify-between cursor-pointer"
                onClick={() => toggleParagraphVisibility(faq.id)}
              >
                <Header5 className="text-[18px] w-[250px] xl:w-full font-medium text-primary-50">
                  {faq.question}
                </Header5>
                <button
                  className=" flex justify-center items-center h-4 w-4  cursor-pointer"
                  onClick={() => toggleParagraphVisibility(faq.id)}
                >
                  <img
                    src={
                      openedQuestionIndex === faq.id
                        ? "/icons/dash.svg"
                        : "/icons/plus.svg"
                    }
                    alt=""
                    className=""
                    style={{
                      transform:
                        openedQuestionIndex === faq.id
                          ? "rotate(0deg)" // Keep it static or adjust if necessary
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
              </div>
              <p
                className={`text-[14px] xl:text-[16px]- md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[18px]  overflow-hidden  transition-all pb-4 pt-4 max-w-[90%] duration-300 ${
                  openedQuestionIndex === faq.id ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{ opacity: openedQuestionIndex === faq.id ? "1" : "0" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section5;
